import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
// import LoadingSpinner from "../LoadingSpinner";
// import SuccessMessage from "../SuccessMessage"; // Import the SuccessMessage component
import LoadingSpinner from './components/LoadingSpinner';
import SuccessMessage from "./components/SuccessMessage";

const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, "Please enter your real name")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(PASS_REGEX, "Please enter a strong password")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),
  role: yup.string().required("Role is required"),
});

const AddUser = () => {
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  let navigate = useNavigate();

  const onCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
    setSuccessMessage("");
    navigate("/dashboard");
  };

  const onSubmit = async (values) => {
    setIsLoading(true);

    const { confirm_password, ...data } = values;

    try {
      const response = await axios.post(
        "https://speedx-backend.onrender.com/admin/add_user",
        data
      );

      if (response && response.data) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        formik.resetForm();
        
        // Show success message
        setSuccessMessage("User added successfully!");
        setShowSuccessMessage(true);
      }
    } catch (error) {
      if (error && error.response) {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const handleInputChange = (event) => {
    setError(null);
  };

  const handleRole = (e) => {
    formik.handleChange(e);
    setRole(e.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Add user</h3>
                <p>Fill in the data below.</p>
                <span className={error ? "error" : ""}>
                  {error ? error : ""}
                </span>
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <form
                    className="requires-validation"
                    onSubmit={formik.handleSubmit}
                    noValidate
                  >
                    <div>
                      <h5>Add as :</h5>
                      <div className="form-check">
                        <input
                          onChange={handleRole}
                          value="driver"
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="driver_rb"
                        />
                        <label className="form-check-label" htmlFor="driver_rb">
                          Driver
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          onChange={handleRole}
                          value="user"
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="user_rb"
                        />
                        <label className="form-check-label" htmlFor="user_rb">
                          User
                        </label>
                      </div>
                      <span
                        className={
                          formik.touched.role && formik.errors.role
                            ? "invalid-feedback"
                            : "valid-feedback"
                        }
                      >
                        {formik.touched.role && formik.errors.role
                          ? formik.errors.role
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
                        value={formik.values.fullname}
                        className="form-control"
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        required
                      />
                      <span
                        className={
                          formik.touched.fullname && formik.errors.fullname
                            ? "invalid-feedback"
                            : "valid-feedback"
                        }
                      >
                        {formik.touched.fullname && formik.errors.fullname
                          ? formik.errors.fullname
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
                    <div className="col-md-12">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={(event) => {
                          formik.handleChange(event);
                          handleInputChange(event);
                        }}
                        value={formik.values.confirm_password}
                        className="form-control"
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                      />
                      <span
                        className={
                          formik.touched.confirm_password &&
                          formik.errors.confirm_password
                            ? "invalid-feedback"
                            : "valid-feedback"
                        }
                      >
                        {formik.touched.confirm_password &&
                        formik.errors.confirm_password
                          ? formik.errors.confirm_password
                          : ""}
                      </span>
                    </div>
                    <div className="form-button mt-3 d-flex justify-content-between">
                      <button id="submit" type="submit" className="btn">
                        Add
                      </button>
                    </div>
                  </form>
                )}
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
    </div>
  );
};

export default AddUser;
