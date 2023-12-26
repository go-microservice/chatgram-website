'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // 处理注册逻辑
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
        <div>
          <h1 className="text-3xl font-semibold text-center text-black">Create an Account</h1>
          <p className="text-gray-500 text-center">Join us today!</p>
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
            <span className="text-gray-700">Email:</span>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className="bg-green-500 text-white p-2 rounded-md w-full"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          Already have an account?{' '}
          <Link className="text-blue-500" href="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

