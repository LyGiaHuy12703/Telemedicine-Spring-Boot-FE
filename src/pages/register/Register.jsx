import React, { useState } from "react";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (
      formData.password.length < 8 || // Độ dài tối thiểu 8 ký tự
      !/[A-Z]/.test(formData.password) || // Ít nhất 1 chữ cái viết hoa
      !/[a-z]/.test(formData.password) || // Ít nhất 1 chữ cái viết thường
      !/[0-9]/.test(formData.password) || // Ít nhất 1 chữ số
      !/[!@#$%^&*]/.test(formData.password) // Ít nhất 1 ký tự đặc biệt
    ) {
      newErrors.password =
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt";
    }

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";

    // Nếu không có lỗi, xử lý form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Gửi dữ liệu tới API hoặc thực hiện hành động khác
    } else {
      setErrors(newErrors); // Hiển thị lỗi
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Đăng ký tài khoản
        </h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <TextInput
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              placeholder="Vui lòng nhập email"
              type="text"
              label="Email"
              error={errors.email}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <TextInput
              value={formData.password}
              onChange={(value) => handleInputChange("password", value)}
              placeholder="Nhập mật khẩu"
              type="password"
              label="Mật khẩu"
              error={errors.password}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <TextInput
              value={formData.confirmPassword}
              onChange={(value) => handleInputChange("confirmPassword", value)}
              placeholder="Nhập lại mật khẩu"
              type="password"
              label="Xác nhận mật khẩu"
              error={errors.confirmPassword}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Đăng ký
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Bạn đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
