import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  className?: string;
  item?: string;
  imageProduct?: string;
  rate?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propPadding1?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  propWidth,
  propPadding,
  propFlex,
  propAlignSelf,
  propHeight,
  item,
  propTop,
  propMaxHeight,
  imageProduct,
  propPadding1,
  rate,
  propGap,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      flex: propFlex,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propWidth, propPadding, propFlex, propAlignSelf, propHeight]);

  const itemIconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      maxHeight: propMaxHeight,
    };
  }, [propTop, propMaxHeight]);

  const secondProductDetailsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const secondPriceContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch w-[301px] shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[12.8px] box-border relative gap-[14.7px] z-[1] text-left text-lg text-neutral-dark font-caption-normalbold ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="w-full h-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src={item}
        style={itemIconStyle}
      />
      <img
        className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[2]"
        alt=""
        src={imageProduct}
      />
      <div
        className="self-stretch flex flex-row items-start justify-end py-0 pl-[41px] pr-10"
        style={secondProductDetailsStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[6.2px]">
          <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
            Nike Air Max 270 React
          </b>
          <div className="flex flex-row items-start justify-start py-0 px-[39px]">
            <img
              className="h-[15.1px] w-[123.6px] relative"
              alt=""
              src={rate}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-[12.2px]"
              style={secondPriceContainerStyle}
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
    </div>
  );
};

export default GroupComponent1;
