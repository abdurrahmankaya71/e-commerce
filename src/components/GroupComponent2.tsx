import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent2Type = {
  className?: string;
  item?: string;
  productPicture02?: string;
  rate?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  propWidth,
  propPadding,
  propAlignSelf,
  item,
  productPicture02,
  propAlignSelf1,
  propPadding1,
  propWidth1,
  rate,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const fifthProductDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      padding: propPadding1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propPadding1, propWidth1]);

  return (
    <div
      className={`h-[389px] w-[301px] flex flex-col items-start justify-start pt-0 px-0 pb-[8.7px] box-border relative gap-[14.8px] text-left text-lg text-neutral-dark font-caption-normalbold ${className}`}
      style={groupDiv2Style}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={item}
      />
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={productPicture02}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pl-10 pr-[41px]"
        style={fifthProductDetailsStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[6.2px]">
          <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
            Nike Air Max 270 React
          </b>
          <div className="flex flex-row items-start justify-start py-0 px-[39px]">
            <img
              className="h-[15.1px] w-[123.6px] relative z-[1]"
              alt=""
              src={rate}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
              <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[77px] whitespace-nowrap z-[1]">
                $299,43
              </b>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-sm text-neutral-grey">
                <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5 z-[1]">
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

export default GroupComponent2;
