import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FeaturedPricingType = {
  className?: string;
  nikeLogoEmblemLogotype1?: string;
  rectangle1Copy25?: string;
  c04297141?: string;
  rectangle1Copy251?: string;
  c042971411?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const FeaturedPricing: FunctionComponent<FeaturedPricingType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propPadding,
  propPadding1,
  nikeLogoEmblemLogotype1,
  rectangle1Copy25,
  c04297141,
  rectangle1Copy251,
  c042971411,
}) => {
  const featuredPricingStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      padding: propPadding,
    };
  }, [propFlex, propMinWidth, propPadding]);

  const topDividerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[234.9px] min-w-[259px] max-w-full text-left text-lg text-gray1-300 font-proxima-nova mq450:gap-[117px] ${className}`}
      style={featuredPricingStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start pt-0 px-[43px] pb-[15.8px] text-center mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={topDividerStyle}
      >
        <div className="w-[197.6px] relative inline-block shrink-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[21px] box-border max-w-full text-silver-100 font-caption-normalbold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.2px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[108px] pr-5">
            <div className="relative font-medium inline-block min-w-[106px]">
              01 Jan, 2015
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[35.2px] text-3xl text-gray1-300 mq450:flex-wrap mq450:gap-[18px]">
            <div className="h-[68.7px] w-[144.9px] flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={nikeLogoEmblemLogotype1}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[129px]">
              <div className="relative font-semibold mq450:text-lg">
                Fashion Industry
              </div>
              <div className="self-stretch h-[96.3px] relative text-lg font-proxima-nova inline-block shrink-0 z-[1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[249.3px] flex flex-col items-start justify-start gap-[16.8px] text-3xl text-gray1-200">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <div className="h-[188px] w-[249px] !m-[0] absolute bottom-[-117.6px] left-[-226.7px] flex flex-row items-start justify-start">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[18px] left-[48px] w-[154px] h-[154px]"
                loading="lazy"
                alt=""
                src={rectangle1Copy25}
              />
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src={c04297141}
              />
            </div>
          </div>
          <div className="flex-1 relative z-[2] mq450:text-lg">
            Blue Swade Nike Sneakers
          </div>
          <div className="h-[188px] w-[249px] !m-[0] absolute right-[-207.6px] bottom-[-117.6px] flex flex-row items-start justify-start">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[18px] left-[48px] w-[154px] h-[154px]"
                loading="lazy"
                alt=""
                src={rectangle1Copy251}
              />
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                alt=""
                src={c042971411}
              />
            </div>
          </div>
        </div>
        <img
          className="w-[86px] h-[11.9px] relative"
          loading="lazy"
          alt=""
          src="/rate-5.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[4.3px] text-xl text-crimson font-caption-normalbold">
          <div className="relative font-medium inline-block min-w-[52px] whitespace-nowrap mq450:text-base">
            $499
          </div>
          <div className="h-[27px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-silver-100 font-proxima-nova">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative inline-block min-w-[45.4px] whitespace-nowrap mq450:text-base">
                $599
              </div>
              <img
                className="w-[46.3px] h-px relative z-[1] mt-[-9.4px]"
                alt=""
                src="/line-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPricing;
