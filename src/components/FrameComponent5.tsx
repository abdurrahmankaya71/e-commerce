import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
  group400?: string;
  base?: string;
  divider?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  group400,
  base,
  divider,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-0 box-border min-h-[223px] max-w-full shrink-0 ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start py-0 pl-[104px] pr-0 box-border gap-[46.9px] max-w-full text-left text-xl text-gray1-200 font-proxima-nova lg:pl-[52px] lg:box-border mq750:gap-[23px] mq750:pl-[26px] mq750:box-border">
        <div className="w-[1276.2px] flex flex-row items-end justify-between py-0 pl-0 pr-5 box-border max-w-full gap-5 mq1050:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[6.3px]">
            <div className="flex flex-col items-start justify-start gap-[42.3px]">
              <div className="flex flex-row items-start justify-start gap-[5.6px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px] mq450:text-base">
                  EN
                </a>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <img
                    className="w-[6.7px] h-1 relative"
                    loading="lazy"
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
                  src={group400}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[52px] text-gray1-300">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="flex flex-row items-start justify-start gap-[4.2px]">
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
              <a className="[text-decoration:none] relative text-lg font-bold font-caption-normalbold text-[inherit] inline-block min-w-[84px]">
                E-Comm
              </a>
            </div>
          </div>
          <div className="w-[811.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25.8px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[368.2px] flex flex-row items-start justify-start gap-[13.4px] max-w-full mq450:flex-wrap">
                  <div className="h-[59px] flex-1 relative min-w-[122px]">
                    <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start gap-[6.5px]">
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative"
                          loading="lazy"
                          alt=""
                          src="/profile-close-2.svg"
                        />
                      </div>
                      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-base">
                        My profile
                      </a>
                    </div>
                    <img
                      className="absolute h-full top-[0px] bottom-[0px] left-[113.2px] max-h-full w-[75px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/cart.svg"
                    />
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
              </div>
              <div className="relative text-5xl font-medium font-caption-normalbold text-primary-blue mq450:text-lgi">
                <span>HOME</span>
                <span className="text-gray1-300 whitespace-pre-wrap">
                  {" "}
                  BAG SNEAKERS BELT CONTACT
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[-104.4px] w-[1500.4px] flex flex-row flex-wrap items-start justify-start py-[14.5px] px-[546px] box-border relative gap-[2.5px] max-w-[108%] shrink-0 text-lg text-cornflowerblue-100 lg:pl-[273px] lg:pr-[273px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[136px] mq750:pr-[136px] mq750:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={base}
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
          <div className="w-[8.8px] flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-[3px] box-border text-sm text-silver-100">
            <div className="relative inline-block min-w-[5px] z-[1]">/</div>
          </div>
          <div className="relative text-gray1-200 z-[1]">
            Nike Airmax 270 React
          </div>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-170.2px]"
        alt=""
        src={divider}
      />
    </div>
  );
};

export default FrameComponent5;
