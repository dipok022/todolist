const Register = async () => {
  const data = await fetch("/api/v1/users");
  const res = await data.json();
  console.log(res);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[400px] border border-spacing-1 rounded-lg pb-6 px-6">
        <h4 className="text-2xl font-medium text-black py-6">Register</h4>
      </div>
    </div>
  );
};

export default Register;
