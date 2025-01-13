import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { addConnections } from "../redux/connectionsSlice";
import { getData } from "../services/api";
import { API } from "../utils/constant";
import ConnectionCard from "../components/ConnectionCard";

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

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[#fff] my-4 font-s text-2xl">
        Connections
      </h1>
      <div className="md:w-1/2 lg:w-1/4 flex flex-col">
        {userConnections.map((connection, idx) => {
          return <ConnectionCard key={idx} connection={connection} />;
        })}
      </div>
    </div>
  );
};

export default ConnectionPage;
