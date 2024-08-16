import { FunctionComponent, useCallback } from "react";
import LanguageNav from "./LanguageNav";
import { useNavigate } from "react-router-dom";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNAVContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div
      className={`w-[1467.5px] flex flex-row items-start justify-center pt-0 px-5 pb-[194.2px] box-border max-w-full ${className}`}
    >
      <header className="w-[1260.6px] flex flex-row items-end justify-between max-w-full gap-5 text-left text-xl text-gray1-200 font-proxima-nova mq1125:flex-wrap">
        <LanguageNav group400="/group-400@2x.png" divider="/divider.svg" />
        <div className="w-[232.9px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border text-5xl text-primary-blue font-caption-normalbold">
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
        <div className="w-[484.7px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[30.3px] max-w-full mq800:gap-[15px]">
            <div className="flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full">
              <div className="flex flex-row items-end justify-start gap-8 max-w-full mq450:flex-wrap mq450:gap-4">
                <div className="flex flex-row items-start justify-start gap-[6.5px]">
                  <div className="flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0">
                    <img
                      className="w-5 h-5 relative"
                      loading="lazy"
                      alt=""
                      src="/profile-close-2.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-base">
                      My profile
                    </a>
                  </div>
                  <div className="h-[59px] w-[75px] relative z-[1] text-center text-3xs text-background-white font-caption-normalbold">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-background-white hidden" />
                    <img
                      className="absolute h-[40.68%] w-[32%] top-[27.12%] right-[33.33%] bottom-[32.2%] left-[34.67%] max-w-full overflow-hidden max-h-full z-[1]"
                      loading="lazy"
                      alt=""
                      src="/system-icon24pxcart.svg"
                    />
                    <div className="absolute top-[6px] left-[40px] w-5 h-5">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-red border-background-white border-[0px] border-solid box-border w-full h-full z-[2]" />
                      <b className="absolute top-[3px] left-[7px] tracking-[0.5px] leading-[150%] inline-block min-w-[7px] z-[3]">
                        2
                      </b>
                    </div>
                  </div>
                  <div className="w-[53px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
                    <a className="[text-decoration:none] self-stretch relative text-[inherit] mq450:text-base">
                      {" "}
                      Items
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[17px] text-gray1-700">
                  <div className="flex flex-row items-start justify-start gap-[6.6px]">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px] whitespace-nowrap mq450:text-base">
                      $0.00
                    </a>
                    <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                      <img
                        className="w-[21px] h-[20.9px] relative"
                        loading="lazy"
                        alt=""
                        src="/searchicon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-5 whitespace-nowrap text-left text-5xl text-gray1-200 font-caption-normalbold mq450:flex-wrap">
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[119px] mq450:text-lgi">
                SNEAKERS
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[52px] mq450:text-lgi">
                BELT
              </a>
              <a
                className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[118px] cursor-pointer mq450:text-lgi"
                onClick={onCONTACTTextClick}
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent6;
