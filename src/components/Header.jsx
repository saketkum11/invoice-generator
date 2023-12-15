import { Button } from "./Button";

const Header = () => {
  return (
    <>
      <header className="w-4/5 m-auto">
        <div className="flex items-center justify-between">
          <div>
            <span>Invoice Generator</span>
          </div>
          <Button message="Create invoice" />
        </div>
      </header>
    </>
  );
};

export { Header };
