import { InputText } from "../server";

const BillSender = () => {
  return (
    <div className="flex flex-1 flex-col text-start">
      <p>Bill to send</p>
      <InputText text="text" placeholderName="who is reciver" />
      <InputText text="email" placeholderName="who is reciver" />
      <InputText text="number" placeholderName="who is reciver" />
    </div>
  );
};

export { BillSender };
