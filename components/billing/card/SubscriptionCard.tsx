import React from "react";
import CancelButton from "../../buttons/CancelButton";

const SubscriptionCard = () => {
  return (
    <div
      className="flex flex-col justify-between w-[258px] h-[221px] py-6 px-6 bg-primary rounded-[16px] text-white hover:bg-black"
      style={{ boxShadow: " 0px 8px 19px rgba(223, 223, 253, 0.6);" }}
    >
      <div className="text-[16px] ">
        <p>Your Plan</p>
      </div>

      <div className="mb-1">
        <h1 className="text-[24px] font-bold">Pro Annual</h1>
        <p className="text-[14px]">Renews on Nov. 2021</p>
      </div>

      <CancelButton />
    </div>
  );
};

export default SubscriptionCard;
