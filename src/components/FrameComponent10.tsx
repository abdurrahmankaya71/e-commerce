import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import ThirdProduct from "./ThirdProduct";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[83.8px] text-left text-16xl text-gray1-300 font-caption-normalbold mq450:gap-[21px] mq825:gap-[42px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[30px] pr-5">
        <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-2xl mq825:text-9xl">
          RELATED PRODUCTS
        </h1>
      </div>
      <div className="self-stretch grid flex-row items-end justify-start gap-[34.3px] grid-cols-[repeat(4,_minmax(226px,_1fr))] text-lg text-neutral-dark lg:justify-center lg:grid-cols-[repeat(2,_minmax(226px,_391px))] mq450:grid-cols-[minmax(226px,_1fr)] mq825:gap-[17px]">
        <GroupComponent
          propWidth="unset"
          propPadding="1.5px 1px 18px 0px"
          propAlignSelf="unset"
          propGap="9.5px"
          rectangle1Copy5="/rectangle-1-copy-5.svg"
          propLeft="0px"
          propBackgroundImage="url('/image-product11@2x.png')"
          propPadding1="0px 0px 239.5px"
          imageProduct="/image-product11@2x.png"
          propHeight="272.5px"
          propWidth1="299.5px"
          propLeft1="12.9px"
          propPadding2="0px 39px 0px 41px"
          propGap1="6.2px"
          rate="/rate.svg"
          propGap2="12.1px"
        />
        <GroupComponent1
          propWidth="unset"
          propPadding="0px 0px 12.8px"
          propFlex="unset"
          propAlignSelf="unset"
          propHeight="390.5px"
          item="/item.svg"
          propTop="unset"
          propMaxHeight="unset"
          imageProduct="/image-product-21@2x.png"
          propPadding1="0px 40px 0px 41px"
          rate="/rate-1.svg"
          propGap="12.1px"
        />
        <ThirdProduct
          propWidth="unset"
          thirdItemNew="/third-item-new.svg"
          rate="/rate.svg"
          propLeft="81.5px"
          propGap="12.1px"
        />
        <div className="h-[388px] flex flex-col items-start justify-start pt-[1.5px] px-px pb-[12.8px] box-border relative gap-[14.7px]">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/item-4.svg"
          />
          <img
            className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-product-31@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-[42px] mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6.2px]">
              <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
                Nike Air Max 270 React
              </b>
              <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                <img
                  className="h-[15.1px] w-[123.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/rate-6.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
                <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
                  <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[77px] whitespace-nowrap z-[2]">
                    $299,43
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-sm text-neutral-grey">
                    <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5 z-[2]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
