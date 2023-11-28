import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/use-auth";

const Login = () => {
  const { saveUserData } = useAuth();

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: function (values) {
      sendLoginData(values);
    },
  });

  async function sendLoginData(obj) {
    setLoader(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        obj
      );
      setLoader(false);
      if (data.message === "success") {
        toast.success("Welcome To Noxe App", {
          duration: 3000,
          className: "text-success px-5 fw-bolder my-3",
          iconTheme: {
            primary: "#198754",
            secondary: "#fff",
          },
        });
        localStorage.setItem("userToken", data.token);
        saveUserData();
        navigate("/");
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
      <div className=" w-75 mx-auto login ">
        <h1>Login</h1>
        <form className=" mt-5" onSubmit={formik.handleSubmit}>
          <div className="form-group">
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
            <label className=" form-label" htmlFor="password">
              Password
            </label>
            <input
              className=" form-control mb-4 mt-2"
              type="password"
              name="password"
              id="password"
              autoComplete="false"
              placeholder="password"
              value={formik.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <small className="text-danger d-block mb-3">
                {formik.errors.password}
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
                Login
              </button>
            )}
            <h5 className="py-4">
              Don&apos;t have an account?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
