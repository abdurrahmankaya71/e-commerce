import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavCartBeltItems from "./NavCartBeltItems";

export type TopBarType = {
  className?: string;
};

const TopBar: FunctionComponent<TopBarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start min-h-[222px] max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start py-0 pl-[103px] pr-0 box-border gap-[39px] max-w-full text-left text-xl text-gray1-200 font-proxima-nova mq825:gap-[19px] mq825:pl-[25px] mq825:box-border mq1425:pl-[51px] mq1425:box-border">
        <div className="flex flex-row items-end justify-start py-0 pl-0 pr-5 box-border relative gap-[33px] max-w-full mq825:gap-4 mq1425:flex-wrap">
          <img
            className="h-5 w-5 absolute !m-[0] top-[13.5px] right-[368.2px]"
            alt=""
            src="/profile-close-2.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[268px] box-border gap-[50.8px] max-w-full mq450:gap-[25px] mq450:pr-5 mq450:box-border">
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="flex flex-row items-start justify-start gap-[13.1px]">
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
                <div className="flex flex-row items-start justify-start gap-[4.2px] text-gray1-300">
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
            </div>
            <div
              className="flex flex-row items-start justify-start gap-[6.3px] cursor-pointer text-lg text-gray1-300 font-caption-normalbold"
              onClick={onGroupContainerClick}
            >
              <div className="h-11 w-11 relative rounded-2xl bg-primary-blue">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
                <img
                  className="absolute h-[44.55%] w-[44.55%] top-[27.73%] right-[27.73%] bottom-[27.73%] left-[27.73%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  alt=""
                  src="/group-4001@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[84px]">
                  E-Comm
                </a>
              </div>
            </div>
          </div>
          <div className="w-[134.9px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border text-5xl text-primary-blue font-caption-normalbold">
            <div
              className="w-[70px] flex flex-row items-start justify-start cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <a className="[text-decoration:none] flex-1 relative font-medium whitespace-nowrap text-[inherit] mq450:text-lgi">
                <span>HOME</span>
                <span className="text-gray1-300 whitespace-pre-wrap">{`            `}</span>
              </a>
            </div>
          </div>
          <div className="w-[281.8px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border text-5xl font-caption-normalbold">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px] mq450:text-lgi">
                BAGS
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[119px] mq450:text-lgi">
                SNEAKERS
              </a>
            </div>
          </div>
          <div className="w-[341.7px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[14.3px] mq450:flex-wrap">
              <NavCartBeltItems
                propGap="28.8px"
                propMinWidth="105px"
                propGap1="unset"
                propPadding="11.5px 0px 0px"
                propPadding1="0px 44px"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[51.8px] min-w-[109px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8.6px]">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5">
                    <a className="[text-decoration:none] w-[53px] relative text-[inherit] inline-block mq450:text-base">
                      {" "}
                      Items
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-gray1-700">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px] whitespace-nowrap mq450:text-base">
                      $0.00
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0">
                    <img
                      className="w-[21px] h-[20.9px] relative"
                      loading="lazy"
                      alt=""
                      src="/searchicon.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-[39px] pr-[9px] text-5xl font-caption-normalbold">
                  <a
                    className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[118px] cursor-pointer mq450:text-lgi"
                    onClick={onCONTACTTextClick}
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[-104px] w-[1500.4px] flex flex-row items-start justify-start py-[14.5px] px-[675px] box-border relative gap-[8.5px] max-w-[108%] shrink-0 text-lg text-cornflowerblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[337px] mq825:pr-[337px] mq825:box-border mq1425:flex-wrap">
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
          <div className="relative text-gray1-200 inline-block min-w-[70px] z-[1]">
            Hot Deal
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full mt-[-170.8px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
      </div>
    </div>
  );
};

export default TopBar;
