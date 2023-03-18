import React from 'react'

interface SideBarLinkProps {
  title: string;
  children: React.ReactNode;
  active:number;
  specialKey:number
}
const SideBarLink = ({title,children,active,specialKey}:SideBarLinkProps) => {
  return (
    <div className={`flex items-center gap-1 mt-2  h-12 w-[150px] `}>

      {/* stroke */}
      <div className={`w-[6px] h-12 ${active ===specialKey ?'bg-primary':'bg-purplishColor'} rounded-lg`}>

      </div>

      {/* icon container */}
      <div className="ml-2 ">
        {children}
      </div>

      {/* link */}
      <div className={`${active ===specialKey ?"text-darkBlueColor":'text-lightGray'} text-[14px] font-normal hover:text-darkBlueColor cursor-default `}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SideBarLink