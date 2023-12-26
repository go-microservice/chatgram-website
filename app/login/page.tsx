'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 处理登录逻辑
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
      <div>
          <h1 className="text-3xl font-semibold text-center text-black">Welcome to My App</h1>
          <p className="text-gray-500 text-center">Please sign in to continue</p>
        </div>
        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Username:</span>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              className="mt-1 p-2 border rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          New user?{' '}
          <Link className="text-green-500" href="/register">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
