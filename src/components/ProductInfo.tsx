import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobilePhoneInput from "./MobilePhoneInput";
import Form from "./Form";

export type ProductInfoType = {
  className?: string;
};

const ProductInfo: FunctionComponent<ProductInfoType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/payment-6");
  }, [navigate]);

  const onTimesIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section
      className={`w-[1464.1px] flex flex-row items-start justify-center pt-0 px-5 pb-[87px] box-border max-w-full shrink-0 text-left text-xl text-gray1-300 font-caption-normalbold mq1050:pb-[57px] mq1050:box-border mq750:pb-[37px] mq750:box-border ${className}`}
    >
      <div className="w-[1256.1px] flex flex-col items-start justify-start gap-[82px] max-w-full mq450:gap-5 mq750:gap-[41px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[23px] max-w-full">
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
        <div className="w-[1207.6px] flex flex-col items-start justify-start max-w-full text-lg text-gray1-200">
          <div className="w-[1182px] flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
            <div className="w-[435.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <img
                  className="h-[22px] w-[23.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/del.svg"
                />
                <div className="relative">Nike Airmax 270 react</div>
              </div>
            </div>
            <div className="w-[424px] flex flex-row items-start justify-start gap-[74.1px] max-w-full mq450:flex-wrap mq450:gap-[37px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6.9px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[178px] px-0 pb-0">
              <img
                className="w-[23.6px] h-[22px] relative"
                loading="lazy"
                alt=""
                src="/del.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-end justify-start min-w-[765px] max-w-full [row-gap:20px] mq1050:flex-wrap mq1050:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start min-h-[719px] max-w-full mq1050:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div className="w-[1021.5px] flex flex-row items-start justify-start relative max-w-full">
                    <img
                      className="h-0.5 w-[1256.1px] absolute !m-[0] top-[82px] left-[-125.1px]"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <img
                      className="h-0.5 w-[1256.1px] absolute !m-[0] top-[294px] left-[-125.1px]"
                      loading="lazy"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className="w-[49.4px] absolute !m-[0] top-[178px] right-[-35.4px] inline-block whitespace-nowrap">
                      $499
                    </div>
                    <img
                      className="h-0.5 w-[370px] absolute !m-[0] right-[-53.9px] bottom-[179.6px]"
                      loading="lazy"
                      alt=""
                      src="/divider-4.svg"
                    />
                    <img
                      className="h-[60px] w-[374.1px] absolute !m-[0] right-[-58px] bottom-[22.6px]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-37.svg"
                    />
                    <div className="flex-1 rounded-3xs bg-background-white flex flex-col items-end justify-start pt-[58.8px] pb-[113.6px] pl-[81px] pr-[111px] box-border gap-[64.5px] max-w-full z-[7] mq1050:gap-8 mq1050:pl-10 mq1050:pr-[55px] mq1050:box-border mq750:gap-4 mq750:pt-[38px] mq750:pr-[27px] mq750:pb-[74px] mq750:box-border">
                      <div className="relative hidden">
                        Nike Airmax 270 react
                      </div>
                      <div className="w-[49.4px] relative hidden whitespace-nowrap">
                        $998
                      </div>
                      <img
                        className="w-[124.5px] h-[46px] relative hidden"
                        alt=""
                        src="/rectangle-39.svg"
                      />
                      <div className="relative font-proxima-nova hidden min-w-[11.8px]">
                        2
                      </div>
                      <div className="relative hidden min-w-[76px]">
                        Subtotal
                      </div>
                      <div className="relative hidden min-w-[113px]">
                        Shipping fee
                      </div>
                      <div className="relative text-11xl font-medium text-gray1-300 hidden min-w-[92px] mq450:text-lg mq1050:text-5xl">
                        TOTAL
                      </div>
                      <div className="relative hidden min-w-[73px]">Coupon</div>
                      <div className="relative font-medium text-background-white hidden min-w-[93.3px]">
                        Check out
                      </div>
                      <div className="w-3.5 h-[22px] relative text-3xl tracking-[-0.02em] font-font-awesome-5-pro text-black-text hidden items-end min-w-[14px] mq450:text-lg">
                        chevron-left
                      </div>
                      <div className="w-[1021.5px] h-[718.6px] relative rounded-3xs bg-background-white hidden max-w-full" />
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 text-13xl text-primary-blue font-raleway mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[15px]">
                          <div
                            className="w-10 h-10 relative cursor-pointer z-[1]"
                            onClick={onGroupContainerClick}
                          >
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver-200 hidden" />
                            <img
                              className="absolute h-[55.5%] w-[55.5%] top-[22.25%] right-[22.25%] bottom-[22.25%] left-[22.25%] max-w-full overflow-hidden max-h-full z-[1]"
                              loading="lazy"
                              alt=""
                              src="/status-bar.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[16.7px] px-0 pb-0">
                          <h2 className="m-0 relative text-inherit capitalize font-semibold font-[inherit] z-[1] mq450:text-lgi mq1050:text-7xl">
                            Make Payment
                          </h2>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                          <img
                            className="w-[25px] h-[22.7px] relative cursor-pointer z-[1]"
                            loading="lazy"
                            alt=""
                            src="/times.svg"
                            onClick={onTimesIconClick}
                          />
                        </div>
                      </div>
                      <div className="w-[482.9px] flex flex-row items-start justify-start relative max-w-full text-center text-background-white font-nunito">
                        <img
                          className="h-2 w-[8.6px] absolute !m-[0] top-[7px] right-[-5.4px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-27.svg"
                        />
                        <img
                          className="h-0.5 w-[8.6px] absolute !m-[0] top-[10px] right-[74px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-11-copy-3.svg"
                        />
                        <img
                          className="h-0.5 w-[122px] absolute !m-[0] top-[19px] left-[34.7px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[13.5px] box-border max-w-full">
                          <div className="w-[188px] flex flex-col items-end justify-start gap-[29px]">
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[17px] pr-4">
                              <div className="flex-1 flex flex-col items-end justify-start gap-[49px]">
                                <div className="self-stretch flex flex-row items-start justify-between gap-5">
                                  <div className="h-9 w-9 relative">
                                    <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_40px_rgba(248,_161,_112,_0.2)] rounded-[50%] bg-primary-blue w-full h-full z-[2]" />
                                    <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full [text-shadow:0px_0px_2px_rgba(0,_0,_0,_0.25)] z-[3]">
                                      1
                                    </b>
                                  </div>
                                  <div className="h-9 w-9 relative">
                                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-blue w-full h-full z-[2]" />
                                    <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full z-[3]">
                                      2
                                    </b>
                                  </div>
                                  <div className="h-9 w-9 relative">
                                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-blue w-full h-full z-[2]" />
                                    <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full z-[3]">
                                      3
                                    </b>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[11px]">
                                  <div className="flex-1 shadow-[0px_10px_30px_rgba(64,_191,_255,_0.24)] rounded-37xl bg-primary-blue flex flex-row items-start justify-start pt-[52px] pb-[50.1px] pl-[45px] pr-[43px] z-[1]">
                                    <div className="h-[129px] w-[130px] relative shadow-[0px_10px_30px_rgba(64,_191,_255,_0.24)] rounded-37xl bg-primary-blue hidden" />
                                    <img
                                      className="h-[26.9px] w-[41.5px] relative z-[1]"
                                      loading="lazy"
                                      alt=""
                                      src="/vector-41.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <b className="self-stretch relative text-5xl tracking-[0.5px] leading-[150%] font-caption-normalbold text-neutral-dark z-[1] mq450:text-lgi mq450:leading-[29px]">
                              Success
                            </b>
                          </div>
                        </div>
                      </div>
                      <MobilePhoneInput
                        propWidth="778.1px"
                        propPadding="unset"
                        goToPayment="Complete"
                      />
                    </div>
                  </div>
                </div>
                <Form
                  propMarginTop="-332.6px"
                  base="/base-11.svg"
                  rectangle37="/rectangle-37-1.svg"
                />
              </div>
              <div className="h-[332.6px] w-[62.6px] flex flex-col items-start justify-start ml-[-1.6px] mq1050:ml-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[54px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
                      <div className="relative inline-block min-w-[46px] whitespace-nowrap">
                        $998
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[9px] pr-1">
                        <div className="relative inline-block min-w-[33px] whitespace-nowrap">
                          $20
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-[3px]">
                        <div className="relative inline-block min-w-[25px]">
                          No
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-11xl font-medium text-gray1-300 inline-block min-w-[60px] whitespace-nowrap mq450:text-lg mq1050:text-5xl">
                    $118
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

export default ProductInfo;
