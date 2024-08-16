import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DealTitle from "./DealTitle";
import DealWrapper from "./DealWrapper";
import GroupComponent from "./GroupComponent";

export type DealsType = {
  className?: string;
};

const Deals: FunctionComponent<DealsType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onSwitchClick = useCallback(() => {
    navigate("/product-list-list");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section
      className={`w-[1482.1px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray1-200 font-caption-normalbold ${className}`}
    >
      <div className="w-[1277.2px] flex flex-row items-start justify-start gap-[23.7px] max-w-full">
        <DealTitle
          base="/base-1.svg"
          base1="/base-2.svg"
          slider="/slider.svg"
          base2="/base-3.svg"
          colors="/colors.svg"
          base3="/base-4.svg"
          base4="/base-5.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_294px)] text-11xl text-gray1-300 font-proxima-nova mq825:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
            <DealWrapper
              rectangle1Copy10="/rectangle-1-copy-102.svg"
              shoesShoePngTransparentShoe="/shoesshoepngtransparentshoeimagespluspng17-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[26.3px] max-w-full text-base">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-3.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between py-0 pl-[22px] pr-px box-border relative max-w-full gap-5 mq825:flex-wrap">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full"
                    alt=""
                    src="/rectangle-11.svg"
                  />
                  <div className="w-[525.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[47.7px] mq825:flex-wrap mq825:gap-6">
                      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <div className="relative inline-block min-w-[57.3px] z-[1]">
                          13 Items
                        </div>
                      </div>
                      <div className="w-[201.4px] flex flex-row items-start justify-start py-0 pl-0 pr-[9px] box-border gap-[12.5px]">
                        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                          <div className="relative inline-block min-w-[51.5px] shrink-0 z-[1]">
                            Sort By
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-between pt-2.5 px-[17px] pb-[9px] relative shrink-0 gap-5 z-[1]">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/rectangle-40.svg"
                          />
                          <div className="relative inline-block min-w-[42.4px] z-[1]">
                            Name
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <img
                              className="w-[7.4px] h-1 relative z-[1]"
                              alt=""
                              src="/arrow-down-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[171.8px] flex flex-row items-start justify-start gap-[3.5px]">
                        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                          <div className="relative inline-block min-w-[40.1px] z-[1]">
                            Show
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-between pt-2.5 pb-2 pl-[25px] pr-[18px] relative gap-5 z-[1]">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/rectangle-40.svg"
                          />
                          <div className="relative inline-block min-w-[15px] z-[1]">
                            12
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <img
                              className="w-[7.4px] h-1 relative z-[1]"
                              alt=""
                              src="/arrow-down-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-full w-[55.3px] absolute !m-[0] top-[0px] right-[55px] bottom-[0px] max-h-full z-[2]"
                    alt=""
                    src="/switch.svg"
                  />
                  <img
                    className="h-[58px] w-[55.3px] relative cursor-pointer z-[1]"
                    alt=""
                    src="/switch-1.svg"
                    onClick={onSwitchClick}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24.5px] text-lg text-background-white">
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[231px]">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[34px] mq450:gap-[17px]">
                    <GroupComponent
                      onGroupContainerClick1={onGroupContainerClick}
                      propWidth="unset"
                      propPadding="1.5px 1px 18px 7px"
                      propAlignSelf="stretch"
                      propGap="9.5px"
                      rectangle1Copy5="/rectangle-1-copy-5.svg"
                      propLeft="7.5px"
                      propBackgroundImage="url('/image-product6@2x.png')"
                      propPadding1="0px 0px 239.5px"
                      imageProduct="/image-product6@2x.png"
                      propHeight="272.5px"
                      propWidth1="299.5px"
                      propLeft1="12.9px"
                      propPadding2="0px 39px 0px 42px"
                      propGap1="6.2px"
                      rate="/rate.svg"
                      propGap2="12.1px"
                    />
                    <GroupComponent
                      onGroupContainerClick1={onGroupContainerClick}
                      propWidth="301px"
                      propPadding="0px 0px 8.7px"
                      propAlignSelf="unset"
                      propGap="14.8px"
                      rectangle1Copy5="/item-1.svg"
                      propLeft="0px"
                      propBackgroundImage="url('/product-picture021@2x.png')"
                      propPadding1="1.5px 3px 244.6px"
                      imageProduct="/product-picture021@2x.png"
                      propHeight="279.1px"
                      propWidth1="301px"
                      propLeft1="12.9px"
                      propPadding2="0px 40px 0px 41px"
                      propGap1="6.1px"
                      rate="/rate.svg"
                      propGap2="12.1px"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[7px]">
                      <div
                        className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-px pb-[12.8px] relative gap-[14.8px] cursor-pointer"
                        onClick={onGroupContainerClick}
                      >
                        <img
                          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                          alt=""
                          src="/item-4.svg"
                        />
                        <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-0 px-0 pb-[239.5px] bg-cover bg-no-repeat bg-[top] z-[2]">
                          <img
                            className="h-[272.5px] w-[298px] relative rounded-8xs object-cover hidden"
                            alt=""
                            src="/image-product7@2x.png"
                          />
                          <div className="h-[33px] w-16 relative">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                              alt=""
                              src="/rectangle-20.svg"
                            />
                            <div className="absolute top-[5px] left-[12.8px] inline-block min-w-[37px] z-[4]">
                              HOT
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-[42px] text-neutral-dark font-caption-normalbold mq450:pr-5 mq450:box-border">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[6.1px]">
                            <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
                              Nike Air Max 270 React
                            </b>
                            <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                              <img
                                className="h-[15.1px] w-[123.6px] relative"
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
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[235px] text-neutral-dark font-caption-normalbold mq450:gap-[17px]">
                  <div
                    className="self-stretch flex flex-col items-start justify-start pt-[2.5px] pb-0 pl-[7px] pr-1.5 cursor-pointer"
                    onClick={onGroupContainerClick}
                  >
                    <div className="self-stretch flex flex-col items-start justify-end pt-[288.8px] pb-[12.8px] pl-[41px] pr-10 relative gap-[6.2px] mq450:pt-[188px] mq450:pb-5 mq450:box-border">
                      <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
                        Nike Air Max 270 React
                      </b>
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0.1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                        alt=""
                        src="/item.svg"
                      />
                      <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                        <img
                          className="h-[15.1px] w-[123.6px] relative"
                          alt=""
                          src="/rate-1.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2 text-primary-blue">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[12.1px]">
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
                      <img
                        className="w-[calc(100%_-_0.1px)] h-[276.5px] absolute !m-[0] top-[-2.5px] right-[0.1px] left-[0px] rounded-8xs max-w-full overflow-hidden shrink-0 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/image-product@2x.png"
                      />
                      <div className="w-16 h-[33px] absolute !m-[0] top-[1.5px] left-[-7px] text-background-white font-proxima-nova">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                          alt=""
                          src="/rectangle-20.svg"
                        />
                        <div className="absolute top-[5px] left-[12.9px] inline-block min-w-[37px] z-[4]">
                          HOT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[16.2px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
                      <div
                        className="h-[393px] flex-1 relative cursor-pointer"
                        onClick={onGroupContainerClick}
                      >
                        <div className="absolute top-[4px] left-[0px] w-full h-full flex flex-col items-start justify-start pt-[1.5px] pb-[12.7px] pl-px pr-0 box-border gap-[14.8px]">
                          <img
                            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/item-31.svg"
                          />
                          <img
                            className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover z-[1]"
                            alt=""
                            src="/product-picture031@2x.png"
                          />
                          <div className="w-[295.7px] flex flex-row items-start justify-start py-0 px-[38px] box-border">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[6.1px]">
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
                                <div className="flex-1 flex flex-row items-start justify-start gap-[12.1px]">
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
                        <div className="absolute top-[0px] left-[7px] w-16 h-[33px] text-background-white font-proxima-nova">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                            alt=""
                            src="/rectangle-20.svg"
                          />
                          <div className="absolute top-[5px] left-[12.9px] inline-block min-w-[37px] z-[3]">
                            HOT
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="self-stretch flex flex-col items-start justify-start pt-0 pb-[8.6px] pl-0.5 pr-0 relative gap-[14.8px] cursor-pointer text-background-white font-proxima-nova"
                      onClick={onGroupContainerClick}
                    >
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0.1px] bottom-[0px] max-h-full"
                        alt=""
                        src="/rectangle-1-copy-5-11.svg"
                      />
                      <div className="self-stretch h-[279.1px] relative rounded-8xs bg-cover bg-no-repeat bg-[top] z-[1]">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-8xs w-full h-full object-cover hidden z-[1]"
                          alt=""
                          src="/image-product8@2x.png"
                        />
                        <div className="absolute w-[calc(100%_-_27.4px)] top-[19.8px] right-[13.7px] left-[13.7px] h-[219px] z-[4]">
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
                      <div className="w-16 h-[33px] absolute !m-[0] top-[1.5px] left-[0px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                          alt=""
                          src="/rectangle-20.svg"
                        />
                        <div className="absolute top-[5px] left-[12.8px] inline-block min-w-[37px] z-[3]">
                          HOT
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px] text-neutral-dark font-caption-normalbold">
                        <div className="flex flex-col items-start justify-start gap-[6.2px]">
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
                          <div className="flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
                            <div className="flex flex-row items-start justify-start gap-[12.1px]">
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
                <div className="flex-1 flex flex-col items-start justify-start gap-[35.5px] min-w-[235px] mq450:gap-[18px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-[7px]">
                    <div className="flex-1 flex flex-col items-end justify-start">
                      <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-1 px-[3px] pb-[239.5px] bg-cover bg-no-repeat bg-[top] z-[1]">
                        <img
                          className="h-[276.5px] w-[299.5px] relative rounded-8xs object-cover hidden"
                          alt=""
                          src="/image-product9@2x.png"
                        />
                        <div className="h-[33px] w-16 relative">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                            alt=""
                            src="/rectangle-20.svg"
                          />
                          <div className="absolute top-[5px] left-[12.9px] inline-block min-w-[37px] z-[3]">
                            HOT
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-end pt-[287.3px] pb-[11.3px] pl-[42px] pr-9 relative gap-[27.4px] mt-[-272.5px] text-neutral-dark font-caption-normalbold mq450:pl-5 mq450:pb-5 mq450:box-border">
                        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                          <img
                            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/color-title.svg"
                          />
                          <img
                            className="absolute top-[320.6px] left-[81.5px] w-[123.6px] h-[15.1px] z-[1]"
                            alt=""
                            src="/rate.svg"
                          />
                        </div>
                        <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
                          Nike Air Max 270 React
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2 text-primary-blue">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[12.1px]">
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
                  <div className="self-stretch flex flex-col items-end justify-start gap-[17.5px]">
                    <div
                      className="self-stretch flex flex-col items-end justify-start pt-0 pb-[8.7px] pl-1.5 pr-[7px] relative gap-[14.8px] shrink-0 cursor-pointer"
                      onClick={onGroupContainerClick1}
                    >
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/item-3.svg"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start relative">
                        <img
                          className="h-[279.1px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/product-picture011@2x.png"
                        />
                        <div className="h-[33px] w-16 absolute !m-[0] top-[1.5px] left-[-1.5px]">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                            alt=""
                            src="/rectangle-20.svg"
                          />
                          <div className="absolute top-[5px] left-[12.9px] inline-block min-w-[37px] z-[3]">
                            HOT
                          </div>
                        </div>
                      </div>
                      <div className="w-[273.5px] flex flex-row items-start justify-end py-0 px-[27px] box-border text-neutral-dark font-caption-normalbold">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[6.1px]">
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
                            <div className="flex-1 flex flex-row items-start justify-start gap-[12.1px]">
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
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-1.5 pr-1">
                      <div
                        className="flex-1 flex flex-col items-end justify-start pt-[1.2px] px-0 pb-[12.8px] relative gap-[14.8px] shrink-0 cursor-pointer"
                        onClick={onGroupContainerClick}
                      >
                        <img
                          className="w-full h-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/item-5.svg"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start relative">
                          <img
                            className="h-[276.5px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[2]"
                            alt=""
                            src="/image-product-11@2x.png"
                          />
                          <div className="h-[33px] w-16 absolute !m-[0] top-[-1.2px] left-[1.5px]">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                              alt=""
                              src="/rectangle-20.svg"
                            />
                            <div className="absolute top-[5px] left-[12.9px] inline-block min-w-[37px] z-[4]">
                              HOT
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[41px] pr-10 text-neutral-dark font-caption-normalbold">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[6.1px]">
                            <b className="relative tracking-[0.5px] leading-[150%] z-[2]">
                              Nike Air Max 270 React
                            </b>
                            <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                              <img
                                className="h-[15.1px] w-[123.6px] relative"
                                alt=""
                                src="/rate-8.svg"
                              />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[12.1px]">
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
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-1 box-border max-w-full text-lg">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-between py-0 pl-[337px] pr-[336px] box-border relative max-w-full gap-5 lg:pl-[168px] lg:pr-[168px] lg:box-border mq825:pl-[84px] mq825:pr-[84px] mq825:box-border">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/base-6.svg"
                />
                <div className="w-[35.4px] flex flex-col items-start justify-start pt-4 pb-0 pl-0 pr-5 box-border">
                  <div className="relative inline-block min-w-[7.9px] z-[1]">
                    1
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                  <div className="relative inline-block min-w-[12.4px] z-[1]">
                    2
                  </div>
                </div>
                <div className="w-[62.9px] bg-primary-blue flex flex-row items-start justify-start pt-4 pb-[18px] pl-[25px] pr-6 box-border z-[1] text-background-white">
                  <img
                    className="h-14 w-[62.9px] relative hidden"
                    alt=""
                    src="/base2.svg"
                  />
                  <div className="relative inline-block min-w-[12.4px] z-[2]">
                    3
                  </div>
                </div>
                <div className="w-[37.6px] flex flex-col items-start justify-start pt-4 pb-0 pl-0 pr-5 box-border">
                  <div className="relative inline-block min-w-[12.4px] z-[1]">
                    4
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                  <div className="relative inline-block min-w-[12.4px] z-[1]">
                    5
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

export default Deals;
