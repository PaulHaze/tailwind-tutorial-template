import React from 'react';

import { Link, useLocation } from 'react-router-dom';

export function NavLink({ linkPath, linkName }) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <li className="">
      <Link
        exact
        className={`flex justify-center px-4 py-2 my-4 font-semibold text-center rounded ${
          pathname === linkPath ? 'bg-white' : 'bg-blue-50/50 text-blue-400/50'
        }`}
        to={linkPath}
      >
        {linkName}
      </Link>
    </li>
  );
}
