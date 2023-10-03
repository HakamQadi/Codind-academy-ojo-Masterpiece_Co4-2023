import axios from "axios";
import React, { useEffect, useState } from "react";
import "../formStyle.css";
import DeleteBtn from "./DeleteBtn";
import LoadingSpinner from "./components/LoadingSpinner";
import SuccessMessage from "./components/SuccessMessage"; 

const UsersTable = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isDeletingUser, setIsDeletingUser] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios
          .get("https://speedx-backend.onrender.com/admin")
          .catch((err) => {
            if (err && err.response) {
              console.log("Error: ", err.response.data);
            }
          });

        if (response && response.data) {
          setAllUsers(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleUserDelete = async (deletedUserId) => {
    try {
      setIsDeletingUser(true);

      // Filter the old items in the array and return a new array of items whose id does not match the deletedUserId
      setAllUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== deletedUserId)
      );

      setSuccessMessage("User deleted successfully!");
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeletingUser(false);
    }
  };

  const handleUsernameEdit = async (id, newUsername) => {
    try {
      await axios.patch(
        `https://speedx-backend.onrender.com/admin/edit_user/${id}`,
        {
          fullname: newUsername,
        }
      );

      // Update the username in the user list after a successful edit
      setAllUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user._id === id) {
            return { ...user, fullname: newUsername };
          }
          return user;
        })
      );

      // Show success message
      setSuccessMessage("Username updated successfully!");
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error updating username:", error);
    } 
  };

  const onCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
    setSuccessMessage("");
  };

  return (
    <>
      <div id="wrapper" style={{ width: "100%" }}>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 style={{ margin: "2rem 0 2rem 0" }} className="h3 text-white">
                Tables
              </h1>
              <div className="card shadow mb-4">
                <div className="card-body">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allUsers.map((user, index) => {
                            return (
                              <tr key={index}>
                                <td>{user._id}</td>
                                <td
                                  contentEditable={true}
                                  onBlur={(e) =>
                                    handleUsernameEdit(
                                      user._id,
                                      e.target.innerText
                                    )
                                  }
                                >
                                  {user.fullname}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.password}</td>
                                <td style={{ width: "121.5px" }}>
                                  { isDeletingUser ? (
                                    <LoadingSpinner />
                                  ) : (
                                    <DeleteBtn
                                      id={user._id}
                                      onDelete={handleUserDelete}
                                    />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success message */}
      {showSuccessMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={onCloseSuccessMessage}
        />
      )}
    </>
  );
};

export default UsersTable;
