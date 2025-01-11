import { useState } from "react";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastNameL: "",
    emailId: "",
    password: "",
  });

  const { firstName, lastName, emailId, password } = formValues;

  const handleInput = (event) => {
    const { value, name } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };
  return (
    <div className="flex justify-center">
      <div className=" rounded-lg bg-base-300 w-96 my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Signup Form</h2>
          <div className="my-input-box">
            <label className="input flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleInput}
              />
            </label>

            <label className="input flex items-center gap-2 mb-4">
              <input
                type="text"
                className="lastName"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInput}
              />
            </label>

            <label className="input flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                name="emailId"
                placeholder="Email"
                value={emailId}
                onChange={handleInput}
              />
            </label>

            <label className="input flex items-center gap-2 mb-4">
              <input
                type="password"
                className="grow"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
