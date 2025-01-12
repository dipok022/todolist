import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
  };

  console.log("userData", userData);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[400px] border border-spacing-1 rounded-lg pb-6 px-6 bg-white">
        <h4 className="text-2xl font-medium text-black py-6">Register</h4>
        <form action="" onSubmit={handleChange} className="space-y-2">
          <div className="space-y-[6px]">
            <label
              htmlFor="name"
              className="block text-base text-[#3E4C59] font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full border rounded-md py-[6px] px-3 outline-none text-sm text-[#3E4C59] font-medium"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-[6px]">
            <label
              htmlFor="email"
              className="block text-base text-[#3E4C59] font-medium"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="test@gmail.com"
              className="w-full border rounded-md py-[6px] px-3 outline-none text-sm text-[#3E4C59] font-medium"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-[6px]">
            <label
              htmlFor="password"
              className="block text-base text-[#3E4C59] font-medium"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="**********"
              className="w-full border rounded-md py-[6px] px-3 outline-none text-sm text-[#3E4C59] font-medium"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-2 !my-4">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 rounded-lg border-[#4A36F7] border"
            />
            <label
              htmlFor="rememberMe"
              className="block text-sm text-[#0F0B31] font-medium select-none"
            >
              I agree ro the <a href="#">terms and conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full !mt-0 rounded-lg border border-[#3B2BC6] bg-[#4A36F7] py-2 text-sm text-[#ffff] font-medium"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
