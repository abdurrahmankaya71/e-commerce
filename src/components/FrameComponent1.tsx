import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
  rectangle1Copy25?: string;
  c04297141?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  rectangle1Copy25,
  c04297141,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[71.9px] max-w-full text-left text-16xl text-gray1-300 font-caption-normalbold mq450:gap-9 ${className}`}
    >
      <h2 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full mq800:text-9xl mq450:text-2xl">
        FEATURED PRODUCTS
      </h2>
      <div className="self-stretch flex flex-row items-start justify-end text-3xl text-gray1-200 font-proxima-nova">
        <div className="w-[249.3px] flex flex-col items-start justify-start gap-[16.8px]">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="flex-1 relative z-[4] mq450:text-lg">
              Blue Swade Nike Sneakers
            </div>
            <div className="h-[188px] w-[249px] !m-[0] absolute right-[-207.6px] bottom-[-117.6px] flex flex-row items-start justify-start">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute top-[18px] left-[48px] w-[154px] h-[154px]"
                  loading="lazy"
                  alt=""
                  src={rectangle1Copy25}
                />
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src={c04297141}
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
    </div>
  );
};

export default FrameComponent1;
