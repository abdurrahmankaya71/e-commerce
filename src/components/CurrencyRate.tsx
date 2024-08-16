import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type CurrencyRateType = {
  className?: string;
};

const CurrencyRate: FunctionComponent<CurrencyRateType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onNAVContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 px-0 box-border min-h-[206px] max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start gap-[30.2px] max-w-full text-left text-xl text-gray1-200 font-proxima-nova mq825:gap-[15px]">
        <div className="w-[1464.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1256.2px] flex flex-row items-end justify-between max-w-full gap-5 lg:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[42.3px]">
              <div className="flex flex-row items-start justify-start gap-[13.1px]">
                <div className="flex flex-row items-start justify-start gap-[5.6px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px] mq450:text-base">
                    EN
                  </a>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-[6.7px] h-1 relative"
                      alt=""
                      src="/arrow-down.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4.2px] text-gray1-300">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] mq450:text-base">
                    USD
                  </a>
                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                    <img
                      className="w-[6.7px] h-1 relative"
                      alt=""
                      src="/arrow-down-1.svg"
                    />
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
                    src="/group-4004@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[84px]">
                    E-Comm
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[815.6px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between max-w-full whitespace-nowrap gap-5 text-left text-5xl text-gray1-200 font-caption-normalbold mq825:flex-wrap">
                <div className="w-[70px] flex flex-col items-start justify-start pt-[84.8px] px-0 pb-0 box-border text-primary-blue">
                  <div
                    className="self-stretch flex flex-row items-start justify-start cursor-pointer"
                    onClick={onNAVContainerClick}
                  >
                    <a className="[text-decoration:none] flex-1 relative font-medium whitespace-nowrap text-[inherit] mq450:text-lgi">
                      <span>HOME</span>
                      <span className="text-gray1-300 whitespace-pre-wrap">{`            `}</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[84.8px] px-0 pb-0">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px] mq450:text-lgi">
                    BAGS
                  </a>
                </div>
                <div className="w-[484.8px] flex flex-col items-end justify-start gap-[25.8px] max-w-full text-xl font-proxima-nova">
                  <div className="w-[368.2px] flex flex-row items-start justify-start gap-[13.4px] max-w-full mq450:flex-wrap">
                    <div className="h-[59px] flex-1 relative min-w-[122px]">
                      <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start gap-[6.5px]">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <img
                            className="w-5 h-5 relative"
                            alt=""
                            src="/profile-close-2.svg"
                          />
                        </div>
                        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-base">
                          My profile
                        </a>
                      </div>
                      <div className="absolute h-full top-[0px] bottom-[0px] left-[113.2px] w-[75px] z-[1] text-center text-3xs text-background-white font-caption-normalbold">
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
                    </div>
                    <div className="w-[166.6px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
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
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
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
              </nav>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[14.5px] px-[546px] relative gap-[2.6px] text-lg text-cornflowerblue-100 lg:pl-[273px] lg:pr-[273px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1500:flex-wrap mq1500:justify-center mq825:pl-[136px] mq825:pr-[136px] mq825:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/base1.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1.5 gap-2">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
              Home
            </a>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-sm text-silver-100">
              <div className="relative inline-block min-w-[5px] z-[1]">/</div>
            </div>
          </div>
          <div className="relative inline-block min-w-[70px] z-[1]">
            Hot Deal
          </div>
          <div className="w-[8.7px] flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-[3px] box-border text-sm text-silver-100">
            <div className="relative inline-block min-w-[5px] z-[1]">/</div>
          </div>
          <div className="relative text-gray1-200 z-[1]">
            Nike Airmax 270 React
          </div>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-153.5px]"
        loading="lazy"
        alt=""
        src="/divider.svg"
      />
    </section>
  );
};

export default CurrencyRate;
