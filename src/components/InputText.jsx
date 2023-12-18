/* eslint-disable react/prop-types */
const InputText = ({ text, placeholderName }) => {
  return (
    <input
      type={text}
      className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
      placeholder={placeholderName}
    />
  );
};

export { InputText };
