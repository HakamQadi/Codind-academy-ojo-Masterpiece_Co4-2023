import React from "react";
import Modal from "react-modal";

const OrderDetailsModal = ({ isOpen, closeModal, orders }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Order Details"
      className="modal-dialog modal-dialog-centered" // Center horizontally
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }} // Center vertically
    >
      <div style={{ margin: "6% auto" }} className="modal-content container">
        <div className="modal-header">
          {/* <h5 className="modal-title text-dark">Selected User's Orders</h5> */}
          <button
            style={{ marginBottom: "0px", textAlign: "center" }}
            type="button"
            className="close"
            onClick={closeModal}
          >
            <span
              style={{
                color:'white',
                backgroundColor: "red",
                padding: "0px 6px 3px 6px",
                border: "2px solid #be282a",
                borderRadius: "5px",
              }}
            >
              &times;
            </span>
          </button>
        </div>
        <div className="modal-body">
          <ul className="list-group">
            {orders.map((order) => (
              <li
                key={order._id}
                className="list-group-item"
                style={{ backgroundColor: "#ffff" }} // Background color
              >
                <h5 style={{color:'black'}}>Order ID: {order._id}</h5>
                <p>
                  <strong>Order by:</strong> {order.name}
                </p>
                <hr />
                <p>
                  <strong>Delivery Address:</strong> {order.delivery_address}
                </p>
                <p>
                  <strong>Address Details:</strong> {order.address_details}
                </p>
                <p>
                  <strong>City:</strong> {order.city}
                </p>
                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p>
                  <strong>Additional Description:</strong>{" "}
                  {order.additional_desc}
                </p>
                <hr />
                <p>
                  <strong>Receiving Address:</strong>{" "}
                  {order.recieving_address}
                </p>
                <p>
                  <strong>Recipient Address Details:</strong>{" "}
                  {order.recipient_addressDetails}
                </p>
                <p>
                  <strong>Recipient City:</strong> {order.recipient_city}
                </p>
                <p>
                  <strong>Recipient Name:</strong> {order.recipient_name}
                </p>
                <p>
                  <strong>Recipient Phone:</strong> {order.recipient_phone}
                </p>
                <p>
                  <strong>Recipient Additional Description:</strong>{" "}
                  {order.recipient_additionalDesc}
                </p>
                <hr />
                <p>
                  <strong>Selected Date:</strong> {order.selectedDate}
                </p>
                {/* Add more order details as needed */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default OrderDetailsModal;
