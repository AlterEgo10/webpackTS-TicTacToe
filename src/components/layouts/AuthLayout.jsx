import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main
      className="d-flex justify-content-center align-items-center w-100 vh-100 m-auto"
      style={{ background: '#f5f5f5' }}
    >
      <div>
        <Outlet />
        <p>@ {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
