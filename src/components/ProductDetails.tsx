import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobilePhoneInput from "./MobilePhoneInput";
import Form from "./Form";

export type ProductDetailsType = {
  className?: string;
};

const ProductDetails: FunctionComponent<ProductDetailsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  const onTimesIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section
      className={`w-[1464.1px] flex flex-row items-start justify-center pt-0 px-5 pb-[12.8px] box-border max-w-full shrink-0 text-left text-xl text-gray1-300 font-caption-normalbold ${className}`}
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
                alt=""
                src="/del.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-end justify-start min-w-[765px] [row-gap:20px] max-w-full mq1050:flex-wrap mq1050:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start min-h-[793px] max-w-full mq1050:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div className="w-[1021.5px] flex flex-row items-start justify-start relative max-w-full">
                    <img
                      className="h-0.5 w-[1256.1px] absolute !m-[0] top-[82px] left-[-125.1px]"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <img
                      className="h-0.5 w-[1256.1px] absolute !m-[0] top-[294px] left-[-125.1px]"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className="w-[49.4px] absolute !m-[0] top-[178px] right-[-35.4px] inline-block whitespace-nowrap">
                      $499
                    </div>
                    <img
                      className="h-0.5 w-[370px] absolute !m-[0] right-[-53.9px] bottom-[253.8px]"
                      alt=""
                      src="/divider-4.svg"
                    />
                    <img
                      className="h-[60px] w-[374.1px] absolute !m-[0] right-[-58px] bottom-[96.8px]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-37.svg"
                    />
                    <div className="flex-1 rounded-3xs bg-background-white flex flex-col items-end justify-start pt-[53.7px] pb-[78.3px] pl-[74px] pr-[103px] box-border gap-[126px] max-w-full z-[6] mq450:gap-4 mq450:pt-[23px] mq450:pb-[33px] mq450:box-border mq1050:gap-[63px] mq1050:pt-[35px] mq1050:pb-[51px] mq1050:pl-[37px] mq1050:pr-[51px] mq1050:box-border mq750:gap-[31px] mq750:pr-[25px] mq750:box-border">
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
                      <div className="w-[1021.5px] h-[792.8px] relative rounded-3xs bg-background-white hidden max-w-full" />
                      <div className="self-stretch flex flex-col items-end justify-start gap-[56.7px] max-w-full text-13xl text-primary-blue font-raleway mq450:gap-7">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[7px] box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[23px]">
                              <div
                                className="w-10 h-10 relative cursor-pointer z-[1]"
                                onClick={onGroupContainerClick}
                              >
                                <div className="absolute top-[0px] left-[0px] bg-silver-200 w-full h-full hidden" />
                                <img
                                  className="absolute top-[8.9px] left-[8.9px] w-[22.2px] h-[22.2px] z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/status-bar1.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[29.6px] px-0 pb-0">
                              <h2 className="m-0 relative text-inherit capitalize font-semibold font-[inherit] z-[1] mq450:text-lgi mq1050:text-7xl">
                                Make Payment
                              </h2>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                              <img
                                className="w-[25px] h-[25px] relative cursor-pointer z-[1]"
                                loading="lazy"
                                alt=""
                                src="/times2.svg"
                                onClick={onTimesIconClick}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[804.7px] flex flex-row items-start justify-start gap-[23.5px] max-w-full text-center text-lg text-background-white font-nunito mq1050:flex-wrap">
                          <div className="flex-1 flex flex-col items-end justify-start gap-[34px] min-w-[239px] max-w-full mq450:gap-[17px]">
                            <div className="w-9 h-9 relative">
                              <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_40px_rgba(248,_161,_112,_0.2)] rounded-[50%] bg-primary-blue w-full h-full z-[2]" />
                              <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full [text-shadow:0px_0px_2px_rgba(0,_0,_0,_0.25)] z-[3]">
                                1
                              </b>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[27px] box-border max-w-full text-left text-5xl font-dosis">
                              <div className="flex-1 rounded-3xs [background:linear-gradient(180deg,_#acacac,_#4f4f4f)] flex flex-col items-start justify-start pt-[21.7px] pb-[20.4px] pl-[21px] pr-[18px] box-border relative gap-[48.9px] max-w-full z-[1] mq450:gap-6">
                                <div className="w-[339px] h-[198px] relative rounded-3xs [background:linear-gradient(180deg,_#acacac,_#4f4f4f)] hidden max-w-full z-[0]" />
                                <img
                                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                                  alt=""
                                  src="/mask-group.svg"
                                />
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-px">
                                  <div className="flex-1 flex flex-row items-start justify-start gap-[178.2px]">
                                    <img
                                      className="h-[30px] w-[42px] relative z-[2]"
                                      loading="lazy"
                                      alt=""
                                      src="/subtract.svg"
                                    />
                                    <img
                                      className="h-[5.4px] w-[16.9px] relative z-[2]"
                                      loading="lazy"
                                      alt=""
                                      src="/visalogo.svg"
                                    />
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                                  <div className="relative leading-[34px] font-semibold z-[2] mq450:text-lgi mq450:leading-[27px]">
                                    1234 5678 9123 4567
                                  </div>
                                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                                    <div className="relative leading-[34px] font-semibold inline-block min-w-[100px] z-[2] mq450:text-lgi mq450:leading-[27px]">
                                      JOHN DOE
                                    </div>
                                    <div className="relative leading-[34px] font-semibold inline-block min-w-[64px] z-[2] mq450:text-lgi mq450:leading-[27px]">
                                      00/00
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-9 w-9 relative">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-blue w-full h-full z-[2]" />
                            <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                              <img
                                className="h-0.5 w-[122px] absolute !m-[0] right-[-44px] bottom-[15px] z-[1]"
                                loading="lazy"
                                alt=""
                                src="/vector.svg"
                              />
                              <b className="h-9 flex-1 relative tracking-[-0.02em] flex items-center justify-center z-[3]">
                                2
                              </b>
                            </div>
                          </div>
                          <div className="w-[355px] flex flex-row items-start justify-start relative max-w-full">
                            <img
                              className="h-2 w-[8.6px] absolute !m-[0] top-[7px] right-[2.4px] z-[1]"
                              alt=""
                              src="/group-27.svg"
                            />
                            <img
                              className="h-0.5 w-[8.6px] absolute !m-[0] top-[10px] right-[81.8px] z-[1]"
                              alt=""
                              src="/rectangle-11-copy-3.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start gap-[25.1px] max-w-full">
                              <div className="w-9 h-[47.7px] relative">
                                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-light w-9 h-9 z-[2]" />
                                <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-9 h-9 z-[3]">
                                  3
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[36.8px] max-w-full mq450:gap-[18px]">
                                  <div className="self-stretch flex flex-col items-start justify-start gap-[30.8px] max-w-full mq450:gap-[15px]">
                                    <div className="self-stretch flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] relative z-[1]">
                                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro" />
                                      <input
                                        className="w-full [border:none] [outline:none] font-nunito text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] text-gray text-left flex items-center min-w-[184px] p-0 z-[1]"
                                        placeholder="Card Number"
                                        type="text"
                                      />
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                                      <div className="flex-1 flex flex-row items-start justify-start gap-[15px] max-w-full mq450:flex-wrap">
                                        <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] box-border relative min-w-[105px] z-[1]">
                                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro" />
                                          <input
                                            className="w-full [border:none] [outline:none] font-nunito text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] text-gray text-left flex items-center min-w-[79px] p-0 z-[1]"
                                            placeholder="Expiry"
                                            type="text"
                                          />
                                        </div>
                                        <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] box-border relative min-w-[105px] z-[1]">
                                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro" />
                                          <input
                                            className="w-full [border:none] [outline:none] font-nunito text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] text-gray text-left flex items-center min-w-[79px] p-0 z-[1]"
                                            placeholder="CVV"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="self-stretch flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] relative z-[1]">
                                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro" />
                                    <input
                                      className="w-full [border:none] [outline:none] font-nunito text-base bg-[transparent] h-[22px] flex-1 relative tracking-[-0.02em] text-gray text-left flex items-center min-w-[184px] p-0 z-[1]"
                                      placeholder="Holder Number"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="h-[25px] flex flex-row items-start justify-start py-0 px-4 box-border text-left text-xs text-gray font-font-awesome-5-free">
                                <div className="self-stretch flex flex-row items-end justify-start gap-2.5">
                                  <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                    <div className="flex-1 flex flex-col items-start justify-start">
                                      <div className="rounded-10xs border-gray-light border-[1px] border-solid flex flex-row items-start justify-start pt-1 px-1.5 pb-0 z-[2]">
                                        <div className="h-6 w-6 relative rounded-10xs border-gray-light border-[1px] border-solid box-border hidden" />
                                        <div className="relative leading-[16px] inline-block min-w-[12px] z-[1]">
                                          
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-start justify-start py-0 px-1.5 mt-[-18px]">
                                        <div className="relative leading-[16px] inline-block min-w-[12px] z-[1]">
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start text-sm font-nunito">
                                    <div className="relative leading-[22px] inline-block min-w-[127px] z-[1]">
                                      Save this credit card
                                    </div>
                                    <div className="relative leading-[22px] inline-block min-w-[127px] z-[2] ml-[-127px]">
                                      Save this credit card
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <MobilePhoneInput
                        propWidth="770.4px"
                        propPadding="unset"
                        goToPayment="Confirm"
                      />
                    </div>
                  </div>
                </div>
                <Form
                  propMarginTop="-406.8px"
                  base="/base-11.svg"
                  rectangle37="/rectangle-37-1.svg"
                />
              </div>
              <div className="h-[406.8px] w-[62.6px] flex flex-col items-start justify-start ml-[-1.6px] mq1050:ml-0">
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

export default ProductDetails;
