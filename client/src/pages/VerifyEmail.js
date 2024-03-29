import React from "react";
import { Form, Input, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const newRegister = searchParams.get("newRegister");
  console.log(newRegister);
  async function sendOTPHandler(values) {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/sendOTP", {
        ...values,
        newRegister,
      });
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/verifyOTP", { state: { email: values.email, newRegister } });
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      if (error.response) {
        // Server responded with an error
        if (error.response.status === 400) {
          message.error(error.response.data.message);
        } else {
          console.log(
            "Error in sendOTP handler: " + error.response.data.message
          );
        }
      } else {
        // Network or client-side error
        console.log("Network or client-side error: " + error.message);
      }
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen form-container">
        <Form
          layout="vertical"
          onFinish={sendOTPHandler}
          className="p-4 border w-3/8"
        >
          <h1 className="py-5 text-4xl text-center">Enter email</h1>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input type="text" required placeholder="Your email" />
          </Form.Item>
          <Link to="/login" className="m-2 text-blue-400">
            Already registered? Login from here
          </Link>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-400 border rounded roundedbg-blue-500 hover:bg-blue-700"
          >
            Send OTP
          </button>
        </Form>
      </div>
    </>
  );
};

export default VerifyEmail;
