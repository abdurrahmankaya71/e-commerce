import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobilePhoneInput from "./MobilePhoneInput";
import Form from "./Form";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div
      className={`w-[1207.6px] flex flex-col items-start justify-start max-w-full text-left text-lg text-gray1-200 font-caption-normalbold ${className}`}
    >
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
            <div className="relative inline-block min-w-[11.8px] z-[1]">2</div>
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
            <div className="self-stretch relative whitespace-nowrap">$499</div>
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
                  loading="lazy"
                  alt=""
                  src="/divider-1.svg"
                />
                <div className="w-[49.4px] absolute !m-[0] top-[178px] right-[-35.4px] inline-block whitespace-nowrap">
                  $499
                </div>
                <img
                  className="h-0.5 w-[370px] absolute !m-[0] right-[-53.9px] bottom-[253.8px]"
                  loading="lazy"
                  alt=""
                  src="/divider-4.svg"
                />
                <img
                  className="h-[60px] w-[374.1px] absolute !m-[0] right-[-58px] bottom-[96.8px]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-37.svg"
                />
                <div className="flex-1 rounded-3xs bg-background-white flex flex-col items-end justify-start pt-[41.2px] pb-[78.3px] pl-[68px] pr-[97px] box-border gap-[56.7px] max-w-full z-[7] mq450:pt-5 mq450:pb-[33px] mq450:box-border mq1050:pt-[27px] mq1050:pb-[51px] mq1050:pl-[34px] mq1050:pr-12 mq1050:box-border mq750:gap-7 mq750:pr-6 mq750:box-border">
                  <div className="relative hidden">Nike Airmax 270 react</div>
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
                  <div className="relative hidden min-w-[76px]">Subtotal</div>
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
                  <div className="w-[336px] h-[50px] relative hidden max-w-full" />
                  <div className="w-[1021.5px] h-[792.8px] relative rounded-3xs bg-background-white hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-px pr-3.5 box-border max-w-full text-13xl text-primary-blue font-raleway">
                    <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
                      <div className="h-[80.1px] flex flex-col items-start justify-start py-0 pl-0 pr-7 box-border">
                        <div
                          className="w-10 h-10 relative cursor-pointer z-[1]"
                          onClick={onGroupContainerClick}
                        >
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver-200" />
                          <img
                            className="absolute h-[55.5%] w-[55.5%] top-[22.25%] right-[22.25%] bottom-[22.25%] left-[22.25%] max-w-full overflow-hidden max-h-full z-[1]"
                            loading="lazy"
                            alt=""
                            src="/status-bar1.svg"
                          />
                        </div>
                      </div>
                      <h2 className="m-0 relative text-inherit capitalize font-semibold font-[inherit] z-[1] mq450:text-lgi mq1050:text-7xl">
                        Make Payment
                      </h2>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[27.6px]">
                        <img
                          className="w-[25px] h-[25px] relative cursor-pointer z-[1]"
                          loading="lazy"
                          alt=""
                          src="/times1.svg"
                          onClick={onGroupContainerClick}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[840px] flex flex-col items-end justify-start gap-[27px] max-w-full text-base text-gray font-nunito">
                    <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
                      <div className="flex-1 flex flex-col items-end justify-start py-0 pl-0 pr-6 box-border gap-[24.3px] min-w-[272px] max-w-full">
                        <div className="w-9 h-[51.7px] relative text-center text-lg text-background-white">
                          <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_40px_rgba(248,_161,_112,_0.2)] rounded-[50%] bg-primary-blue w-9 h-9 z-[2]" />
                          <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-9 h-9 [text-shadow:0px_0px_2px_rgba(0,_0,_0,_0.25)] z-[3]">
                            1
                          </b>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[8.2px] pl-1 pr-2.5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] box-border relative whitespace-nowrap max-w-full">
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro z-[1]" />
                            <div className="w-[306px] relative tracking-[-0.02em] flex items-center shrink-0 z-[2]">
                              First Name
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-1.5 pr-2 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] box-border relative whitespace-nowrap max-w-full z-[1]">
                            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro" />
                            <div className="flex-1 relative tracking-[-0.02em] inline-block max-w-full z-[1]">
                              Email Address
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-3 box-border max-w-full text-xl text-primary-blue font-raleway">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[14.2px] max-w-full">
                            <div className="w-[266.5px] relative capitalize font-semibold flex items-end z-[1] mq450:text-base">
                              Select Method of Payment
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full text-xs text-neutral-dark font-caption-normalbold">
                              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                                <div className="self-stretch bg-neutral-light flex flex-row items-start justify-between pt-4 pb-3 pl-4 pr-[13px] box-border max-w-full gap-5 z-[1]">
                                  <div className="h-14 w-[378.7px] relative bg-neutral-light hidden max-w-full" />
                                  <div className="flex flex-row items-start justify-start gap-[16.2px]">
                                    <input
                                      className="m-0 h-6 w-[24.2px] relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                                      type="checkbox"
                                    />
                                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                      <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
                                        Credit Card Or Debit
                                      </b>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-primary-blue font-font-awesome-5-free">
                                    <div className="rounded-10xs border-gray-light border-[1px] border-solid flex flex-row items-start justify-start pt-1 px-1.5 pb-0 z-[1]">
                                      <div className="h-6 w-6 relative rounded-10xs border-gray-light border-[1px] border-solid box-border hidden" />
                                      <div className="relative leading-[16px] inline-block min-w-[12px] z-[1]">
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch bg-background-white flex flex-row items-end justify-between pt-[14.3px] pb-4 pl-4 pr-[13px] box-border max-w-full gap-5 z-[1]">
                                  <div className="h-14 w-[378.7px] relative bg-background-white hidden max-w-full" />
                                  <div className="flex flex-row items-start justify-start gap-[16.2px]">
                                    <img
                                      className="h-6 w-[24.2px] relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                                      alt=""
                                      src="/other-iconpaypal.svg"
                                    />
                                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                      <b className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[47px] z-[1]">
                                        Paypal
                                      </b>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.7px]">
                                    <div className="w-6 h-6 relative rounded-10xs border-gray-light border-[1px] border-solid box-border z-[1]">
                                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs border-gray-light border-[1px] border-solid box-border hidden" />
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch bg-background-white flex flex-row items-start justify-between pt-[13px] pb-4 pl-4 pr-[13px] box-border max-w-full gap-5 z-[1]">
                                  <div className="h-14 w-[378.7px] relative bg-background-white hidden max-w-full" />
                                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                    <div className="flex flex-row items-start justify-start gap-[16.2px]">
                                      <img
                                        className="h-6 w-[24.2px] relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                                        loading="lazy"
                                        alt=""
                                        src="/system-icon24pxbank.svg"
                                      />
                                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                        <b className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[93.9px] z-[1]">
                                          Bank Transfer
                                        </b>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-6 w-6 relative rounded-10xs border-gray-light border-[1px] border-solid box-border z-[1]">
                                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs border-gray-light border-[1px] border-solid box-border hidden" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-9 w-9 relative text-center text-lg text-background-white">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-light w-full h-full z-[2]" />
                        <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full z-[3]">
                          2
                        </b>
                      </div>
                      <div className="w-[384.6px] flex flex-row items-start justify-start relative max-w-full">
                        <img
                          className="h-2 w-[8.6px] absolute !m-[0] top-[7px] right-[9px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-27.svg"
                        />
                        <img
                          className="h-0.5 w-[8.6px] absolute !m-[0] top-[10px] right-[88.4px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-11-copy-3.svg"
                        />
                        <img
                          className="h-0.5 w-[122px] absolute !m-[0] top-[19px] left-[-78px] z-[1]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[40.3px] max-w-full mq450:gap-5">
                          <div className="w-[82px] flex flex-row items-start justify-start py-0 px-[23px] box-border text-center text-lg text-background-white">
                            <div className="h-9 flex-1 relative">
                              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-light w-full h-full z-[2]" />
                              <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] flex items-center justify-center w-full h-full z-[3]">
                                3
                              </b>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] box-border relative whitespace-nowrap max-w-full">
                              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro z-[1]" />
                              <div className="w-[306px] relative tracking-[-0.02em] flex items-center shrink-0 z-[2]">
                                Last Name
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[27.5px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                              <div className="h-[122.5px] flex-1 flex flex-row items-start justify-start py-[26px] px-3.5 box-border relative whitespace-nowrap max-w-full">
                                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro z-[1]" />
                                <div className="w-[306px] relative tracking-[-0.02em] flex items-center shrink-0 z-[2]">
                                  Address for Delivery
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start pt-[15px] px-3.5 pb-[13px] relative">
                              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro z-[1]" />
                              <input
                                className="w-[306px] [border:none] [outline:none] font-nunito text-base bg-[transparent] h-[22px] relative tracking-[-0.02em] text-gray text-left flex items-center p-0 z-[2]"
                                placeholder="Mobile Phone"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <MobilePhoneInput goToPayment="Go to Payment" />
                  </div>
                </div>
              </div>
            </div>
            <Form base="/base-11.svg" rectangle37="/rectangle-37-1.svg" />
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
                    <div className="relative inline-block min-w-[25px]">No</div>
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
  );
};

export default FrameComponent11;
