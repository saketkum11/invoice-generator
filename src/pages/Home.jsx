import { useSelector } from "react-redux";
import { Header, ListItem } from "../server";
const Home = () => {
  const store = useSelector((store) => store);
  const {
    Invoice: { name },
  } = store;

  return (
    <>
      <header className="w-4/5 m-auto">
        <Header />
      </header>
      <main className="m-auto w-4/5 mt-12">
        <section>
          <ul className="grid grid-cols-6 gap-4">
            <ListItem message="saket" />
            <ListItem message="GoldiBhai" />
            <ListItem message="Random" />
            <ListItem message="Random" />
            <ListItem message="Random" />
            <ListItem message="Random" />
          </ul>
        </section>
      </main>
    </>
  );
};

export { Home };
