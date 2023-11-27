import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string()
      .required("This field is Required!")
      .max(14, "Name must be 14 Characters or less")
      .min(3, "Name must be 3 characters or more"),
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be Valid"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone Number Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
    rePassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password and Repassword Not Matched"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      sendRegisterData(values);
    },
  });

  async function sendRegisterData(obj) {
    setLoader(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        obj
      );
      setLoader(false);
      if (data.message === "success") {
        toast.success("Congratulations", {
          duration: 3000,
          className: "text-success px-5 fw-bolder my-3",
        });
        navigate("/login");
      }
    } catch (error) {
      setLoader(false);
      if (error.response.data?.errors) {
        toast.error(error.response.data.errors.msg, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      } else {
        toast.error(error.response.data.message, {
          duration: 3000,
          className: " text-danger px-5 fw-bolder my-3",
        });
      }
    }
  }

  return (
    <div className="container mt-100">
      <div className=" w-75 mx-auto  login">
        <h1>Register</h1>
        <form className=" mt-5" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label className=" form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className=" form-control mb-4 mt-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formik.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <small className="text-danger d-block mb-3">
                    {formik.errors.name}
                  </small>
                )}
                <label className=" form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className=" form-control mb-4 mt-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger d-block mb-3">
                    {formik.errors.email}
                  </small>
                )}
              </div>
              <div className="col-md-6">
                <label className=" form-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className=" form-control mb-4 mt-2"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  value={formik.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <small className="text-danger d-block mb-3">
                    {formik.errors.phone}
                  </small>
                )}
                <label className=" form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className=" form-control mb-4 mt-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  autoComplete="false"
                  value={formik.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <small className="text-danger d-block mb-3">
                    {formik.errors.password}
                  </small>
                )}
              </div>
            </div>
            <label className=" form-label" htmlFor="rePassword">
              Repassword
            </label>
            <input
              className=" form-control mb-4 mt-2"
              type="password"
              name="rePassword"
              id="rePassword"
              autoComplete="false"
              placeholder="Repassword"
              value={formik.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.rePassword && formik.errors.rePassword && (
              <small className="text-danger d-block mb-3">
                {formik.errors.rePassword}
              </small>
            )}

            {loader ? (
              <button
                type="button"
                className="btn btn-outline-info px-4 my-2 fw-bolder"
              >
                <span
                  className="spinner-border spinner-border-sm "
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            ) : (
              <button
                type="submit"
                className=" btn btn-outline-info fw-bolder px-4 my-2 "
                disabled={!formik.isValid}
              >
                Register
              </button>
            )}
            <h5 className="py-3">
              Already have an account ?{" "}
              <Link to="/login">
                <span>Sign In</span>
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
