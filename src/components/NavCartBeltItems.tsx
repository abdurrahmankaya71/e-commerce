import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavCartBeltItemsType = {
  className?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propGap1?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const NavCartBeltItems: FunctionComponent<NavCartBeltItemsType> = ({
  className = "",
  propGap,
  propMinWidth,
  propGap1,
  propPadding,
  propPadding1,
}) => {
  const navCartBeltItemsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propGap, propMinWidth]);

  const navCartItemsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const cartProfileStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navBeltStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[31.6px] text-left text-xl text-gray1-200 font-proxima-nova ${className}`}
      style={navCartBeltItemsStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[6.5px]"
        style={navCartItemsStyle}
      >
        <div
          className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0"
          style={cartProfileStyle}
        >
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] whitespace-nowrap">
            My profile
          </a>
        </div>
        <div className="h-[59px] w-[75px] relative z-[1] text-center text-3xs text-background-white font-caption-normalbold">
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
      <div
        className="self-stretch flex flex-row items-start justify-end py-0 px-[45px] text-5xl font-caption-normalbold"
        style={navBeltStyle}
      >
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[52px]">
          BELT
        </a>
      </div>
    </div>
  );
};

export default NavCartBeltItems;
