import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function AuthLayout() {
  const { t } = useTranslation();
  return (
    <main
      className="d-flex justify-content-center align-items-center w-100 vh-100 m-auto"
      style={{ background: '#f5f5f5' }}
    >
      <div>
        <Outlet />
        <p>
          {/* @ {new Date().getFullYear()} &copy2025;{t('app.footer')} */}
          &copy; {new Date().getFullYear()  } {t('app.footer')}
        </p>
      </div>
    </main>
  );
}
