import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./formStyle.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// Import your loading spinner or component here
import LoadingSpinner from "./LoadingSpinner"; // Replace with your actual loading component

const Loginform = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const { setUser } = useUserContext();
  let navigate = useNavigate();
  
  const onSubmit = async (values) => {
    setLoading(true); // Set loading to true before making the API request

    const response = await axios
      .post("https://speedx-backend.onrender.com/admin/login", values)
      .catch((err) => {
        if (err && err.response) {
          console.log("Error: ", err.response.data.message);
          setError(err.response.data.message);
        }
      });

    if (response && response.data) {
      setUser({
        username: response.data.data.fullname,
        userRole: response.data.data.role,
        token: response.data.token,
        userId: response.data.data.userId,
      });
      localStorage.setItem("username", response.data.data.fullname);
      if (response.data.data.role === "admin") {
        navigate("/dashboard");
      } else {
        console.log("You should be an Admin");
      }
    }

    setLoading(false); // Set loading back to false after the API request is complete
    setError(null);
    formik.resetForm();
  };

  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const handleInputChange = (event) => {
    setError(null);
  };

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Welcome Back!</h3>
              <span className={error ? "error" : ""}>{error ? error : ""}</span>
              {/* Conditionally render the loading component */}
              {loading ? (
                <LoadingSpinner /> // Replace with your loading component
              ) : (
                <form
                  className="requires-validation"
                  onSubmit={formik.handleSubmit}
                  noValidate
                >
                  <div className="col-md-12">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={(event) => {
                        formik.handleChange(event);
                        handleInputChange(event);
                      }}
                      value={formik.values.email}
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      required
                    />
                    <span
                      className={
                        formik.touched.email && formik.errors.email
                          ? "invalid-feedback"
                          : "valid-feedback"
                      }
                    >
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""}
                    </span>
                  </div>
                  <div className="col-md-12">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={(event) => {
                        formik.handleChange(event);
                        handleInputChange(event);
                      }}
                      value={formik.values.password}
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <span
                      className={
                        formik.touched.password && formik.errors.password
                          ? "invalid-feedback"
                          : "valid-feedback"
                      }
                    >
                      {formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ""}
                    </span>
                  </div>
                  <div className="form-button mt-3 d-flex justify-content-between">
                    <button id="submit" type="submit" className="btn">
                      Get In
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
