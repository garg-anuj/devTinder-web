import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import { API } from "./utils/constant";
import { useEffect } from "react";
import HTTP_CONFIG from "./utils/httpConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/userInfoSlice";
// import Footer from "./components/Footer";

export const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userSlice);

  console.log(userData);

  useEffect(() => {
    const getUserData = async () => {
      if (userData) {
        return;
      }
      try {
        const response = await axios.get(API.USER_PROFILE, HTTP_CONFIG);
        console.log(response.data);
        dispatch(addUser(response.data));
      } catch (err) {
        if (err.status === 401) {
          navigate("/login");
        }
        console.error(err);
      }
    };

    getUserData();
  }, [navigate, dispatch]);
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
