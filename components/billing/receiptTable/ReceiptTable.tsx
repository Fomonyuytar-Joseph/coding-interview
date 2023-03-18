import React from 'react'
import Button from '../../buttons/Button';
import ReceiptDataRows from './ReceiptDataRows';
import ReceiptHeading from './ReceiptHeading';

const ReceiptTable = () => {
    const ReceiptInfos = [
      {
        date: "Oct",
        type: "Pro Annual",
      },
      {
        date: "Aug",
        type: "Pro Portfolio",
      },
      {
        date: "July",
        type: "Sponsored Post",
      },
      {
        date: "Jun",
        type: "Sponsored Post",
      },
    ];
  return (
    <div>
      <ReceiptHeading />

      {
        ReceiptInfos.map((ReceiptInfo,index)=>(
            <ReceiptDataRows date={ReceiptInfo.date} type={ReceiptInfo.type}/>
        ))
      }

      <div className='mt-2 ml-6'>
        <p className='text-[16px] font-medium text-primary underline' >Load More</p>
      </div>
    </div>
  );
}

export default ReceiptTable
