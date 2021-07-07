import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { NavLink } from './NavLink';

export function NavBar() {
  const [showHideNav, setShowHideNav] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  const handleNavClick = () => setShowHideNav(prev => !prev);
  return (
    <div className="flex">
      <nav className="h-[100vh] p-5 px-2 py-4 mr-4 bg-gradient-to-b from-indigo-300/90 to-sky-800/90">
        <div className="flex w-full">
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

        <ul className={`w-full ${!showHideNav && 'hidden'}`}>
          <NavLink linkPath="/" linkName="Home" />
          <NavLink linkPath="/test" linkName="Test" />
        </ul>
      </nav>
    </div>
  );
}
