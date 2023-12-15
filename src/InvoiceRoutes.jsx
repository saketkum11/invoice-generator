import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Invoice } from "./pages/Invoice";
const InvoiceRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </>
  );
};
export { InvoiceRoutes };
