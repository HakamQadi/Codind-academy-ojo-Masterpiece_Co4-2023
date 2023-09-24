import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetailsModal from "../../modals/OrderDetailsModal";

const ViewOrders = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [selectedUserOrders, setSelectedUserOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUserOrders = async (userId) => {
    try {
      const response = await axios.get(
        `https://speedx-backend.onrender.com/order/${userId}`
      );

      if (response && response.data) {
        setSelectedUserOrders(response.data.data.userOrders);
        console.log(response.data.data);
        setIsModalOpen(true); // Open the modal when orders are fetched
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const response = await axios.get(
          "https://speedx-backend.onrender.com/admin"
        );

        if (response && response.data) {
          // Filter the mergedData array to include only users (role: "user")
          const usersOnly = response.data.data.filter((user) => user.role === "user");
          setAllUsersData(usersOnly);
          console.log(usersOnly);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAllUsersData();
  }, []); // Runs once when the component mounts

  return (
    <div className="container-fluid" style={{ height: "53rem", overflowY: "auto" }}>
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
                  style={{cursor:'pointer'}}
                    key={order.orderId}
                    className="list-group-item"
                    onClick={() => fetchUserOrders(user._id)} // Fetch user's orders when clicked
                  >
                    {order.orderId}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <OrderDetailsModal isOpen={isModalOpen} closeModal={closeModal} orders={selectedUserOrders} />
    </div>
  );
};

export default ViewOrders;
