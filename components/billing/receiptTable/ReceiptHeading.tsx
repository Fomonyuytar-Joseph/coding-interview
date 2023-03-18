import React from "react";

const ReceiptHeading = () => {
  return (
    <div className="grid grid-cols-12 md:gap-[35px] lg:gap-[50px]  xl:gap-[60px] xxl:gap-[67px] xxxl:gap-[80px]  text-[14px] xxxxl:gap-[90px] text-lightGray font-medium mb-3  ">
      <div className="col-span-4 ml-6 ">
        <h3>Date</h3>
      </div>
      <div className="col-span-4">
        <h3>Type</h3>
      </div>
      <div className="col-span-4">
        <h3>Receipt</h3>
      </div>
    </div>
  );
};

export default ReceiptHeading;
