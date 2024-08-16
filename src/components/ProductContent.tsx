import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type ProductContentType = {
  className?: string;
};

const ProductContent: FunctionComponent<ProductContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full text-left text-base text-gray1-200 font-caption-normalbold ${className}`}
    >
      <div className="w-[1245.1px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[2.7px] pb-0 pl-[958px] pr-0 box-border gap-[31.9px] max-w-full lg:pl-[479px] lg:box-border mq450:pl-5 mq450:box-border mq1500:flex-wrap mq825:gap-4 mq825:pl-[239px] mq825:box-border">
        <div className="mt-[-4.8px] ml-[-960.2px] w-[928.3px] flex flex-col items-end justify-start gap-[48.9px] shrink-0 max-w-[324%] mq450:gap-6">
          <div className="self-stretch flex flex-row items-start justify-start gap-[33.5px] shrink-0 max-w-full mq450:gap-[17px] mq1500:flex-wrap">
            <div className="w-[395.3px] flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border min-w-[395.3px] max-w-full mq1500:flex-1 mq1500:min-w-full">
              <div className="self-stretch h-[494.4px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[375px] h-[271.7px] object-cover z-[1]"
                  alt=""
                  src="/product-image2@2x.png"
                />
                <div className="absolute top-[0px] left-[2.1px] w-full h-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/images.svg"
                  />
                  <img
                    className="absolute top-[406.5px] left-[204px] w-[85.6px] h-[85.1px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/product-image-1@2x.png"
                  />
                  <img
                    className="absolute top-[406.5px] left-[305.5px] rounded-8xs w-[85.6px] h-[85.1px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/product-picture012@2x.png"
                  />
                  <img
                    className="absolute top-[406px] left-[2.4px] rounded-lg w-[85.8px] h-[86.3px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/product-picture021@2x.png"
                  />
                  <img
                    className="absolute top-[406px] left-[103.2px] rounded-lg w-[85.7px] h-[85.7px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/product-picture031@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="h-[569.4px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[69.2px] box-border gap-[21.2px] min-w-[324px] max-w-full mq450:h-auto mq825:pb-[45px] mq825:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17.2px] max-w-full shrink-0 text-5xl text-gray1-300">
                <h2 className="m-0 w-[450.6px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-lgi">
                  Nike Airmax 270 React
                </h2>
                <div className="flex flex-row items-start justify-start gap-[16.8px] text-base text-silver-100 font-proxima-nova mq450:flex-wrap">
                  <div className="w-[77px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
                    <img
                      className="self-stretch h-[10.6px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/rate1.svg"
                    />
                  </div>
                  <div className="relative inline-block min-w-[74.2px]">
                    0 reviews
                  </div>
                  <div className="relative text-cornflowerblue-100 inline-block min-w-[121.2px]">
                    Submit a review
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/rectangle-6.svg"
                />
                <div className="flex flex-row items-start justify-start text-xl text-primary-blue">
                  <div className="flex flex-col items-start justify-start gap-[17.9px]">
                    <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[85px] whitespace-nowrap mq450:text-base mq450:leading-[29px]">
                      $299,43
                    </b>
                    <div className="flex flex-col items-start justify-start gap-[13px] text-sm text-gray1-200">
                      <div className="relative inline-block min-w-[79px]">
                        Availability:
                      </div>
                      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[69px]">
                        Category:
                      </a>
                      <div className="relative leading-[18.1px] inline-block min-w-[96.2px]">
                        Free shipping
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 ml-[-3.1px] text-sm text-neutral-grey">
                    <div className="flex flex-col items-end justify-start gap-[28.4px]">
                      <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[19px]">
                        <div className="h-[15px] overflow-hidden flex flex-row items-start justify-start gap-1.5">
                          <div className="mt-[-3px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[58px] whitespace-nowrap">
                            $534,33
                          </div>
                          <b className="mt-[-3px] relative tracking-[0.5px] leading-[150%] inline-block text-primary-red min-w-[58px]">
                            24% Off
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[13px] text-gray1-200">
                        <div className="relative inline-block min-w-[54.9px]">
                          In stock
                        </div>
                        <div className="relative leading-[18.1px] inline-block min-w-[85.9px]">
                          Accessories
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/rectangle-6-1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[21.3px]">
                <div className="flex flex-row items-start justify-start gap-[23.1px] mq450:flex-wrap">
                  <div className="w-[123.3px] flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[18.1px] shrink-0">
                      Select Color:
                    </div>
                  </div>
                  <img
                    className="h-[27.6px] w-[150.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/colors1.svg"
                  />
                </div>
                <div className="w-[259.3px] flex flex-row items-start justify-between gap-5">
                  <div className="w-[37.7px] flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[18.1px]">
                      Size
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[10.6px] px-4 pb-[11.7px] relative gap-[64.7px] text-sm text-gray1-300 font-proxima-nova">
                    <img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-401.svg"
                    />
                    <div className="relative inline-block min-w-[19.1px] z-[1]">
                      XS
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                      <img
                        className="w-[7.1px] h-[4.3px] relative z-[1]"
                        alt=""
                        src="/arrow-down-21.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/rectangle-6-2.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-between gap-5 font-proxima-nova mq825:flex-wrap">
                <div className="flex flex-row items-start justify-start pt-[12.8px] px-14 pb-[15.9px] relative">
                  <div className="relative inline-block min-w-[10.6px] z-[1]">
                    2
                  </div>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-391.svg"
                    />
                    <img
                      className="absolute top-[20.2px] left-[96.7px] w-[8.5px] h-[8.5px] z-[1]"
                      alt=""
                      src="/group-271.svg"
                    />
                    <img
                      className="absolute top-[23.4px] left-[18.1px] w-[8.5px] h-[2.1px] z-[1]"
                      alt=""
                      src="/rectangle-11-copy-31.svg"
                    />
                  </div>
                </div>
                <div className="w-[225.3px] flex flex-row items-start justify-start gap-[17px]">
                  <button
                    className="cursor-pointer [border:none] pt-[14.4px] px-[15px] pb-[16.4px] bg-[transparent] flex-1 flex flex-row items-start justify-end relative shrink-0"
                    onClick={onBtnClick}
                  >
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <img
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/rectangle-371.svg"
                      />
                      <img
                        className="absolute top-[16px] left-[21.2px] w-[17px] h-[17px] z-[1]"
                        alt=""
                        src="/cart-2.svg"
                      />
                    </div>
                    <div className="relative text-base font-proxima-nova text-cornflowerblue-100 text-left inline-block min-w-[90.1px] z-[1]">
                      Add To Cart
                    </div>
                  </button>
                  <img
                    className="h-[48.9px] w-[48.9px] relative min-h-[49px] shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-51.svg"
                  />
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/rectangle-6-3.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start gap-[10.6px] mq825:flex-wrap">
                <button className="cursor-pointer [border:none] pt-[13.9px] px-[30px] pb-[16.9px] bg-[transparent] flex-1 flex flex-row items-start justify-end box-border relative min-w-[159px]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-41.svg"
                    />
                    <img
                      className="absolute top-[15.9px] left-[34.4px] w-[8.1px] h-[16.1px] z-[1]"
                      alt=""
                      src="/facebook1.svg"
                    />
                  </div>
                  <div className="h-[18.1px] relative text-base font-medium font-caption-normalbold text-background-white text-left inline-block z-[1]">
                    Share on Facebook
                  </div>
                </button>
                <button className="cursor-pointer [border:none] pt-[12.9px] px-7 pb-[17.9px] bg-[transparent] flex-1 flex flex-row items-start justify-end box-border relative min-w-[159px]">
                  <div className="h-[18.1px] relative text-base font-medium font-caption-normalbold text-background-white text-left inline-block z-[1]">
                    Share on Twitter
                  </div>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-41-1.svg"
                    />
                    <img
                      className="absolute top-[18.6px] left-[44.4px] w-[17.3px] h-[12.6px] z-[1]"
                      alt=""
                      src="/twitter1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[31.3px] px-0 pb-[44.4px] box-border relative gap-[21.9px] shrink-0 max-w-full text-lg mq450:pt-5 mq450:pb-[29px] mq450:box-border">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-8.svg"
            />
            <div className="w-[592.9px] flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-cornflowerblue-200">
                  <div className="relative z-[1]">Product Infomation</div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[20.2px] relative inline-block min-w-[76.8px] shrink-0 z-[1]">
                    Reviews
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-base text-gray1-400 font-proxima-nova">
                    <div className="relative inline-block min-w-[10.6px] shrink-0 z-[2]">
                      0
                    </div>
                  </div>
                </div>
                <div className="w-[109.9px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-proxima-nova">
                  <div className="self-stretch relative z-[1]">Another tab</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[4.3px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                alt=""
                src="/rectangle-8-copy-2.svg"
              />
              <img
                className="absolute top-[0px] left-[32.9px] w-[150.9px] h-[4.3px] z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-8-copy-2-1.svg"
              />
            </div>
            <div className="w-[818.1px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-xs text-neutral-grey">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
                  <div className="flex-1 relative tracking-[0.5px] leading-[180%] inline-block max-w-full z-[1]">
                    air max are always very comfortable fit, clean and just
                    perfect in every way. just the box was too small and
                    scrunched the sneakers up a little bit, not sure if the box
                    was always this small but the 90s are and will always be one
                    of my favorites.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                  <div className="flex-1 relative tracking-[0.5px] leading-[180%] inline-block max-w-full z-[1]">
                    air max are always very comfortable fit, clean and just
                    perfect in every way. just the box was too small and
                    scrunched the sneakers up a little bit, not sure if the box
                    was always this small but the 90s are and will always be one
                    of my favorites.
                  </div>
                </div>
                <div className="self-stretch relative tracking-[0.5px] leading-[180%] z-[1]">
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[286.9px] flex flex-col items-start justify-start gap-[32.9px] shrink-0 text-lg text-silver-100 font-proxima-nova mq450:gap-4">
          <div className="relative inline-block min-w-[114.8px]">
            BEST SELLER
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[21.3px] text-base text-crimson">
            <div className="self-stretch flex flex-col items-start justify-start pt-0.5 pb-[34px] pl-[3px] pr-0 relative gap-[52.6px] mq450:gap-[26px]">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-1-copy-51.svg"
              />
              <div className="self-stretch h-[239.7px] relative">
                <img
                  className="absolute top-[29.9px] left-[15px] w-[250.8px] h-[162.7px] z-[1]"
                  loading="lazy"
                  alt=""
                />
                <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                  <img
                    className="h-[1.1px] w-[244.4px] absolute !m-[0] bottom-[14.1px] left-[18.2px] z-[1]"
                    alt=""
                    src="/rectangle-1-copy-18.svg"
                  />
                  <img
                    className="h-[239.7px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[3]"
                    alt=""
                    src="/image-product-12@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6">
                <div className="w-[93.2px] flex flex-col items-end justify-start gap-3">
                  <div className="flex flex-row items-start justify-end py-0 pl-[9px] pr-[7px]">
                    <img
                      className="h-[10.6px] w-[77px] relative shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rate-11.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11.4px] shrink-0">
                    <div className="relative inline-block min-w-[40.4px] shrink-0 whitespace-nowrap z-[1]">
                      $499
                    </div>
                    <div className="h-[20.2px] flex-1 relative shrink-0 text-silver-100">
                      <div className="absolute top-[0px] left-[0px] inline-block w-[38px] h-[20.2px] min-w-[38px] whitespace-nowrap z-[1]">
                        $599
                      </div>
                      <img
                        className="absolute top-[12.2px] left-[0px] w-[41.4px] h-px z-[2]"
                        alt=""
                        src="/line-11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 pl-[72px] pr-[71px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-[3.2px] w-[143.5px] relative"
                loading="lazy"
                alt=""
                src="/group-28.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
