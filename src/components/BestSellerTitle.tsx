import { FunctionComponent } from "react";

export type BestSellerTitleType = {
  className?: string;
};

const BestSellerTitle: FunctionComponent<BestSellerTitleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[70px] pr-5 box-border max-w-full shrink-0 text-left text-16xl text-gray1-300 font-caption-normalbold mq800:pl-[35px] mq800:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[26px] max-w-full">
        <div className="w-[557px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq800:text-9xl mq450:text-2xl">
            BEST SELLER
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start text-3xl text-cornflowerblue-100">
          <div className="h-[30px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="mb-[-3px] h-[33px] relative inline-block shrink-0 mq450:text-lg">
              <span>All</span>
              <span className="text-gray1-200 whitespace-pre-wrap">{`            Bags            Sneakers            Belt            Sunglasses            `}</span>
            </div>
          </div>
          <img
            className="w-[25px] h-[3px] relative shrink-0 z-[1]"
            alt=""
            src="/underline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellerTitle;
