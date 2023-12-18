import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = ({ message }) => {
  return (
    <button className="bg-red-400 text-white px-4 py-2 rounded-md text-base">
      <Link to="/invoice">{message}</Link>
    </button>
  );
};

export { Button };
