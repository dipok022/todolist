import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[400px] border border-spacing-1 rounded-lg pb-6 px-6 bg-white">
        <h4 className="text-2xl font-medium text-black py-6">Login</h4>
        <form action="" className="space-y-3">
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
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg border border-[#3B2BC6] bg-[#4A36F7] py-2 text-sm text-[#ffff] font-medium"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-[#0F0B31] mt-4">
          Don&#39;t have an account? <Link to="/app/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
