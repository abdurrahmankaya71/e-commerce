import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SEARCHType = {
  className?: string;
  roundedRectangle3?: string;
  roundedRectangle3Copy?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const SEARCH: FunctionComponent<SEARCHType> = ({
  className = "",
  propWidth,
  roundedRectangle3,
  propRight,
  roundedRectangle3Copy,
}) => {
  const sEARCHStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const roundedRectangle3Style: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div
      className={`w-[635px] flex flex-row items-start justify-between py-0 pl-[21px] pr-0 box-border relative gap-5 max-w-full text-left text-lg text-gray1-800 font-proxima-nova mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border ${className}`}
      style={sEARCHStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={roundedRectangle3}
        style={roundedRectangle3Style}
      />
      <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
        <div className="relative inline-block min-w-[117px] z-[1]">
          Search query...
        </div>
      </div>
      <div className="h-16 w-[127px] relative text-xl text-background-white font-caption-normalbold">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src={roundedRectangle3Copy}
        />
        <div className="absolute top-[17px] left-[27.5px] font-semibold inline-block min-w-[72px] z-[2] mq450:text-base">
          Search
        </div>
      </div>
    </div>
  );
};

export default SEARCH;
