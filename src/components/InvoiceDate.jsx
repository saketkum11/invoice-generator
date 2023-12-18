const InvoiceDate = () => {
  return (
    <>
      <div className="text-start">
        <div>
          <span>Date:{}</span>
        </div>
        <div>
          <span>Due Date</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span> Invoice Number</span>
        <input
          type="number"
          className="w-12 h-8 bg-gray-200 border-2 rounded-md px-2"
          value={1}
        />
      </div>
    </>
  );
};

export { InvoiceDate };
