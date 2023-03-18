import React from 'react'

interface BillingSectionProps{
    title:string
}
const BillingSection = ({title}:BillingSectionProps) => {
  return (
    <div>
      <h3 className="text-[16px] font-bold text-darkBlueColor">
        {title}
      </h3>
      <p className="text-[14px] text-lightGray font-medium">
        Manage billing information and receips
      </p>
    </div>
  );
}

export default BillingSection