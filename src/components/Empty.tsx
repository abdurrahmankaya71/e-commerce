import { FunctionComponent, useCallback } from "react";
import LanguageNav from "./LanguageNav";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";

export type EmptyType = {
  className?: string;
};

const Empty: FunctionComponent<EmptyType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNAVContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`w-[1276.2px] flex flex-row items-end justify-between py-0 pl-0 pr-5 box-border max-w-full gap-5 text-left text-5xl text-primary-blue font-caption-normalbold lg:flex-wrap ${className}`}
    >
      <LanguageNav
        frameDivPadding="0px 208px 0px 0px"
        group400="/group-4003@2x.png"
        divider="/divider.svg"
        propGap="52px"
      />
      <div className="w-[232.9px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
        <div className="self-stretch h-9 relative">
          <div
            className="absolute top-[0px] left-[0px] w-[70px] flex flex-row items-start justify-start cursor-pointer"
            onClick={onNAVContainerClick}
          >
            <a className="[text-decoration:none] flex-1 relative font-medium whitespace-nowrap text-[inherit] mq450:text-lgi">
              <span>HOME</span>
              <span className="text-gray1-300 whitespace-pre-wrap">{`            `}</span>
            </a>
          </div>
          <a className="[text-decoration:none] absolute top-[0px] left-[167.9px] font-medium text-gray1-200 inline-block min-w-[65px] mq450:text-lgi">
            BAGS
          </a>
        </div>
      </div>
      <div className="w-[484.8px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
        <FrameComponent4
          propWidth="unset"
          propGap="25.8px"
          propAlignSelf="stretch"
          propColor="#262626"
        />
      </div>
    </header>
  );
};

export default Empty;
