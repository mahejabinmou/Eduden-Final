import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 p-6 bg-black  text-white">
        <h1>View and manage Details</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
