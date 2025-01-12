import { useEffect } from "react";
import { getData } from "../services/api";
import { API } from "../utils/constant";

// pending request ayi hui hai jise accept / reject krna hai
const RequestPage = () => {
  const getRequests = async () => {
    try {
      const response = await getData(API.REQUEST_REVIEW);
      console.log(response);
      return response.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  useEffect(() => {
    getRequests();
  }, []);
  return <div>RequestPage</div>;
};

export default RequestPage;
