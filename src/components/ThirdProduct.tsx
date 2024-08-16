import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ThirdProductType = {
  className?: string;
  thirdItemNew?: string;
  rate?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propGap?: CSSProperties["gap"];
};

const ThirdProduct: FunctionComponent<ThirdProductType> = ({
  className = "",
  propWidth,
  thirdItemNew,
  rate,
  propLeft,
  propGap,
}) => {
  const thirdProductStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rateIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const thirdPriceContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`w-[298px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px] box-border text-left text-lg text-neutral-dark font-caption-normalbold ${className}`}
      style={thirdProductStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-end pt-[287.2px] pb-[11.3px] pl-[42px] pr-9 relative gap-[27.5px] mq450:pl-5 mq450:pt-[187px] mq450:pb-5 mq450:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src={thirdItemNew}
          />
          <img
            className="absolute top-[320.6px] left-[81.4px] w-[123.6px] h-[15.1px] z-[2]"
            alt=""
            src={rate}
            style={rateIconStyle}
          />
        </div>
        <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
          Nike Air Max 270 React
        </b>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2 text-primary-blue">
          <div
            className="flex-1 flex flex-row items-start justify-start gap-[12.2px]"
            style={thirdPriceContainerStyle}
          >
            <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[77px] whitespace-nowrap z-[2]">
              $299,43
            </b>
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-sm text-neutral-grey">
              <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5 z-[2]">
                <div className="mt-[-3px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[58px] whitespace-nowrap">
                  $534,33
                </div>
                <b className="mt-[-3px] relative tracking-[0.5px] leading-[150%] inline-block text-primary-red min-w-[58px]">
                  24% Off
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdProduct;
