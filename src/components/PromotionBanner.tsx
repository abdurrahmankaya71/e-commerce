import { FunctionComponent } from "react";

export type PromotionBannerType = {
  className?: string;
};

const PromotionBanner: FunctionComponent<PromotionBannerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`ml-[-210px] mb-[33.5px] w-[1920px] flex flex-row items-start justify-start relative max-w-[128%] shrink-0 text-left text-36xl text-background-white font-caption-normalbold ${className}`}
    >
      <img
        className="h-[600px] flex-1 relative max-w-full overflow-hidden z-[1]"
        alt=""
        src="/rectangle-1-copy-101.svg"
      />
      <div className="!m-[0] absolute top-[calc(50%_-_137.2px)] left-[317.2px] flex flex-col items-start justify-start gap-[12.1px] max-w-full">
        <div className="flex flex-row items-start justify-start pt-0 px-[3px] pb-[11.2px] box-border max-w-full">
          <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[2] mq800:text-25xl mq450:text-14xl">
            <p className="m-0">Adidas Men Running</p>
            <p className="m-0">Sneakers</p>
          </h1>
        </div>
        <div className="relative text-5xl z-[2] mq450:text-lgi">
          Performance and design. Taken right to the edge.
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px] text-xl">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="relative font-semibold inline-block min-w-[111px] z-[2] mq450:text-base">
              SHOP NOW
            </div>
            <img
              className="w-[75px] h-[3px] relative z-[2]"
              alt=""
              src="/rectangle-14-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="h-[599.6px] w-[794.6px] absolute !m-[0] top-[-92px] right-[226.2px]">
        <img
          className="absolute top-[0px] left-[125.8px] w-[1.2px] h-[1.2px] object-cover"
          alt=""
          src="/pic@2x.png"
        />
        <img
          className="absolute top-[0.7px] left-[0px] w-full h-full object-contain z-[3]"
          alt=""
          src="/shoesshoepngtransparentshoeimagespluspng17-1@2x.png"
        />
      </div>
    </section>
  );
};

export default PromotionBanner;
