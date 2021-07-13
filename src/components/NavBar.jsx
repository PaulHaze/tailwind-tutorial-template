import React, { useState } from 'react';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { NavLink } from './NavLink';

export function NavBar({ routes }) {
  const [showHideNav, setShowHideNav] = useState(true);

  const renderRoutes = routes.map(r => (
    <NavLink key={r.key} linkPath={r.path} linkName={r.label} />
  ));

  const handleNavClick = () => setShowHideNav(prev => !prev);
  return (
    <div className="flex">
      <nav className="h-screen sticky top-0 p-5 px-2 py-4 bg-gradient-to-b from-indigo-300/90 to-sky-800/90">
        <div className="flex w-full">
          {showHideNav ? (
            <div className="flex items-center justify-center w-8 h-8 bg-white border rounded-lg border-blue-500/50">
              <ChevronDoubleLeftIcon
                onClick={handleNavClick}
                className="w-4 h-4 text-blue-500/90"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center w-8 h-8 bg-white border rounded-lg border-blue-500/50">
              <ChevronDoubleRightIcon
                onClick={handleNavClick}
                className="w-4 h-4 text-blue-500/90"
              />
            </div>
          )}
        </div>

        <ul className={`w-full ${!showHideNav && 'hidden'}`}>{renderRoutes}</ul>
      </nav>
    </div>
  );
}
