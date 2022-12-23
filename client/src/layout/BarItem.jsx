import { NavLink } from "react-router-dom";
function BarItem({ name, path, open,url}) {
  return (
    <div>
      <li className="rounded-sm">
        <NavLink to={`/${url}`} className="flex items-center p-2 space-x-3 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` icon icon-tabler icon-tabler-${path} ${
              open ? "mx-auto" : ""
            } w-6 h-6
            hover:w-8 hover:h-8 ease-in-out duration-300`}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <div className={` ${open ? "hidden" : ""}`}>
            <span className={`text-gray-100`}>{name}</span>
          </div>
        </NavLink>
      </li>
    </div>
  );
}

export default BarItem;
