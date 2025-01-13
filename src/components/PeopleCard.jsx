import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { removeUserFromFeed } from "../redux/feedSlide";
import { postData } from "../services/api";
import { BASE_URL, USER_STATUS } from "./../utils/constant";
import { EMPTY_OBJECT } from "./../utils/Freeze";

// "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"

const { INTERESTED, IGNORED } = USER_STATUS;

const PeopleCard = ({ userFeed }) => {
  const {
    _id: userId,
    firstName,
    lastName,
    photoUrl,
    gender,
    age,
  } = userFeed || EMPTY_OBJECT;
  const dispatch = useDispatch();

  const handleStatusBtn = async (status, toUserId) => {
    const url = `${BASE_URL}/request/send/${status}/${toUserId}`;

    try {
      const response = await postData(url);
      // we will remove ignored/interested users from the feed
      dispatch(removeUserFromFeed(toUserId));

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-1">
      <div className="bg-base-100 rounded-[.25rem] shadow-xl border my-4">
        <div className="p-2 h-48">
          <figure className="w-full h-full">
            <img src={photoUrl} alt="Shoes" className="w-full h-full" />
          </figure>
        </div>
        <div className="p-4">
          <h2 className="p-0 flex justify-between capitalize">
            {firstName + " " + lastName}{" "}
            <div className="badge rounded-[.25rem] badge-secondary text-[.75rem] text-[#fff] ">
              NEW
            </div>
          </h2>
          {gender && <div>{gender}</div>}
          {age && <span className="text-[#fff]">{age}</span>}

          <div className="mt-2 flex flex-wrap justify-between">
            <div
              className="badge badge-outline h-8 rounded-[.25rem] cursor-pointer text-pink-400"
              onClick={() => handleStatusBtn(IGNORED, userId)}
            >
              Ignored
            </div>
            <div
              className="badge badge-outline h-8 rounded-[.25rem] cursor-pointer text-green-400"
              onClick={() => handleStatusBtn(INTERESTED, userId)}
            >
              Interested
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
  userFeed: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    // gender: PropTypes.oneOf(["Male", "Female"]).isRequired,
    // age: PropTypes.number.isRequired,
  }).isRequired,
};

export default PeopleCard;
