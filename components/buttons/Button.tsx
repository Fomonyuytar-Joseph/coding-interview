import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({children}:ButtonProps) => {
  return (
    <button className="text-[16px] text-darkBlueColor font-medium py-2 px-4 border-[1px] border-borderColor rounded-[8px] ">
    {children}
    </button>
  );
}

export default Button