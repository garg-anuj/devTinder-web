import DisplayProfile from "./components/DisplayProfile";
import EditProfile from "./components/EditProfile";

const ProfilePage = () => {
  return (
    <div className="flex flex-wrap border">
      <div className="w-full md:w-1/2">
        <EditProfile />
      </div>
      <div className="w-full md:w-1/2">
        <DisplayProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
