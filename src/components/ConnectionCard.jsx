// import { propTypes } from "prop-types";

const ConnectionCard = ({ connection }) => {
  const { firstName, lastName, age, gender } = connection?.toUserId;
  return (
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
        <div className="text-center w-full">
          <div className="px-4">
            <h2 className="capitalize text-[#fff]">
              {firstName + " " + lastName}{" "}
            </h2>
            <div>
              {gender && <span>{gender}</span>}
              {age && <span>{age}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
