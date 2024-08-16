import { FunctionComponent, useCallback } from "react";
import DealTitle from "./DealTitle";
import DealWrapper from "./DealWrapper";
import { useNavigate } from "react-router-dom";
import Pages from "./Pages";

export type HotDealsContainerType = {
  className?: string;
};

const HotDealsContainer: FunctionComponent<HotDealsContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onSwitchClick = useCallback(() => {
    navigate("/product-listgrid");
  }, [navigate]);

  const onBtnClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <div
      className={`w-[1268px] flex flex-row items-start justify-start gap-[29.3px] max-w-full text-left text-base text-gray1-300 font-proxima-nova ${className}`}
    >
      <DealTitle
        base="/base-1.svg"
        base1="/base-2.svg"
        slider="/slider.svg"
        base2="/base-3.svg"
        colors="/colors.svg"
        base3="/base-4.svg"
        base4="/base-5.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_299px)] mq825:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
          <DealWrapper
            propPadding="0px 5px 0px 1px"
            rectangle1Copy10="/rectangle-1-copy-102.svg"
            shoesShoePngTransparentShoe="/shoesshoepngtransparentshoeimagespluspng17-1@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pl-px pr-0 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
              <div className="self-stretch flex flex-row items-end justify-between py-0 pl-[22px] pr-[54px] box-border relative max-w-full gap-5 lg:pr-[27px] lg:box-border mq825:flex-wrap">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full"
                  alt=""
                  src="/rectangle-11.svg"
                />
                <img
                  className="h-full w-[55.3px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full z-[1]"
                  alt=""
                  src="/switch1.svg"
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
                  className="h-[58px] w-[55.3px] relative cursor-pointer z-[2]"
                  alt=""
                  src="/switch-11.svg"
                  onClick={onSwitchClick}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[15.6px] max-w-full text-xs text-background-white mq825:flex-wrap">
                <div className="h-[272.5px] w-[299.5px] flex flex-col items-start justify-start pt-[11.2px] px-[25px] pb-[11px] box-border relative min-w-[299.5px] mq825:flex-1">
                  <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start h-full">
                    <div className="h-[calc(100%_-_2.5px)] w-[270px] absolute !m-[0] top-[1.2px] right-[14.4px] bottom-[1.3px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/rectangle-1-copy-52.svg"
                      />
                      <img
                        className="absolute top-[59px] left-[17px] w-[236px] h-[153px] z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <img
                      className="h-[272.5px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[2]"
                      alt=""
                      src="/image-product6@2x.png"
                    />
                  </div>
                  <div className="w-10 h-5 relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-201.svg"
                    />
                    <div className="absolute top-[2px] left-[7.8px] inline-block min-w-[25px] z-[4]">
                      HOT
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[14.5px] min-w-[424px] max-w-full text-5xl text-gray1-300 font-caption-normalbold mq825:min-w-full">
                  <div className="w-[470px] flex flex-col items-start justify-start gap-[14.1px] max-w-full">
                    <div className="relative font-medium mq450:text-lgi">
                      Nike Airmax 270 React
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[17.4px] text-sm text-silver-100 font-proxima-nova">
                      <div className="flex flex-row items-start justify-start gap-[14.8px]">
                        <div className="w-[72.4px] flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0 box-border">
                          <img
                            className="self-stretch h-2.5 relative max-w-full overflow-hidden shrink-0"
                            alt=""
                            src="/rate2.svg"
                          />
                        </div>
                        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[60px]">
                          0 reviews
                        </a>
                        <div className="relative text-cornflowerblue-100 inline-block min-w-[98px]">
                          Submit a review
                        </div>
                      </div>
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/rectangle-61.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8.1px] text-xl text-primary-blue">
                    <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[85px] whitespace-nowrap mq450:text-base mq450:leading-[29px]">
                      $299,43
                    </b>
                    <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 text-sm text-neutral-grey">
                      <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5">
                        <div className="mt-[-3px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[58px] whitespace-nowrap">
                          $534,33
                        </div>
                        <b className="mt-[-3px] relative tracking-[0.5px] leading-[150%] inline-block text-primary-red min-w-[58px]">
                          24% Off
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.7px] box-border max-w-full text-sm text-gray1-200">
                    <div className="flex-1 relative inline-block max-w-full">
                      Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                      gravida et mattis vulputate, tristique ut lectus. Sed et
                      lectus lorem nunc leifend laorevtr istique et congue.
                      Vivamus adipiscin vulputate g nisl ut dolor ...
                    </div>
                  </div>
                  <div className="w-[212px] flex flex-row items-start justify-start gap-4">
                    <button
                      className="cursor-pointer [border:none] pt-[13.5px] px-[26px] pb-[15.5px] bg-[transparent] flex-1 flex flex-row items-start justify-end relative"
                      onClick={onBtnClick}
                    >
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/rectangle-372.svg"
                        />
                        <img
                          className="absolute top-[15px] left-[20px] w-4 h-4 z-[1]"
                          alt=""
                          src="/cart-21.svg"
                        />
                      </div>
                      <div className="relative text-sm font-proxima-nova text-cornflowerblue-100 text-left inline-block min-w-[73px] z-[1]">
                        Add To Cart
                      </div>
                    </button>
                    <img
                      className="h-[46px] w-[46px] relative min-h-[46px]"
                      loading="lazy"
                      alt=""
                      src="/btn.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[16.2px] pl-px pr-0 box-border max-w-full shrink-0 text-xs text-background-white">
            <div className="flex-1 flex flex-col items-start justify-start gap-[26.8px] max-w-full">
              <div className="w-[900.1px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
                <img
                  className="flex-1 relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/divider-11.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px] box-border gap-[14.1px] max-w-full mq825:flex-wrap">
                <div className="h-[276.5px] w-[301px] flex flex-col items-start justify-start pt-[13.2px] px-[25px] pb-[13px] box-border relative min-w-[301px] mq825:flex-1">
                  <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start h-full">
                    <img
                      className="h-[276.5px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[1]"
                      alt=""
                      src="/image-product@2x.png"
                    />
                    <div className="h-[calc(100%_-_6.5px)] w-[270px] absolute !m-[0] top-[3.2px] bottom-[3.3px] left-[15.1px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/rectangle-1-copy-52.svg"
                      />
                      <img
                        className="absolute top-[59px] left-[17px] w-[236px] h-[153px] z-[2]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-10 h-5 relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                      alt=""
                      src="/rectangle-201.svg"
                    />
                    <div className="absolute top-[2px] left-[7.8px] inline-block min-w-[25px] z-[3]">
                      HOT
                    </div>
                  </div>
                </div>
                <Pages
                  rate="/rate-12.svg"
                  rectangle6="/rectangle-6-11.svg"
                  rectangle37="/rectangle-372.svg"
                  btn="/btn-1.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.2px] pl-px pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[25.3px] max-w-full">
                  <div className="w-[896.6px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
                    <img
                      className="flex-1 relative max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      alt=""
                      src="/divider-2.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px] max-w-full mq825:flex-wrap">
                    <div className="w-[298px] flex flex-row items-start justify-start pt-[14.7px] px-[23px] pb-[244.4px] box-border relative min-w-[298px] mq825:flex-1">
                      <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start h-full">
                        <div className="h-[270px] w-[calc(100%_-_28px)] absolute !m-[0] right-[14.4px] bottom-[4.4px] left-[13.6px]">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full"
                            alt=""
                            src="/rectangle-1-copy-5-2.svg"
                          />
                          <img
                            className="absolute top-[59px] left-[17px] w-[236px] h-[153px] z-[1]"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <img
                          className="h-[279.1px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[2]"
                          alt=""
                          src="/product-picture011@2x.png"
                        />
                      </div>
                      <div className="h-5 w-10 relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                          alt=""
                          src="/rectangle-201.svg"
                        />
                        <div className="absolute top-[2px] left-[7.8px] inline-block min-w-[25px] z-[4]">
                          HOT
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0 box-border min-w-[424px] max-w-full text-5xl text-gray1-300 font-caption-normalbold mq825:min-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15.8px] max-w-full">
                        <div className="w-[470.6px] flex flex-col items-start justify-start gap-[14.1px] max-w-full">
                          <div className="relative font-medium mq450:text-lgi">
                            Nike Airmax 270 React
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[17.4px] text-sm text-silver-100 font-proxima-nova">
                            <div className="flex flex-row items-start justify-start gap-[14.8px]">
                              <div className="w-[72.4px] flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0 box-border">
                                <img
                                  className="self-stretch h-2.5 relative max-w-full overflow-hidden shrink-0"
                                  alt=""
                                  src="/rate-2.svg"
                                />
                              </div>
                              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[60px]">
                                0 reviews
                              </a>
                              <div className="relative text-cornflowerblue-100 inline-block min-w-[98px]">
                                Submit a review
                              </div>
                            </div>
                            <img
                              className="self-stretch relative max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/rectangle-6-21.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[8.1px] text-xl text-primary-blue">
                            <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[85px] whitespace-nowrap mq450:text-base mq450:leading-[29px]">
                              $299,43
                            </b>
                            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 text-sm text-neutral-grey">
                              <div className="h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1.5">
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
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[12.4px] box-border max-w-full text-sm text-gray1-200">
                          <div className="flex-1 relative inline-block max-w-full">
                            Nunc facilisis sagittis ullamcorper. Proin lectus
                            ipsum, gravida et mattis vulputate, tristique ut
                            lectus. Sed et lectus lorem nunc leifend laorevtr
                            istique et congue. Vivamus adipiscin vulputate g
                            nisl ut dolor ...
                          </div>
                        </div>
                        <div className="w-[212px] flex flex-row items-start justify-start gap-4">
                          <button
                            className="cursor-pointer [border:none] pt-[13.5px] px-[26px] pb-[15.5px] bg-[transparent] flex-1 flex flex-row items-start justify-end relative"
                            onClick={onBtnClick}
                          >
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                              <img
                                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/rectangle-372.svg"
                              />
                              <img
                                className="absolute top-[15px] left-[20px] w-4 h-4 z-[1]"
                                alt=""
                                src="/cart-21.svg"
                              />
                            </div>
                            <div className="relative text-sm font-proxima-nova text-cornflowerblue-100 text-left inline-block min-w-[73px] z-[1]">
                              Add To Cart
                            </div>
                          </button>
                          <img
                            className="h-[46px] w-[46px] relative min-h-[46px]"
                            loading="lazy"
                            alt=""
                            src="/btn-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25.3px] max-w-full">
                <div className="w-[900.1px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/divider-3.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[13.5px] max-w-full mq825:flex-wrap">
                  <div className="h-[279.1px] w-[301px] flex flex-col items-start justify-start pt-[14.7px] px-[25px] pb-[15px] box-border relative min-w-[301px] mq825:flex-1">
                    <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start h-full">
                      <div className="h-[calc(100%_-_9.1px)] w-[270px] absolute !m-[0] top-[4.7px] bottom-[4.4px] left-[15.1px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full"
                          alt=""
                          src="/rectangle-1-copy-5-3.svg"
                        />
                        <img
                          className="absolute top-[59px] left-[17px] w-[236px] h-[153px] z-[1]"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <img
                        className="h-[279.1px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover z-[2]"
                        alt=""
                        src="/product-picture021@2x.png"
                      />
                    </div>
                    <div className="w-10 h-5 relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-201.svg"
                      />
                      <div className="absolute top-[2px] left-[7.8px] inline-block min-w-[25px] z-[4]">
                        HOT
                      </div>
                    </div>
                  </div>
                  <Pages
                    propPadding="3.2px 0px 0px"
                    propGap="22.1px"
                    propWidth="470.6px"
                    propGap1="7.7px"
                    propPadding1="0px 0px 9.7px"
                    rate="/rate-3.svg"
                    rectangle6="/rectangle-6-31.svg"
                    rectangle37="/rectangle-372.svg"
                    btn="/btn-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-[7.4px] pl-[332px] pr-[335px] relative gap-5 text-lg lg:flex-wrap lg:pl-[166px] lg:pr-[167px] lg:box-border mq825:pl-[83px] mq825:pr-[83px] mq825:box-border">
            <img
              className="h-[calc(100%_-_7.4px)] w-[calc(100%_-_5.1px)] absolute !m-[0] top-[0px] right-[5.1px] bottom-[7.4px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/base-61.svg"
            />
            <div className="w-[34.9px] flex flex-col items-start justify-start pt-4 pb-0 pl-0 pr-5 box-border">
              <div className="relative inline-block min-w-[7.8px] z-[1]">1</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <div className="relative inline-block min-w-[12.2px] z-[1]">
                2
              </div>
            </div>
            <div className="bg-primary-blue flex flex-row items-start justify-start pt-4 pb-[18px] pl-[25px] pr-6 z-[1] text-background-white">
              <img
                className="h-14 w-[62px] relative hidden"
                alt=""
                src="/base3.svg"
              />
              <div className="relative inline-block min-w-[12.2px] z-[2]">
                3
              </div>
            </div>
            <div className="w-[37.1px] flex flex-col items-start justify-start pt-4 pb-0 pl-0 pr-5 box-border">
              <div className="relative inline-block min-w-[12.2px] z-[1]">
                4
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <div className="relative inline-block min-w-[12.2px] z-[1]">
                5
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
            <img
              className="w-[870px] relative max-h-full max-w-full"
              loading="lazy"
              alt=""
              src="/divider-41.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsContainer;
