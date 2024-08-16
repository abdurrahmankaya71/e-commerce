import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  rectangle1Copy5?: string;
  imageProduct?: string;
  rate?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propLeft?: CSSProperties["left"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
  propPadding2?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propGap2?: CSSProperties["gap"];

  /** Action props */
  onGroupContainerClick1?: () => void;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  onGroupContainerClick1,
  propWidth,
  propPadding,
  propAlignSelf,
  propGap,
  rectangle1Copy5,
  propLeft,
  propBackgroundImage,
  propPadding1,
  imageProduct,
  propHeight,
  propWidth1,
  propLeft1,
  propPadding2,
  propGap1,
  rate,
  propGap2,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
      gap: propGap,
    };
  }, [propWidth, propPadding, propAlignSelf, propGap]);

  const rectangle1Copy5Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const firstProductDetailsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding1,
    };
  }, [propBackgroundImage, propPadding1]);

  const imageProductIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  const hOTStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const titleContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const priceContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap2,
    };
  }, [propGap2]);

  return (
    <div
      className={`w-[301px] shrink-0 flex flex-col items-end justify-start pt-[1.5px] pb-[18px] pl-0 pr-px box-border relative gap-[9.5px] z-[1] text-left text-lg text-background-white font-proxima-nova ${className}`}
      onClick={onGroupContainerClick1}
      style={groupDivStyle}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={rectangle1Copy5}
        style={rectangle1Copy5Style}
      />
      <div
        className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-0 px-0 pb-[239.5px] bg-cover bg-no-repeat bg-[top] z-[1]"
        style={firstProductDetailsStyle}
      >
        <img
          className="h-[272.5px] w-[299.5px] relative rounded-8xs object-cover hidden"
          alt=""
          src={imageProduct}
          style={imageProductIconStyle}
        />
        <div className="h-[33px] w-16 relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
            loading="lazy"
            alt=""
            src="/rectangle-20.svg"
          />
          <div
            className="absolute top-[5px] left-[12.8px] inline-block min-w-[37px] z-[3]"
            style={hOTStyle}
          >
            HOT
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-end py-0 pl-[41px] pr-[39px] text-neutral-dark font-caption-normalbold"
        style={frameDiv2Style}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[6.2px]"
          style={titleContainerStyle}
        >
          <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
            Nike Air Max 270 React
          </b>
          <div className="flex flex-row items-start justify-start py-0 px-[39px]">
            <img
              className="h-[15.1px] w-[123.6px] relative z-[1]"
              loading="lazy"
              alt=""
              src={rate}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
            <div
              className="flex-1 flex flex-row items-start justify-start gap-[12.2px]"
              style={priceContainerStyle}
            >
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

export default GroupComponent;
