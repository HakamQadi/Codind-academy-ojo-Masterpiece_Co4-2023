import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetailsModal from "../../modals/OrderDetailsModal";
import LoadingSpinner from "../LoadingSpinner";

const ViewOrders = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [selectedUserOrders, setSelectedUserOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const fetchUserOrders = async (userId, OrderId) => {
    setIsLoading(true); // Set loading to true when fetching data

    try {
      const response = await axios.get(
        `https://speedx-backend.onrender.com/order/${userId}`
      );

      if (response && response.data) {
        const allUserOrders = response.data.data.userOrders;

        allUserOrders.forEach((order) => {
          if (order._id === OrderId) {
            setSelectedUserOrders(order);
            console.log("Matching Order:", order);
          }
        });

        setIsModalOpen(true); // Open the modal when orders are fetched
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    } finally {
      setIsLoading(false); // Set loading to false when data fetching is done (success or error)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const fetchAllUsersData = async () => {
      setIsLoading(true); // Set loading to true when fetching data

      try {
        const response = await axios.get(
          "https://speedx-backend.onrender.com/admin"
        );

        if (response && response.data) {
          const usersOnly = response.data.data.filter(
            (user) => user.role === "user"
          );
          setAllUsersData(usersOnly);
          console.log(usersOnly);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false); // Set loading to false when data fetching is done (success or error)
      }
    };

    fetchAllUsersData();
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ height: "53rem", overflowY: "auto" }}
    >
      <div className="container">
        {allUsersData.map((user) => (
          <div key={user._id} className="card mt-4 border-0">
            <div
              style={{ backgroundColor: "#244459" }}
              className="card-header text-white"
            >
              <h2>{user.fullname}'s Orders</h2>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {user.orders.map((order) => (
                  <li
                    style={{ cursor: "pointer" }}
                    key={order.orderId}
                    className="list-group-item"
                    onClick={() => fetchUserOrders(user._id, order.orderId)}
                  >
                    {order.orderId}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {isLoading ? (
          <LoadingSpinner /> // Show loading spinner while fetching data
        ) : null}
      </div>
      <OrderDetailsModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        orders={selectedUserOrders}
      />
    </div>
  );
};

export default ViewOrders;
