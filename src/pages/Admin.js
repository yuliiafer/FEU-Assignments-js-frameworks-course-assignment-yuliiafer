import Heading from "../components/Heading";
import AdminComponent from "../components/AdminComponent";

const Admin = () => {
  return (
    <>
      <div className="backdrop-admin"></div>
      <div className="admin">
        <div className="admin-page">
          <Heading title="Admin" />
          <AdminComponent />
        </div>
      </div>
    </>
  );
};

export default Admin;
