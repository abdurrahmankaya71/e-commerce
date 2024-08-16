import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNAVContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-0 box-border min-h-[223px] max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start py-0 pl-[104px] pr-0 box-border gap-[46.9px] max-w-full text-left text-xl text-gray1-200 font-proxima-nova lg:pl-[52px] lg:box-border mq750:gap-[23px] mq750:pl-[26px] mq750:box-border">
        <div className="w-[1276.2px] flex flex-row items-end justify-between py-0 pl-0 pr-5 box-border max-w-full gap-5 mq1050:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[6.3px]">
            <div className="flex flex-col items-start justify-start gap-[42.3px]">
              <div className="flex flex-row items-start justify-start gap-[5.6px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px] shrink-0 mq450:text-base">
                  EN
                </a>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <img
                    className="w-[6.7px] h-1 relative shrink-0"
                    alt=""
                    src="/arrow-down.svg"
                  />
                </div>
              </div>
              <div className="w-11 h-11 relative rounded-2xl bg-primary-blue">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
                <img
                  className="absolute h-[44.55%] w-[44.55%] top-[27.73%] right-[27.73%] bottom-[27.73%] left-[27.73%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-4001@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[52px] text-gray1-300">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="flex flex-row items-start justify-start gap-[4.2px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] shrink-0 mq450:text-base">
                    USD
                  </a>
                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                    <img
                      className="w-[6.7px] h-1 relative shrink-0"
                      alt=""
                      src="/arrow-down-1.svg"
                    />
                  </div>
                </div>
              </div>
              <a className="[text-decoration:none] relative text-lg font-bold font-caption-normalbold text-[inherit] inline-block min-w-[84px]">
                E-Comm
              </a>
            </div>
          </div>
          <div className="w-[815.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[13.8px] box-border max-w-full">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between max-w-full whitespace-nowrap gap-5 text-left text-5xl text-gray1-200 font-caption-normalbold mq750:flex-wrap">
              <div className="w-[70px] flex flex-col items-start justify-start pt-[75px] px-0 pb-0 box-border text-gray1-300">
                <div
                  className="self-stretch flex flex-row items-start justify-start cursor-pointer"
                  onClick={onNAVContainerClick}
                >
                  <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit] whitespace-nowrap mq450:text-lgi">{`HOME            `}</a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[75px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px] mq450:text-lgi">
                  BAGS
                </a>
              </div>
              <FrameComponent4 />
            </nav>
          </div>
        </div>
        <div className="ml-[-104.4px] w-[1500.4px] flex flex-row items-start justify-center py-[14.5px] pl-[88px] pr-5 box-border relative gap-[6.6px] max-w-[108%] shrink-0 text-lg text-cornflowerblue-100 mq450:flex-wrap mq450:pl-5 mq450:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/base1.svg"
          />
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-sm text-silver-100">
            <div className="relative inline-block min-w-[5px] z-[1]">/</div>
          </div>
          <a className="[text-decoration:none] relative text-gray1-200 inline-block min-w-[87.1px] z-[1]">
            Contact Us
          </a>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-170.2px]"
        alt=""
        src="/divider.svg"
      />
    </div>
  );
};

export default FrameComponent9;
