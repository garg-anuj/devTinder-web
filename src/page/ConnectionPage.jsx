import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { addConnections } from "../redux/connectionsSlice";
import { getData } from "../services/api";
import { API } from "../utils/constant";

//already users hai connected / following type kaa
const ConnectionPage = () => {
  const dispatch = useDispatch();
  const userConnections = useSelector((state) => state.connections);

  const getUserConnection = useCallback(async () => {
    try {
      if (userConnections) return;
      const response = await getData(API.CONNECTIONS);
      dispatch(addConnections(response.data));
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [dispatch, userConnections]);

  useEffect(() => {
    getUserConnection();
  }, [getUserConnection]);

  if (!userConnections) {
    return <div>No Data</div>;
  }
  if (userConnections.length === 0) {
    return <div>No Connections Found</div>;
  }

  return <div>ConnectionPage</div>;
};

export default ConnectionPage;
