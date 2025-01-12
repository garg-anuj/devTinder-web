import { useSelector } from "react-redux";

import DisplayProfile from "./components/DisplayProfile";
import EditProfile from "./components/EditProfile";

const ProfilePage = () => {
  const user = useSelector((state) => state.userSlice);

  if (!user) {
    return <div>No user </div>;
  }
  return (
    <div className="flex flex-wrap border">
      <div className="w-full md:w-1/2">
        <EditProfile user={user} />
      </div>
      <div className="w-60">
        <DisplayProfile userInfo={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
