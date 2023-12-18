import { useSelector } from "react-redux";
import { BillReciver, BillSender, InvoiceDate } from "../server";
const Invoice = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <main>
        <div className="max-w-7xl   m-auto">
          <div>
            <form action="">
              <div className="grid grid-cols-12 ">
                <section className="border-2 p-8 border-pink-500 rounded-lg col-start-1 col-end-9">
                  <div className="flex justify-between border-b-2 pb-8">
                    <InvoiceDate />
                  </div>
                  <div className="flex flex-wrap gap-4 mt-8  border-b-2 pb-8">
                    <BillReciver />
                    <BillSender />
                  </div>
                </section>
                <section className="col-start-9 col-end-13 ">Revoice</section>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export { Invoice };
