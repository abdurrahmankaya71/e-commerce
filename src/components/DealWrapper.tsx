import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DealWrapperType = {
  className?: string;
  rectangle1Copy10?: string;
  shoesShoePngTransparentShoe?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const DealWrapper: FunctionComponent<DealWrapperType> = ({
  className = "",
  propPadding,
  rectangle1Copy10,
  shoesShoePngTransparentShoe,
}) => {
  const dealWrapperStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-3.5 box-border max-w-full shrink-0 text-left text-11xl text-background-white font-caption-normalbold ${className}`}
      style={dealWrapperStyle}
    >
      <div className="flex-1 bg-primary-blue flex flex-col items-start justify-start pt-[58px] px-[109px] pb-[55.4px] box-border relative gap-[38.8px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[19px] mq825:pl-[54px] mq825:pr-[54px] mq825:box-border">
        <img
          className="w-[961.6px] h-[298px] relative hidden max-w-full z-[0]"
          alt=""
          src={rectangle1Copy10}
        />
        <div className="w-[350.9px] flex flex-col items-start justify-start gap-[11px] max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lg mq825:text-5xl">
            <p className="m-0">Adidas Men Running</p>
            <p className="m-0">Sneakers</p>
          </h2>
          <div className="relative text-sm z-[1]">
            Performance and design. Taken right to the edge.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2.8px] text-xs">
          <div className="relative font-semibold inline-block min-w-[73.6px] z-[1]">
            SHOP NOW
          </div>
          <img
            className="w-[37.6px] h-[2.7px] relative z-[1]"
            alt=""
            src="/rectangle-141.svg"
          />
        </div>
        <img
          className="w-[397.9px] h-[297.5px] absolute !m-[0] top-[-34.3px] right-[113.3px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src={shoesShoePngTransparentShoe}
        />
      </div>
    </div>
  );
};

export default DealWrapper;
