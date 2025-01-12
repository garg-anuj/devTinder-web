import { useCallback, useEffect } from "react";
import { getData } from "../services/api";
import { API } from "../utils/constant";

//already users hai connected / following type kaa
const ConnectionPage = () => {
  const getUserConnection = useCallback(async () => {
    try {
      const response = await getData(API.CONNECTIONS);
      console.log(response.data);
    } catch (err) {
      return err;
    }
  }, []);

  useEffect(() => {
    getUserConnection();
  }, [getUserConnection]);
  return <div>ConnectionPage</div>;
};

export default ConnectionPage;
