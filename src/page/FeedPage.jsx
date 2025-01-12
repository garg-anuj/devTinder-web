import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PeopleCard from "../components/PeopleCard";

import { addFeeds } from "../redux/feedSlide";
import { getData } from "../services/api";
import { API } from "../utils/constant";

const FeedPage = () => {
  const dispatch = useDispatch();
  const userFeeds = useSelector((state) => state.feedSlice);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        const data = await getData(API.USERS_FEED);
        setCurrentFeeds(data?.allUsers);

        dispatch(addFeeds(data?.allUsers));
      } catch (err) {
        console.log(err);
      }
    };
    getFeeds();
  }, [dispatch]);

  if (!userFeeds || userFeeds.length < 1) {
    return <div>No Data</div>;
  }

  return (
    <div className="flex flex-wrap">
      {userFeeds.map((feed, idx) => {
        return (
          <div key={idx} className="w-60">
            <PeopleCard userFeed={feed} key={idx} />
          </div>
        );
      })}
    </div>
  );
};

export default FeedPage;
