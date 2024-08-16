import { FunctionComponent } from "react";

export type FeaturedProductRatingType = {
  className?: string;
};

const FeaturedProductRating: FunctionComponent<FeaturedProductRatingType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[188.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px] box-border text-left text-8xl text-gray1-300 font-caption-normalbold ${className}`}
    >
      <div className="self-stretch h-[162.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[84.5px] box-border gap-[43px]">
        <div className="flex flex-row items-start justify-start py-0 px-[60px]">
          <img
            className="h-[78.2px] w-[68.8px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/refund.svg"
          />
        </div>
        <div className="self-stretch relative font-medium shrink-0 mq450:text-3xl">
          100% REFUND
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductRating;
