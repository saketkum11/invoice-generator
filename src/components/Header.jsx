import { Button } from "./Button";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div>
          <span>Invoice Generator</span>
        </div>
        <Button message="Create invoice" />
      </nav>
    </>
  );
};

export { Header };
