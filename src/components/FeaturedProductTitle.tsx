import { FunctionComponent } from "react";

export type FeaturedProductTitleType = {
  className?: string;
  shipping?: string;
};

const FeaturedProductTitle: FunctionComponent<FeaturedProductTitleType> = ({
  className = "",
  shipping,
}) => {
  return (
    <div
      className={`w-[193.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.9px] box-border text-left text-8xl text-gray1-300 font-caption-normalbold ${className}`}
    >
      <div className="self-stretch h-[161.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[95.3px] box-border gap-[53.8px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px]">
          <img
            className="h-[65.9px] w-[100.8px] relative shrink-0"
            loading="lazy"
            alt=""
            src={shipping}
          />
        </div>
        <h3 className="m-0 relative text-inherit font-medium font-[inherit] shrink-0 mq450:text-3xl">
          FREE SHIPPING
        </h3>
      </div>
    </div>
  );
};

export default FeaturedProductTitle;
