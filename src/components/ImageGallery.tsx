import { FunctionComponent } from "react";

export type ImageGalleryType = {
  className?: string;
};

const ImageGallery: FunctionComponent<ImageGalleryType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1276.1px] flex flex-col items-start justify-start pt-0 pb-[43.1px] pl-0 pr-5 box-border gap-10 max-w-full text-left text-lg text-gray1-200 font-caption-normalbold mq750:gap-5 mq750:pb-7 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[23px] max-w-full text-xl text-gray1-300">
        <div className="w-[1214.6px] flex flex-row items-start justify-end py-0 px-[9px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="relative font-medium inline-block min-w-[102px] mq450:text-base">
              PRODUCT
            </div>
            <div className="flex flex-row items-start justify-start gap-[115.9px] max-w-full mq750:flex-wrap mq750:gap-[58px]">
              <div className="relative font-medium inline-block min-w-[60.1px] mq450:text-base">
                PRICE
              </div>
              <div className="w-[82.7px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <div className="relative font-medium inline-block min-w-[42.9px] mq450:text-base">
                  QTY
                </div>
              </div>
              <div className="relative font-medium inline-block min-w-[113.8px] mq450:text-base">
                UNIT PRICE
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/divider-1.svg"
        />
      </div>
      <div className="w-[1182px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start py-0 pl-[50px] pr-0 box-border relative gap-[47.9px] min-w-[435.5px] max-w-full mq450:flex-wrap mq450:gap-6 mq450:pl-5 mq450:box-border mq750:min-w-full mq1050:flex-1">
          <img
            className="h-[22px] w-[23.6px] absolute !m-[0] top-[calc(50%_-_11px)] left-[0px]"
            loading="lazy"
            alt=""
            src="/del.svg"
          />
          <div className="w-[139.6px] flex flex-row items-start justify-start relative min-w-[139.6px] mq450:flex-1">
            <img
              className="h-[130px] flex-1 relative max-w-full overflow-hidden mq450:flex-1"
              alt=""
              src="/pic.svg"
            />
            <img
              className="h-[94px] w-[137.9px] absolute !m-[0] right-[-19.2px] bottom-[13.3px] rounded-6xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/product-image1@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[54px] px-0 pb-0">
            <div className="relative">Nike Airmax 270 react</div>
          </div>
        </div>
        <div className="w-[424px] flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="w-[101.9px] flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-5 box-border">
              <div className="w-[49.4px] relative inline-block whitespace-nowrap">
                $998
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[13px] pb-[11px] pl-[57px] pr-[55px] relative font-proxima-nova">
              <div className="relative inline-block min-w-[11.8px] z-[1]">
                2
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle-39.svg"
                />
                <img
                  className="absolute top-[19px] left-[97.7px] w-[8.6px] h-2 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-27.svg"
                />
                <img
                  className="absolute top-[22px] left-[18.3px] w-[8.6px] h-0.5 z-[1]"
                  alt=""
                  src="/rectangle-11-copy-3.svg"
                />
              </div>
            </div>
            <div className="w-[49.4px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <div className="self-stretch relative whitespace-nowrap">
                $499
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/divider-1.svg"
      />
      <div className="w-[1182px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start py-0 pl-[50px] pr-0 box-border relative gap-[47.9px] min-w-[435.5px] max-w-full mq450:flex-wrap mq450:gap-6 mq450:pl-5 mq450:box-border mq750:min-w-full mq1050:flex-1">
          <img
            className="h-[22px] w-[23.6px] absolute !m-[0] top-[calc(50%_-_11px)] left-[0px]"
            loading="lazy"
            alt=""
            src="/del.svg"
          />
          <div className="w-[139.6px] flex flex-row items-start justify-start relative min-w-[139.6px] mq450:flex-1">
            <img
              className="h-[130px] flex-1 relative max-w-full overflow-hidden mq450:flex-1"
              alt=""
              src="/pic.svg"
            />
            <img
              className="h-[94px] w-[131.8px] absolute !m-[0] top-[16px] right-[-16.1px] rounded-6xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-product2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[55.5px] px-0 pb-0">
            <div className="relative">Nike Airmax 270 react</div>
          </div>
        </div>
        <div className="w-[424px] flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="w-[101.9px] flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-5 box-border">
              <div className="w-[49.4px] relative inline-block whitespace-nowrap">
                $998
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[13px] pb-[11px] pl-[57px] pr-[55px] relative font-proxima-nova">
              <div className="relative inline-block min-w-[11.8px] z-[1]">
                2
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle-39.svg"
                />
                <img
                  className="absolute top-[19px] left-[97.7px] w-[8.6px] h-2 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-27.svg"
                />
                <img
                  className="absolute top-[22px] left-[18.3px] w-[8.6px] h-0.5 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-11-copy-3.svg"
                />
              </div>
            </div>
            <div className="w-[49.4px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <div className="self-stretch relative whitespace-nowrap">
                $499
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/divider-1.svg"
      />
    </div>
  );
};

export default ImageGallery;
