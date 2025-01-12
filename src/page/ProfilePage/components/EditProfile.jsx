import PropTypes from "prop-types";
import { useState } from "react";

import { patchData } from "../../../services/api";
import HTTP_CONFIG from "../../../utils/httpConfig";
import { API } from "./../../../utils/constant";
import { addUser } from "../../../redux/userInfoSlice";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [formValues, setFormValues] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    age: user?.age,
    gender: user?.gender,
    photoUrl: user?.photoUrl,
    // skills: "",/
  });
  const { firstName, lastName, age, gender, photoUrl } = formValues;
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleUpdateProfile = async () => {
    try {
      const payLoad = formValues;
      const updatedUser = await patchData(
        API.PROFILE_EDIT,
        payLoad,
        HTTP_CONFIG
      );

      console.log(updatedUser);

      dispatch(addUser(updatedUser));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className=" rounded-lg bg-base-300 w-96 my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Edit Profile</h2>
          <div className="my-input-box">
            <label className="input h-10 rounded-[.25rem] border flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleInput}
              />
            </label>

            <label className="input h-10 rounded-[.25rem] flex items-center gap-2 mb-4">
              <input
                type="text"
                className="lastName"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInput}
              />
            </label>

            <label className="input h-10 rounded-[.25rem] flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                name="age"
                placeholder="Age"
                value={age}
                onChange={handleInput}
              />
            </label>

            <label className="input h-10 rounded-[.25rem] flex items-center gap-2 mb-4">
              <input
                type="gender"
                className="grow"
                name="gender"
                placeholder="gender"
                value={gender}
                onChange={handleInput}
              />
            </label>

            <label className="input h-10 rounded-[.25rem] flex items-center gap-2 mb-4">
              <input
                className="grow text-wrap"
                name="photoUrl"
                placeholder="photo url"
                value={photoUrl}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="card-actions">
            <button
              onClick={handleUpdateProfile}
              className="btn rounded-[.25rem] btn-primary"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    age: PropTypes.number,
    gender: PropTypes.oneOf(["Male", "Female"]),
  }).isRequired,
};

export default EditProfile;
