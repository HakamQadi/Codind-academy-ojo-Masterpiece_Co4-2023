import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetailsModal from "../../modals/OrderDetailsModal";
import LoadingSpinner from "./components/LoadingSpinner"; 

const ViewOrders = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [selectedUserOrders, setSelectedUserOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchUserOrders = async (userId, OrderId) => {
    setIsLoading(true); 

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

        setIsModalOpen(true); 
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchAllUsersData = async () => {
      setIsLoading(true); 

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
        setIsLoading(false);
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
          <LoadingSpinner /> 
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
