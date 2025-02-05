import React, { useState } from "react";
// import "./Login.css";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = "email không được để trống";
    if (!password) newErrors.password = "mật khẩu không được để trống";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng Nhập
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextInput
              label="Email"
              value={email}
              onChange={setEmail}
              icon={FiMail}
              type="email"
              error={errors.email}
              placeholder="Nhập email"
            ></TextInput>
          </div>
          <div>
            <TextInput
              label="Mật khẩu"
              value="password"
              icon={FiLock}
              onChange={setPassword}
              type="password"
              error={errors.password}
              placeholder="Nhập mật khẩu"
            ></TextInput>
          </div>

          {/* Submit Button */}
          <Button className="w-full" onClick={handleSubmit}>
            Đăng nhập
          </Button>
        </form>
        <div className="relative my-4">
          <hr className="border-t border-gray-300" />
          <div className="justify-center flex">
            {" "}
            <p
              className="mb-3 px-2 text-center text-sm text-gray-600 bg-white"
              style={{ marginTop: -10 }}
            >
              or
            </p>
          </div>
          <Link to={"http://localhost:8080/api/oauth2/authorization/google"}
          >
            <Button
              className="w-full"
              children="Đăng nhập bằng google"
              variant="danger"
              icon={FcGoogle}
            />
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
