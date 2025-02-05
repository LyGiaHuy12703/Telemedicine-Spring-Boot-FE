import React, { useState } from "react";
import { FaUserMd, FaCalendarAlt, FaClock, FaUser, FaPhone } from "react-icons/fa";

const BookingPage = () => {
  const [specialty, setSpecialty] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ specialty, doctor, date, time, patientName, phone });
    alert("Đặt lịch thành công!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Đặt Lịch Khám Bệnh
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Hãy điền thông tin bên dưới để đặt lịch khám nhanh chóng và tiện lợi.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Chuyên khoa & Bác sĩ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaUserMd className="absolute left-3 top-3 text-gray-500" />
              <select
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
              >
                <option value="">Chọn chuyên khoa</option>
                <option value="Nội tổng quát">Nội tổng quát</option>
                <option value="Nhi">Nhi</option>
                <option value="Tim mạch">Tim mạch</option>
              </select>
            </div>

            <div className="relative">
              <FaUserMd className="absolute left-3 top-3 text-gray-500" />
              <select
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                <option value="">Chọn bác sĩ</option>
                <option value="BS. Nguyễn Văn A">BS. Nguyễn Văn A</option>
                <option value="BS. Trần Thị B">BS. Trần Thị B</option>
                <option value="BS. Phạm Văn C">BS. Phạm Văn C</option>
              </select>
            </div>
          </div>

          {/* Ngày & Giờ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="date"
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <FaClock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="time"
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Họ tên */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Họ & Tên"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>

          {/* Số điện thoại */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-500" />
            <input
              type="tel"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Số Điện Thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Nút đặt lịch */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Đặt Lịch Ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
