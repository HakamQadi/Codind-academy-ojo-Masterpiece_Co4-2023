import React from "react";
import Modal from "react-modal";

const OrderDetailsModal = ({ isOpen, closeModal, orders }) => {
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background color with some transparency
  };
  return (
    
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Order Details"
    className="modal-dialog modal-dialog-centered"
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark background color with some transparency
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    overlayStyle={overlayStyle} // Apply the customized overlay style
  >
      <div style={{ margin: "6% auto",width:'40%' }} className="modal-content container">
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
            {/* {orders.map((order) => ( */}
              <li
                key={orders._id}
                className="list-group-item"
                style={{ backgroundColor: "#ffff" }} // Background color
              >
                <h5 style={{color:'black'}}>Order ID: {orders._id}</h5>
                <p>
                  <strong>Order by:</strong> {orders.name}
                </p>
                <hr />
                <p>
                  <strong>Delivery Address:</strong> {orders.delivery_address}
                </p>
                <p>
                  <strong>Address Details:</strong> {orders.address_details}
                </p>
                <p>
                  <strong>City:</strong> {orders.city}
                </p>
                <p>
                  <strong>Phone:</strong> {orders.phone}
                </p>
                <p>
                  <strong>Additional Description:</strong>{" "}
                  {orders.additional_desc}
                </p>
                <hr />
                <p>
                  <strong>Receiving Address:</strong>{" "}
                  {orders.recieving_address}
                </p>
                <p>
                  <strong>Recipient Address Details:</strong>{" "}
                  {orders.recipient_addressDetails}
                </p>
                <p>
                  <strong>Recipient City:</strong> {orders.recipient_city}
                </p>
                <p>
                  <strong>Recipient Name:</strong> {orders.recipient_name}
                </p>
                <p>
                  <strong>Recipient Phone:</strong> {orders.recipient_phone}
                </p>
                <p>
                  <strong>Recipient Additional Description:</strong>{" "}
                  {orders.recipient_additionalDesc}
                </p>
                <hr />
                <p>
                  <strong>Selected Date:</strong> {orders.selectedDate}
                </p>
                {/* Add more order details as needed */}
              </li>
            {/* ))} */}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default OrderDetailsModal;
