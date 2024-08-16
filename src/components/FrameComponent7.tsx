import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import ThirdProduct from "./ThirdProduct";
import GroupComponent2 from "./GroupComponent2";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1470.5px] flex flex-row items-start justify-center pt-0 px-5 pb-[27.1px] box-border max-w-full text-left text-16xl text-gray1-300 font-caption-normalbold ${className}`}
    >
      <div className="w-[1304px] flex flex-col items-start justify-start gap-[26px] max-w-full">
        <div className="w-[1271.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq800:text-9xl mq450:text-2xl">
            BEST SELLER
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[18.5px] max-w-full text-3xl text-cornflowerblue-100">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-[calc(100%_-_319px)] mq1125:max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2.5 box-border gap-[23.5px] max-w-full">
              <div className="flex flex-col items-start justify-start max-w-full">
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
              <div className="self-stretch h-[390.5px] flex flex-row items-start justify-end py-0 pl-0 pr-4 box-border max-w-full text-lg text-neutral-dark">
                <div className="self-stretch flex-1 overflow-x-auto flex flex-row items-end justify-start gap-[34.3px] max-w-full mq800:gap-[17px]">
                  <GroupComponent
                    rectangle1Copy5="/rectangle-1-copy-5.svg"
                    imageProduct="/image-product3@2x.png"
                    rate="/rate.svg"
                  />
                  <GroupComponent1
                    item="/item.svg"
                    imageProduct="/image-product-1@2x.png"
                    rate="/rate-1.svg"
                  />
                  <ThirdProduct
                    thirdItemNew="/third-item-new.svg"
                    rate="/rate.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-lg text-neutral-dark">
              <div className="h-[703.6px] w-[1315px] absolute !m-[0] top-[-424.5px] right-[-334px]">
                <img
                  className="absolute top-[2.5px] left-[0px] w-[1315px] h-[661px]"
                  alt=""
                  src="/items-grid1.svg"
                />
                <img
                  className="absolute top-[424.5px] left-[1009.6px] rounded-8xs w-[305.4px] h-[279.1px] object-cover z-[2]"
                  alt=""
                  src="/image-product-3@2x.png"
                />
                <div className="absolute top-[0px] left-[674px] rounded-8xs w-[299.5px] h-[276.5px] bg-cover bg-no-repeat bg-[top] z-[2]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-8xs w-full h-full object-cover hidden"
                    alt=""
                    src="/image-product5@2x.png"
                  />
                  <div className="absolute top-[38.5px] left-[14.5px] w-[278px] h-[219px] z-[3]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/overlay.svg"
                    />
                    <img
                      className="absolute top-[82px] left-[144px] w-[51px] h-[51px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-4.svg"
                    />
                    <img
                      className="absolute top-[82px] left-[82px] w-[52px] h-[51px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-5.svg"
                    />
                    <img
                      className="absolute h-[14.16%] w-[8.63%] top-[85.39%] right-[7.55%] bottom-[0.46%] left-[83.81%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[25.5px] max-w-full z-[1] mq1125:flex-wrap">
                <GroupComponent2
                  item="/item-1.svg"
                  productPicture02="/product-picture02@2x.png"
                  rate="/rate.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[203px] mq1125:flex-1">
                  <GroupComponent2
                    propWidth="unset"
                    propPadding="1.5px 0px 12.7px 1px"
                    propAlignSelf="stretch"
                    item="/item-2.svg"
                    productPicture02="/product-picture03@2x.png"
                    propAlignSelf1="unset"
                    propPadding1="0px 38px"
                    propWidth1="295.6px"
                    rate="/rate.svg"
                  />
                </div>
                <div className="flex-[0.9583] flex flex-col items-end justify-start pt-0 pb-[8.7px] pl-1.5 pr-[7px] box-border relative gap-[14.8px] min-w-[203px] mq1125:flex-1">
                  <img
                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/item-3.svg"
                  />
                  <img
                    className="self-stretch h-[279.1px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/product-picture01@2x.png"
                  />
                  <div className="w-[273.6px] flex flex-row items-start justify-end py-0 px-[27px] box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6.2px]">
                      <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
                        Nike Air Max 270 React
                      </b>
                      <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                        <img
                          className="h-[15.1px] w-[123.6px] relative z-[1]"
                          alt=""
                          src="/rate.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
                          <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[77px] whitespace-nowrap z-[1]">
                            $299,43
                          </b>
                          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-sm text-neutral-grey">
                            <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5 z-[1]">
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
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[367px] pr-5 text-xl mq800:pl-[183px] mq800:box-border mq450:pl-5 mq450:box-border">
              <div className="w-[115px] flex flex-col items-start justify-start">
                <div className="relative font-medium inline-block min-w-[115px] mq450:text-base">
                  LOAD MORE
                </div>
                <img
                  className="self-stretch h-[3px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/rectangle-14.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[870px] w-[301px] flex flex-col items-start justify-start pt-[59px] px-0 pb-0 box-border text-lg text-neutral-dark mq1125:hidden mq1125:pt-[38px] mq1125:box-border mq450:pt-[25px] mq450:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[34px] mq450:gap-[17px]">
              <GroupComponent1
                propWidth="unset"
                propPadding="1.5px 5px 12.8px 1px"
                propFlex="1"
                propAlignSelf="stretch"
                propHeight="unset"
                item="/item-4.svg"
                propTop="0px"
                propMaxHeight="100%"
                imageProduct="/image-product-2@2x.png"
                propPadding1="0px 37px 0px 38px"
                rate="/rate-6.svg"
                propGap="12.1px"
              />
              <div className="self-stretch flex flex-col items-start justify-end pt-[293.9px] px-10 pb-[8.7px] relative gap-[6.2px] mq450:pt-[191px] mq450:pb-5 mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/rectangle-1-copy-5-1.svg"
                />
                <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
                  Nike Air Max 270 React
                </b>
                <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                  <img
                    className="h-[15.1px] w-[123.6px] relative z-[2]"
                    alt=""
                    src="/rate.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[9px] text-primary-blue">
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
    </section>
  );
};

export default FrameComponent7;
