import React from "react";
import { FaUserMd, FaHospitalAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-100 text-gray-900">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Preclinic</h1>
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </div>
          <ul
            className={`md:flex space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto left-0 md:flex-row flex-col items-center md:items-center transition-all duration-300 ease-in-out ${
              menuOpen ? "top-16" : "top-[-200px]"
            }`}
          >
            <Link className="hover:underline block p-4 md:p-0" to={"/dat-lich"}>
              Đặt lịch
            </Link>
            <Link
              className="hover:underline block p-4 md:p-0"
              to={"/tu-van-truc-tuyen"}
            >
              Tư vấn trực tuyến
            </Link>
            <Link className="hover:underline block p-4 md:p-0" to={"/bac-si"}>
              Bác sĩ
            </Link>
            <Link className="hover:underline block p-4 md:p-0" to={"/lien-he"}>
              Liên hệ
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="rounded-full"
                />
                <span className="ml-2">Chào, User</span>
              </div>
            ) : (
              <Link className="hover:underline block p-4 md:p-0" to="/login">
                Đăng nhập
              </Link>
            )}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold">
          Chăm sóc sức khỏe mọi lúc, mọi nơi
        </h2>
        <p className="mt-4 text-lg">
          Đặt lịch hẹn với bác sĩ chỉ trong vài phút.
        </p>
        <Link to={"/dat-lich"}>
          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
            Đặt Lịch Ngay
          </button>
        </Link>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Dịch Vụ Của Chúng Tôi</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to={"/tu-van-truc-tuyen"}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserMd className="text-blue-500 text-4xl mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Tư Vấn Trực Tuyến</h4>
              <p className="mt-2">Kết nối với bác sĩ mọi lúc, mọi nơi.</p>
            </div>
          </Link>
          <Link to={"/dat-lich"}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaHospitalAlt className="text-blue-500 text-4xl mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Đặt Lịch Khám</h4>
              <p className="mt-2">Lên lịch khám tại các bệnh viện uy tín.</p>
            </div>
          </Link>

          <Link to={"/lien-he"}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaPhoneAlt className="text-blue-500 text-4xl mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Hỗ Trợ 24/7</h4>
              <p className="mt-2">Hỗ trợ khách hàng mọi lúc mọi nơi.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="bg-gray-200 py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Đội Ngũ Bác Sĩ</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Bác sĩ 1"
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-semibold mt-4">BS. Nguyễn Văn A</h4>
            <p className="mt-2">Chuyên khoa Nội tổng quát</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Bác sĩ 2"
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-semibold mt-4">BS. Trần Thị B</h4>
            <p className="mt-2">Chuyên khoa Nhi</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Bác sĩ 3"
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-semibold mt-4">BS. Phạm Văn C</h4>
            <p className="mt-2">Chuyên khoa Tim mạch</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Liên Hệ Chúng Tôi</h3>
        <p className="text-lg">Hãy gọi ngay để được tư vấn miễn phí</p>
        <p className="mt-4 text-xl font-semibold text-blue-600">
          Hotline: 0123 456 789
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2025 B2111800. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
