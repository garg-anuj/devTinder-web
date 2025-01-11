import { useEffect, useState } from "react";
import { getData } from "../services/api";
import { API } from "../utils/constant";
import PeopleCard from "../components/PeopleCard";

const FeedPage = () => {
  const [currentFeeds, setCurrentFeeds] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        const data = await getData(API.USERS_FEED);
        setCurrentFeeds(data?.allUsers);
      } catch (err) {
        console.log(err);
      }
    };
    getFeeds();
  }, []);

  if (!currentFeeds || currentFeeds.length < 1) {
    return <div>No Data</div>;
  }

  return (
    <div className="flex flex-wrap">
      {currentFeeds.map((feed, idx) => {
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
