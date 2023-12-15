import { useSelector } from "react-redux";
import { Header, ListItem } from "../server";
const Home = () => {
  const store = useSelector((store) => store);
  const {
    Invoice: { name },
  } = store;

  return (
    <>
      <Header />
      <main>
        <ul>
          <ListItem message="saket" />
          <ListItem message="GoldiBhai" />
          <ListItem message="Random" />
        </ul>
      </main>
    </>
  );
};

export { Home };
