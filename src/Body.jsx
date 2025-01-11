import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import { API } from "./utils/constant";
import { useCallback, useEffect } from "react";
import HTTP_CONFIG from "./utils/httpConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/userInfoSlice";
// import Footer from "./components/Footer";

export const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userSlice);
  const getUserData = useCallback(async () => {
    if (userData) {
      return;
    }
    try {
      const response = await axios.get(API.USER_PROFILE, HTTP_CONFIG);
      dispatch(addUser(response.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  }, [navigate, dispatch, userData]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
