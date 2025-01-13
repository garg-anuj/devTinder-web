import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import RequestCard from "../components/RequestCard";

import { getData } from "../services/api";
import { API } from "../utils/constant";
import { addRequests } from "../redux/requestsSlice";

// pending request ayi hui hai jise accept / reject krna hai

const RequestPage = () => {
  const dispatch = useDispatch();
  const userRequests = useSelector((state) => state.requests);

  const getRequests = useCallback(async () => {
    try {
      if (userRequests) return;
      const requestResponse = await getData(API.REQUEST_REVIEW);
      dispatch(addRequests(requestResponse));
    } catch (err) {
      console.error(err);
      return err;
    }
  }, [dispatch, userRequests]);

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  if (!userRequests) {
    return <div>No Data</div>;
  }
  if (userRequests.length === 0) {
    return <div>No Connections Found</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-[#fff] my-4 font-s text-2xl">
        Connection Requests
      </h1>
      <div className="md:w-1/2 lg:w-1/4 flex flex-col">
        {userRequests.map((request, idx) => {
          return <RequestCard request={request} key={idx} />;
        })}
        {/* <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard /> */}
      </div>
    </div>
  );
};

export default RequestPage;
