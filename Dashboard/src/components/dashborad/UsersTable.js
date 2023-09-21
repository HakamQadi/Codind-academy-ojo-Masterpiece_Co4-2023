import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../formStyle.css";
import DeleteBtn from "./DeleteBtn";
import { useUserContext } from "../../context/UserContext";

const UsersTable = (props) => {
  const { user } = useUserContext();
  // const role = user?.userRole;
  // const token = user?.token;

  const [Driver, setDrivers] = useState([]);
  const [Users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios
          .get("https://speedx-backend.onrender.com/admin")
          .catch((err) => {
            if (err && err.response) {
              console.log("Error: ", err.response.data);
              // navigate("/login"); //redirect to the login page
            }
          });

        if (response && response.data) {
          // Separate drivers and users data from the response
          const { drivers, users } = response.data.data;

          setDrivers(drivers);
          setUsers(users);
          setAllUsers([...Users, ...Driver]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [Driver, Users]); // Removed drivers from the dependency array to prevent an infinite loop

  const handleUserDelete = (deletedUserId) => {
    // Filter the old items in the array and return a new array of items whose id does not match the deletedUserId
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user._id !== deletedUserId)
    );
  };

  const handleUsernameEdit = async (id, newUsername) => {
    try {
      await axios.patch(
        `https://speedx-backend.onrender.com/admin/edit_user/${id}`,
        {
          fullname: newUsername,
          // id: userId,
        }
      );
    } catch (error) {
      console.error("Error updating username:", error);
    }
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
                          <th>Username</th>
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
                              <td>
                                <DeleteBtn
                                  id={user._id}
                                  onDelete={handleUserDelete}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
