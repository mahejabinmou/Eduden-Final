import UserSidebar from "./UserSidebar";

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      <UserSidebar />
      <div className="flex-1 p-6 bg-black  text-white">
        <h1>View Details</h1>
      </div>
    </div>
  );
};

export default UserDashboard;
