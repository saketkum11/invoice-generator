import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Invoice = () => {
  const currentDate = new Date();
  const todayDate = currentDate.toLocaleDateString();
  const [billing, setBilling] = useState({
    invoiceNumber: 1,
    date: "",
    dueDate: "",
    billTo: "",
    billEmailAddress: "",
    billingAddress: "",
    billingFrom: "",
    billingFromEmail: "",
    billingFromAddress: "",
    subTotal: 0,
    discount: 0,
    tax: 0.0,
    taxRate: 6,
    discountRate: 0,
    currency: 2,
    notes: "sdfjsndjf",
    total: 0,
  });
  const {
    invoiceNumber,
    total,
    notes,
    tax,
    taxRate,
    discount,
    discountRate,
    subTotal,
    billTo,
    billEmailAddress,
    billingAddress,
    billingFrom,
    billingFromEmail,
    billingFromAddress,
    date,
    dueDate,
  } = billing;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBilling((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        date: todayDate,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(billing);
  };
  console.log();
  return (
    <>
      <main>
        <div className="max-w-7xl   m-auto">
          <div>
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="grid grid-cols-12 gap-8 ">
                <section className="border-2 p-8 border-pink-500 rounded-lg col-start-1 col-end-9">
                  <div className="flex justify-between border-b-2 pb-8">
                    {/*  invoice date */}
                    <div className="text-start">
                      <div>
                        <span>Date: {date}</span>
                      </div>
                      <div>
                        <span>Due Date {dueDate}</span>
                        <input
                          type="date"
                          name="dueDate"
                          value={dueDate}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span> Invoice Number</span>
                      <input
                        type="number"
                        name="invoiceNumber"
                        className="w-12 h-8 bg-gray-200 border-2 rounded-md px-2"
                        value={invoiceNumber}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-8  border-b-2 pb-8">
                    <div className="flex flex-1 flex-col text-start">
                      <p>Bill to send</p>
                      <input
                        required
                        type="text"
                        name="billTo"
                        value={billTo}
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        placeholder="who is reciver"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <input
                        required
                        type="email"
                        value={billEmailAddress}
                        name="billEmailAddress"
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        placeholder="email address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <input
                        required
                        type="text"
                        value={billingAddress}
                        name="billingAddress"
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        placeholder="billing address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>

                    <div className="flex flex-1 flex-col text-start">
                      <p>Bill to send</p>

                      <input
                        required
                        type="text"
                        value={billingFrom}
                        name="billingFrom"
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        placeholder="who is sending to?"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <input
                        required
                        name="billingFromEmail"
                        type="email"
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        value={billingFromEmail}
                        placeholder="email address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <input
                        required
                        name="billingFromAddress"
                        type="text"
                        className="bg-gray-100 px-4 py-2 w-full  rounded-sm my-2 "
                        value={billingFromAddress}
                        placeholder="billing address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="border-b-2 pb-4">
                    <table>
                      <thead className="border-b-2  ">
                        <tr className="">
                          <th className="text-left ">Item</th>
                          <th className="text-left ">Quantity</th>
                          <th className="text-left ">Price/rate</th>
                          <th className="text-left ">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="w-full">
                          <td>
                            <input
                              required
                              type="text"
                              placeholder="item"
                              className="w-full bg-slate-200 mr-4 rounded-lg py-2 placeholder:text-white px-2"
                            />
                            <input
                              required
                              type="text"
                              className="w-full bg-slate-200 rounded-lg py-2 placeholder:text-white px-2 mt-2"
                              placeholder="description"
                            />
                          </td>
                          <td className="mx-4 min-w-max ">
                            <input
                              required
                              type="number"
                              className="w-20 mx-4 bg-slate-200 rounded-lg py-2 placeholder:text-white px-2"
                            />
                          </td>
                          <td className="">
                            <div className="flex items-start gap-4 bg-slate-100">
                              <span className="w-2 h-2 border-2 rounded-full">
                                $
                              </span>
                              <input
                                className="w-20 bg-slate-100 py-4"
                                required
                                type="text"
                              />
                            </div>
                          </td>
                          <td className="">
                            <div className="bg-pink-500 px-4 py-2 rounded-lg cursor-pointer ">
                              <button className=" ">
                                <svg
                                  className="w-4"
                                  viewBox="0 0 21.00 21.00"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  fill="#d98787"
                                  stroke="#d98787"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <title>delete [#1487]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                      id="Page-1"
                                      stroke="none"
                                      strokeWidth="1"
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        id="Dribbble-Light-Preview"
                                        transform="translate(-179.000000, -360.000000)"
                                        fill="#f0f0f0"
                                      >
                                        <g
                                          id="icons"
                                          transform="translate(56.000000, 160.000000)"
                                        >
                                          <path
                                            d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                                            id="delete-[#1487]"
                                          ></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="flex justify-start mt-8 bg-pink-500 text-white px-2 rounded-md py-2">
                      Add Item
                    </button>
                  </div>
                  <div className="mt-12 border-b-2 pb-8">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">SubTotal</span>
                      <p>${subTotal}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Discount</span>
                      <p>(0%){discount}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Tax</span>
                      <p>(0%){tax}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <p>${total}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-left flex flex-col">
                      <span className="font-bold ">Notes:</span>
                      <textarea
                        required
                        value={notes}
                        name="notes"
                        className="ml-12 mt-4 max-w-2xl"
                        placeholder="
                        Thanks for your bussines!"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </section>
                <section className="col-start-9 col-end-13 ">
                  <div className="border-b-2 pb-4">
                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white py-6 px-2 rounded-lg text-lg font-bold"
                    >
                      Review Your Invoice
                    </button>
                  </div>
                  <div className="w-full ">
                    <span className="font-bold flex justify-start items-center my-4">
                      Currency:
                    </span>
                    <select
                      name=""
                      id=""
                      className="w-full border-2 py-4 px-4
                       rounded-lg"
                    >
                      <option value="">hjfdfh</option>
                      <option value="">hjfdfh</option>
                      <option value="">hjfdfh</option>
                      <option value="">hjfdfh</option>
                      <option value="">hjfdfh</option>
                    </select>
                  </div>
                  <div className="text-left mt-8">
                    <label htmlFor="" className="text-left">
                      Tax rate:
                    </label>
                    <div className="flex border-2 border-zinc overflow-hidden  rounded-lg mt-4">
                      <input
                        required
                        type="number"
                        name="taxRate"
                        value={taxRate}
                        className="w-full  py-2  px-4"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="px-4 flex justify-center items-center border-l-2">
                        %
                      </div>
                    </div>
                  </div>
                  <div className="text-left mt-8">
                    <label htmlFor="" className="text-left">
                      Discount rate:
                    </label>
                    <div className="flex border-2 border-zinc overflow-hidden rounded-lg mt-4">
                      <input
                        required
                        type="number"
                        className="w-full  py-2  px-4 focus:overflow-hidden"
                        name="discountRate"
                        value={discountRate}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="px-4 flex justify-center items-center border-l-2">
                        %
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export { Invoice };
