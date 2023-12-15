import { useSelector } from "react-redux";

const Invoice = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>Invoice</div>;
};

export { Invoice };
