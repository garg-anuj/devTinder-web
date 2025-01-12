import axios from "axios";
import { Link } from "react-router-dom";
import { removeUser } from "../redux/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";

import { API } from "../utils/constant";

const NavBar = () => {
  const selector = useSelector((state) => state.userSlice);
  const { firstName, lastName } = selector || {};
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await axios.post(API.LOGOUT, {}, { withCredentials: true });

    dispatch(removeUser());
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevTinder 👓
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
    </div> */}
        {firstName && (
          <div className="px-2 capitalize">
            {`Welcome ${firstName} ${lastName || ""}`}{" "}
          </div>
        )}
        <div className="dropdown dropdown-end mr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li onClick={handleLogOut}>
              <a>Logout</a>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>

            <li>
              <Link to="/connections">Connections</Link>
            </li>

            <li>
              <Link to="/requests">Requests</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
