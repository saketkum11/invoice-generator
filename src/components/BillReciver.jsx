/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { InputText } from "../server";

const BillReciver = () => {
  const inputTypePlace = {
    text: "text",
    email: "email",
    number: "number",
  };
  const { text, email, number } = inputTypePlace;
  return (
    <div className="flex flex-1 flex-col text-start">
      <p>Bill to send</p>
      <InputText text={text} placeholderName="who is reciver" />
      <InputText text={email} placeholderName="who is reciver" />
      <InputText text={number} placeholderName="who is reciver" />
    </div>
  );
};

export { BillReciver };
