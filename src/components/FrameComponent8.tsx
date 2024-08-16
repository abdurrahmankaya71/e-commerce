import { FunctionComponent } from "react";
import FeaturedProductTitle from "./FeaturedProductTitle";
import FeaturedProductRating from "./FeaturedProductRating";
import FeaturedPricing from "./FeaturedPricing";
import FrameComponent1 from "./FrameComponent1";
import SneakersContent from "./SneakersContent";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[88.3px] pl-[71px] pr-5 box-border max-w-full text-left text-8xl text-gray1-300 font-caption-normalbold mq800:pb-[37px] mq800:box-border mq1350:pl-[35px] mq1350:box-border mq1125:pb-[57px] mq1125:box-border ${className}`}
    >
      <div className="w-[1268.6px] flex flex-col items-start justify-start gap-1 max-w-full">
        <div className="w-[1191.5px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border">
          <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
            <FeaturedProductTitle shipping="/shipping.svg" />
            <FeaturedProductRating />
            <div className="h-[164.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[75.4px] box-border gap-[34px]">
              <div className="w-[167.8px] flex flex-row items-start justify-start py-0 px-[50px] box-border">
                <img
                  className="h-[88.8px] flex-1 relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/support.svg"
                />
              </div>
              <div className="relative font-medium shrink-0 mq450:text-3xl">
                SUPPORT 24/7
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6.4px] max-w-full text-center text-lg font-proxima-nova mq1125:flex-wrap">
          <FeaturedPricing
            propFlex="0.9434"
            propMinWidth="276px"
            propPadding="0px 24px 0px 0px"
            propPadding1="0px 44px 15.8px"
            nikeLogoEmblemLogotype1="/nike-logo-emblem-logotype-1@2x.png"
            rectangle1Copy25="/rectangle-1-copy-25.svg"
            c04297141="pending_7:223"
            rectangle1Copy251="/rectangle-1-copy-25.svg"
            c042971411="pending_7:239"
          />
          <div className="w-[403.9px] flex flex-col items-start justify-start gap-[121.4px] max-w-full mq450:gap-[61px]">
            <div className="w-[328px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[96.3px] flex-1 relative inline-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full text-left text-15xl font-caption-normalbold mq450:gap-9">
              <div className="w-[357.3px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h2 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq800:text-8xl mq450:text-xl">
                  LATEST NEWS
                </h2>
              </div>
              <div className="w-[373.3px] flex flex-row items-start justify-start pt-0 px-[27px] pb-[38px] box-border max-w-full text-lg text-silver-100">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[49px] pr-5">
                    <div className="relative font-medium inline-block min-w-[106px]">
                      01 Jan, 2015
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[5.8px] mt-[-1px] text-3xl text-gray1-300 mq450:flex-wrap">
                    <img
                      className="h-[86.5px] w-[115.4px] relative object-cover shrink-0"
                      loading="lazy"
                      alt=""
                      src="/figma1logo-11@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0 box-border min-w-[129px]">
                      <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                        <div className="relative font-semibold mq450:text-lg">
                          Best Design Tools
                        </div>
                        <div className="self-stretch h-[96.3px] relative text-lg font-proxima-nova inline-block shrink-0 z-[1]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent1
                rectangle1Copy25="/rectangle-1-copy-25.svg"
                c04297141="pending_7:255"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[234.9px] min-w-[278px] max-w-full mq1125:flex-1 mq450:gap-[117px]">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[9.5px] pl-5 pr-9">
              <div className="h-[96.3px] w-[197.6px] relative inline-block shrink-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-silver-100 font-caption-normalbold">
              <div className="w-[372.6px] flex flex-col items-start justify-start gap-[1.2px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[103px] pr-5">
                  <div className="relative font-medium inline-block min-w-[106px]">
                    01 Jan, 2015
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[21.9px] text-3xl text-gray1-300 mq450:flex-wrap">
                  <div className="h-[84.3px] w-[153.1px] flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/kronoslogo11-2@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[129px]">
                    <div className="relative font-semibold mq450:text-lg">
                      HR Community
                    </div>
                    <div className="self-stretch h-[96.3px] relative text-lg font-proxima-nova inline-block shrink-0 z-[1]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SneakersContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
