import { useState } from "react";

const EditProfile = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastNameL: "",
    age: "",
    gender: "",
    skills: "",
  });

  const { firstName, lastName, age, gender } = formValues;

  const handleInput = (event) => {
    const { value, name } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
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
          </div>
          <div className="card-actions">
            <button className="btn rounded-[.25rem] btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
