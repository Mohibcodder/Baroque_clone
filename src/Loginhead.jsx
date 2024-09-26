// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border rounded-lg shadow-lg p-8 bg-white max-w-md w-full ">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
        <Link to="/">
         <img src='https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp' className='h-12 ' /></Link>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Log in</h2>
          <p className="text-gray-600 mb-6">
            Enter your email and we’ll send you a login code
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="mt-6">
          <a href="#" className="text-blue-600 hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
