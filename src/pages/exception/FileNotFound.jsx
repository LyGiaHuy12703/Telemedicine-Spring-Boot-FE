import { Link } from "react-router-dom";

const FileNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif"
              className="w-56 "
              alt=""
            />
          </div>
          {/* <h1 className="text-6xl font-bold text-red-500">404</h1> */}
          <p className="mt-4 text-xl text-gray-700">
            Oops! Đường dẫn bạn tìm không tồn tại.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Vui lòng chuyển hướng về trang chủ
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Trở về trang chủ
          </Link>
        </div>
      </div>
    </>
  );
};

export default FileNotFound;
