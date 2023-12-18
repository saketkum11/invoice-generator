import { InvoiceCard } from "./InvoiceCard";

/* eslint-disable react/prop-types */
const ListItem = ({ message }) => {
  return (
    <li className="border-2 border-red-300 col-span-2 h-52 rounded-md ">
      <InvoiceCard />
    </li>
  );
};

export { ListItem };
