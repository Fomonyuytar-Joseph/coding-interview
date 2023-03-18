import React from 'react'
import Button from '../../buttons/Button';

interface ReceiptDataRowsProps{
    date:string;
    type:string;
}
const ReceiptDataRows = ({date,type}:ReceiptDataRowsProps) => {
return (
    <div className="grid grid-cols-12 gap-[70px] items-center  py-2 mb-1   rounded-[8px] text-[16px] font-medium text-darkBlueColor">
      <div className="col-span-4 ">{date} 21,2021</div>

      <div className="col-span-4">{type}</div>

      <div className="col-span-4">
        <Button>Download</Button>
      </div>
    </div>
  );
}

export default ReceiptDataRows