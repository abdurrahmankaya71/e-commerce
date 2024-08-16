import { FunctionComponent } from "react";

export type SneakersContentType = {
  className?: string;
};

const SneakersContent: FunctionComponent<SneakersContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[249.3px] flex flex-col items-start justify-start gap-[16.8px] text-left text-3xl text-gray1-200 font-proxima-nova ${className}`}
    >
      <div className="self-stretch relative z-[6] mq450:text-lg">
        Blue Swade Nike Sneakers
      </div>
      <img
        className="w-[86px] h-[11.9px] relative"
        loading="lazy"
        alt=""
        src="/rate-5.svg"
      />
      <div className="flex flex-row items-start justify-start gap-[4.2px] text-xl text-crimson font-caption-normalbold">
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
  );
};

export default SneakersContent;
