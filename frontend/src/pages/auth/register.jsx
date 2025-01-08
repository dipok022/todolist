import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[400px] border border-spacing-1 rounded-lg pb-6 px-6">
        <h4 className="text-2xl font-medium text-black py-6">Register</h4>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              placeholder="Name"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
