// src/components/NotFound.js

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900 animate-bounce">404</h1>
        <p className="text-2xl font-medium text-gray-600 mt-4 animate-pulse">Page Not Found</p>
        <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
