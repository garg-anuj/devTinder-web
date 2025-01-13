import PropTypes from "prop-types";
import { EMPTY_OBJECT } from "./../utils/Freeze";
import { BASE_URL, USER_STATUS } from "../utils/constant";
import { postData } from "../services/api";

const RequestCard = ({ request }) => {
  const requestId = request._id;
  const { ACCEPTED, REJECTED } = USER_STATUS;

  const {
    firstName,
    lastName,
    gender,
    age,
    // _id: requestUserId,
  } = request.fromUserId || EMPTY_OBJECT;

  const handleStatusBtn = async (status, requestId) => {
    const url = `${BASE_URL}/request/review/${status}/${requestId}`;

    postData(url);
  };

  return (
    <>
      <div className="w-full py-1 ">
        <div className="flex items-center p-1 bg-base-300 rounded-[.25rem] shadow-xl">
          <div className="p-2 h-20 w-24">
            <figure className="w-full h-full">
              <img
                src={
                  "https://c0.klipartz.com/pngpicture/49/613/gratis-png-iconos-de-computadora-avatar-perfil-de-usuario-avatar.png"
                }
                alt="Shoes"
                className="w-full h-full rounded-[50%]"
              />
            </figure>
          </div>
          <div className="flex flex-nowrap items-start justify-between w-full">
            <div className="px-4">
              <h2 className="capitalize text-[#fff]">
                {firstName + " " + lastName}{" "}
              </h2>
              <div>
                {gender && <span>{gender}</span>}
                {age && <span>{age}</span>}
              </div>
            </div>

            <div className="py-2 flex items-start justify-between">
              <div
                className="badge badge-outline h-8 mx-2 rounded-[.25rem] cursor-pointer text-pink-400"
                onClick={() => handleStatusBtn(REJECTED, requestId)}
              >
                Reject
              </div>
              <div
                className="badge badge-outline h-8 mx-2 rounded-[.25rem] cursor-pointer text-green-400"
                onClick={() => handleStatusBtn(ACCEPTED, requestId)}
              >
                Accept
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RequestCard.propTypes = {
  request: PropTypes.shape({
    _id: PropTypes.string.isRequired, // requestId
    fromUserId: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      gender: PropTypes.string, // Optional if it can be null/undefined
      age: PropTypes.number, // Optional if it can be null/undefined
      _id: PropTypes.string.isRequired, // requestUserId
    }).isRequired,
  }).isRequired,
};

export default RequestCard;
