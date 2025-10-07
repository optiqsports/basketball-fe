import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Login clicked', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className="min-h-screen w-full bg-[#F5FCFF] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 border-4 border-white rounded-lg transform rotate-45"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-10">
          <h1 className="text-3xl text-gray-700 mb-2">
            Welcome back <span className="font-semibold text-gray-900">admin</span>
          </h1>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Login</span> to proceed to your dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-3.5">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 text-base placeholder-gray-500"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 text-base placeholder-gray-500"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all text-base"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center py-2">
            <span className="text-xs text-gray-500 font-medium uppercase">OR</span>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3.5 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-normal rounded-xl transition-all flex items-center justify-center gap-3 text-base"
          >
            <FaGoogle className="text-base" />
            <span>Continue with Google</span>
          </button>

          {/* Apple Login Button */}
          <button
            onClick={handleAppleLogin}
            className="w-full py-3.5 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-normal rounded-xl transition-all flex items-center justify-center gap-3 text-base"
          >
            <FaApple className="text-xl" />
            <span>Continue with Apple</span>
          </button>

          {/* Forgot Password Link */}
          <div className="text-center pt-4">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-all"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;