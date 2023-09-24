import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      id="error-page"
      className="flex flex-col space-y-5 justify-center items-center h-screen"
    >
      <h1 className="text-7xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <NavLink
        to="/"
        className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-red-500"
      >
        Homepage
      </NavLink>
    </div>
  );
};

export default Error;
