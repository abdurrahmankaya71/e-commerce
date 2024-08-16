import { FunctionComponent } from "react";
import FeaturedProductTitle from "./FeaturedProductTitle";
import FeaturedProductRating from "./FeaturedProductRating";
import FeaturedPricing from "./FeaturedPricing";
import FrameComponent1 from "./FrameComponent1";
import SEARCH from "./SEARCH";
import SneakersContent from "./SneakersContent";

export type AuthorLogoTwoType = {
  className?: string;
};

const AuthorLogoTwo: FunctionComponent<AuthorLogoTwoType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[4.6px] pl-[71px] pr-5 box-border max-w-full text-left text-8xl text-gray1-300 font-caption-normalbold mq1350:pl-[35px] mq1350:box-border ${className}`}
    >
      <div className="w-[1268.6px] flex flex-col items-start justify-start gap-1 max-w-full shrink-0">
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
        <div className="self-stretch flex flex-row items-start justify-start gap-[34.2px] max-w-full text-lg font-proxima-nova mq800:gap-[17px] mq1125:flex-wrap">
          <div className="flex-1 flex flex-col items-end justify-start gap-[152px] max-w-full mq800:min-w-full mq450:gap-[38px] mq1125:gap-[76px]">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[834px] flex flex-row items-start justify-start gap-[30.7px] max-w-full mq800:flex-wrap mq450:gap-[15px] mq1125:flex-1">
                <FeaturedPricing
                  nikeLogoEmblemLogotype1="/nike-logo-emblem-logotype-1@2x.png"
                  rectangle1Copy25="/rectangle-1-copy-25.svg"
                  c04297141="pending_3:6882"
                  rectangle1Copy251="/rectangle-1-copy-25.svg"
                  c042971411="pending_7:33"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[121.4px] min-w-[263px] max-w-full text-center mq450:gap-[61px]">
                  <div className="w-[328px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="h-[96.3px] flex-1 relative inline-block">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full text-left text-15xl font-caption-normalbold mq450:gap-9">
                    <div className="w-[357.3px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <h2 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq800:text-8xl mq450:text-xl">
                        LATEST NEWS
                      </h2>
                    </div>
                    <div className="w-[366.3px] flex flex-row items-start justify-start pt-0 px-5 pb-[38px] box-border max-w-full text-lg text-silver-100">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.2px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[55px] pr-5">
                          <div className="relative font-medium inline-block min-w-[106px]">
                            01 Jan, 2015
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center gap-[10.8px] text-3xl text-gray1-300 mq450:flex-wrap">
                          <div className="h-[90.8px] w-[117px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
                            <img
                              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                              loading="lazy"
                              alt=""
                              src="/figma1logo-1@2x.png"
                            />
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start min-w-[129px]">
                            <div className="relative font-semibold mq450:text-lg">
                              Best Design Tools
                            </div>
                            <div className="self-stretch h-[96.3px] relative text-lg font-proxima-nova inline-block shrink-0 z-[1]">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FrameComponent1
                      rectangle1Copy25="/rectangle-1-copy-25.svg"
                      c04297141="pending_7:49"
                    />
                  </div>
                </div>
              </div>
            </div>
            <SEARCH
              roundedRectangle3="/rounded-rectangle-3.svg"
              roundedRectangle3Copy="/rounded-rectangle-3-copy.svg"
            />
          </div>
          <div className="w-[321px] flex flex-col items-start justify-start gap-[234.9px] min-w-[321px] max-w-full mq450:gap-[117px] mq1125:flex-1">
            <div className="w-[197.6px] flex flex-row items-start justify-start pt-0 px-0 pb-[9.5px] box-border text-center">
              <div className="h-[96.3px] flex-1 relative inline-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-14 font-caption-normalbold mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[197.6px] flex flex-col items-start justify-start gap-[0.6px]">
                <div className="relative font-medium text-silver-100 inline-block min-w-[106px]">
                  01 Jan, 2015
                </div>
                <div className="relative text-3xl font-semibold mq450:text-lg">
                  HR Community
                </div>
                <div className="self-stretch h-[96.3px] relative font-proxima-nova inline-block shrink-0 z-[1]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-3xl text-gray1-200">
              <SneakersContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorLogoTwo;
