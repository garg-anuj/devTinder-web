import PropTypes from "prop-types";
import { EMPTY_OBJECT } from "../../../utils/Freeze";

const DisplayProfile = ({ userInfo }) => {
  const { firstName, lastName, photoUrl, gender, age } =
    userInfo || EMPTY_OBJECT;

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
            <span className="text-[#fff]">{age}</span>
            <div className="badge rounded-[.25rem] badge-secondary text-[.75rem] text-[#fff] ">
              NEW
            </div>
          </h2>
          <div>{gender}male 10</div>

          <div className="mt-2 flex flex-wrap justify-between">
            <div className="badge badge-outline h-8 rounded-[.25rem] cursor-pointer text-pink-400">
              Ignored
            </div>
            <div className="badge badge-outline h-8 rounded-[.25rem] cursor-pointer text-green-400">
              Interested
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayProfile.propTypes = {
  userInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    // gender: PropTypes.oneOf(["Male", "Female"]).isRequired,
    // age: PropTypes.number.isRequired,
  }).isRequired,
};

export default DisplayProfile;
