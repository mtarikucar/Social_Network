import { NavLink } from "react-router-dom";



function BarItem({ name, icon, open,url}) {
  return (
    <div>
      <li className="rounded-sm">
        <NavLink to={`/${url}`} className="flex items-center p-2 space-x-3 rounded-md">
          {icon}
          <div className={` ${open ? "hidden" : ""}`}>
            <span className={`text-gray-100`}>{name}</span>
          </div>
        </NavLink>
      </li>
    </div>
  );
}

export default BarItem;
