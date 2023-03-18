import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [toogleColor, setToggleColor] = useState<boolean>(true);
  const [active ,setActive]= useState(2)

  return (
    <div className="flex flex-col justify-between    bg-purplishColor h-screen w-[260px] py-10 pl-4 ">
      {/* top container */}
      <div className="flex flex-col gap-24">
        {/* user profile */}
        <div className="flex items-center gap-4">
          <ProfileSection />
        </div>

        {/* navigation links */}
        <div>
          <div onClick={() => setActive(1)}>
            <SideBarLink title={"General"} active={active} specialKey={1}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_468)">
                  <path
                    d="M10.6667 10.6667H21.3333V21.3334H10.6667V10.6667Z"
                    stroke={active === 1 ? "#1A194D" : "#62618F"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 5.33336H7.99998C6.52722 5.33336 5.33331 6.52727 5.33331 8.00003V24C5.33331 25.4728 6.52722 26.6667 7.99998 26.6667H24C25.4727 26.6667 26.6666 25.4728 26.6666 24V8.00003C26.6666 6.52727 25.4727 5.33336 24 5.33336Z"
                    stroke={active === 1 ? "#1A194D" : "#62618F"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_468">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SideBarLink>
          </div>

          <div onClick={() => setActive(2)}>
            <SideBarLink title={"Billing"} active={active} specialKey={2}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_471)">
                  <path
                    d="M25.3333 12H12C10.5273 12 9.33334 13.1939 9.33334 14.6667V22.6667C9.33334 24.1395 10.5273 25.3334 12 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V14.6667C28 13.1939 26.8061 12 25.3333 12Z"
                    stroke={active === 2 ? "#1A194D" : "#62618F"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.6667 21.3334C20.1394 21.3334 21.3333 20.1395 21.3333 18.6667C21.3333 17.1939 20.1394 16 18.6667 16C17.1939 16 16 17.1939 16 18.6667C16 20.1395 17.1939 21.3334 18.6667 21.3334Z"
                    stroke={active === 2 ? "#1A194D" : "#62618F"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.6667 12V9.33336C22.6667 8.62612 22.3857 7.94784 21.8856 7.44775C21.3855 6.94765 20.7072 6.6667 20 6.6667H6.66667C5.95942 6.6667 5.28115 6.94765 4.78105 7.44775C4.28095 7.94784 4 8.62612 4 9.33336V17.3334C4 18.0406 4.28095 18.7189 4.78105 19.219C5.28115 19.7191 5.95942 20 6.66667 20H9.33333"
                    stroke={active === 2 ? "#1A194D" : "#62618F"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_471">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SideBarLink>
          </div>
        </div>
      </div>

      {/* bottom container */}
      <div>
        <div className="flex items-center gap-1">
          {/* logout icon */}
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_467)">
                <path
                  d="M18.6667 10.6667V8.00003C18.6667 7.29279 18.3857 6.61451 17.8856 6.11441C17.3855 5.61432 16.7072 5.33336 16 5.33336H6.66667C5.95942 5.33336 5.28115 5.61432 4.78105 6.11441C4.28095 6.61451 4 7.29279 4 8.00003V24C4 24.7073 4.28095 25.3856 4.78105 25.8856C5.28115 26.3857 5.95942 26.6667 6.66667 26.6667H16C16.7072 26.6667 17.3855 26.3857 17.8856 25.8856C18.3857 25.3856 18.6667 24.7073 18.6667 24V21.3334"
                  stroke="#62618F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33334 16H28M28 16L24 12M28 16L24 20"
                  stroke="#62618F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_467">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* logout text */}
          <div>
            <p className="text-lightGray text-[14px] hover:text-darkBlueColor">
              Log out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
