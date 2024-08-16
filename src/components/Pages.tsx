import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type PagesType = {
  className?: string;
  rate?: string;
  rectangle6?: string;
  rectangle37?: string;
  btn?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propGap1?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const Pages: FunctionComponent<PagesType> = ({
  className = "",
  propPadding,
  propGap,
  propWidth,
  propGap1,
  propPadding1,
  rate,
  rectangle6,
  rectangle37,
  btn,
}) => {
  const pagesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const ratingDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const ratingStarsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const ratingLabelStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0 box-border min-w-[424px] max-w-full text-left text-5xl text-gray1-300 font-caption-normalbold mq825:min-w-full ${className}`}
      style={pagesStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[28.2px] max-w-full">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[20.3px] max-w-full"
          style={frameDiv5Style}
        >
          <div
            className="w-[470px] flex flex-col items-start justify-start gap-[14.1px] max-w-full"
            style={ratingDetailsStyle}
          >
            <div className="relative font-medium mq450:text-lgi">
              Nike Airmax 270 React
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[9.5px] text-sm text-silver-100 font-proxima-nova"
              style={ratingStarsStyle}
            >
              <div
                className="flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px] gap-[14.8px]"
                style={ratingLabelStyle}
              >
                <div className="w-[72.4px] flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-2.5 relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src={rate}
                  />
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[60px]">
                  0 reviews
                </a>
                <div className="relative text-cornflowerblue-100 inline-block min-w-[98px]">
                  Submit a review
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                alt=""
                src={rectangle6}
              />
              <div className="flex flex-row items-start justify-start gap-[8.1px] text-xl text-primary-blue font-caption-normalbold">
                <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[85px] whitespace-nowrap mq450:text-base mq450:leading-[29px]">
                  $299,43
                </b>
                <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 text-sm text-neutral-grey">
                  <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5">
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
          <div className="self-stretch relative text-sm text-gray1-200">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </div>
        </div>
        <div className="w-[212px] flex flex-row items-start justify-start gap-4">
          <button
            className="cursor-pointer [border:none] pt-[13.5px] px-[26px] pb-[15.5px] bg-[transparent] flex-1 flex flex-row items-start justify-end relative"
            onClick={onBtnClick}
          >
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src={rectangle37}
              />
              <img
                className="absolute top-[15px] left-[20px] w-4 h-4 z-[1]"
                alt=""
                src="/cart-21.svg"
              />
            </div>
            <div className="relative text-sm font-proxima-nova text-cornflowerblue-100 text-left inline-block min-w-[73px] z-[1]">
              Add To Cart
            </div>
          </button>
          <img
            className="h-[46px] w-[46px] relative min-h-[46px]"
            loading="lazy"
            alt=""
            src={btn}
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
