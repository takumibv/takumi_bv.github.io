import React from "react";
import Image from "next/image";
import Profile from "./Profile";
import useParallax from "../hooks/useParallax";

const Footer: React.FC<{ hasProfile?: boolean }> = ({ hasProfile = true }) => {
  const { ref } = useParallax({ isBottom: true, speed: 1 });

  return (
    <>
      <div className="container container--sm mx-auto pt-6 overflow-hidden">
        {hasProfile && <Profile />}
      </div>
      <footer className="l-footer">
        <div
          className="l-footer__bg js-rellax"
          data-rellax-speed="-3"
          data-rellax-percentage="0.5"
          ref={ref}
        ></div>
        <div className="container mx-auto clearfix">
          <div className="l-footer__left">
            <Image src="/images/icon_text.png" alt="" width={60} height={60} />
          </div>
          <div className="l-footer__right">
            <p className="text text-center">Takumi, All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
