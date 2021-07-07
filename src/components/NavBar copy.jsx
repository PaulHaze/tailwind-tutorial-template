import React, { useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { NavLink } from './NavLink';

import { routes } from '../routes';

export function NavBar() {
  const [showHideNav, setShowHideNav] = useState(true);

  const renderRoutes = routes.map(r => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));

  const handleNavClick = () => setShowHideNav(prev => !prev);
  return (
    <div className="flex">
      <nav className="h-[100vh] p-5 px-2 py-4 mr-4 bg-blue-200">
        <div className="w-full">
          {showHideNav ? (
            <ChevronDoubleLeftIcon
              onClick={handleNavClick}
              className="w-6 h-6 text-blue-500 bg-[rgba(255,255,255,0.8)] border-2 border-blue-500 rounded "
            />
          ) : (
            <ChevronDoubleRightIcon
              onClick={handleNavClick}
              className="w-6 h-6 text-blue-500 border-2 bg-[rgba(255,255,255,0.8)] border-blue-500 rounded"
            />
          )}
        </div>

        <ul className={`w-full ${!showHideNav && 'hidden'}`}>{renderRoutes}</ul>
      </nav>
    </div>
  );
}
