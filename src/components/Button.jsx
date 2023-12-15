/* eslint-disable react/prop-types */
const Button = ({ message }) => {
  return (
    <button className="bg-red-400 text-white px-4 py-2 rounded-md text-base">
      {message}
    </button>
  );
};

export { Button };
