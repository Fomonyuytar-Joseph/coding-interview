import React from "react";
import CancelButton from "../../buttons/CancelButton";

const SubscriptionCard = () => {
  return (
    <div
      className="flex flex-col justify-between md:w-[230px] md:h-[210px] lg:w-[240px] lg:h-[220px] xl:w-[258px] xl:h-[221px] md:py-5 md:px-5 lg:py-6 lg:px-6 bg-primary rounded-[16px] text-white hover:bg-black"
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
