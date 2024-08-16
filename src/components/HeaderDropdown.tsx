import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavCartBeltItems from "./NavCartBeltItems";
import FrameComponent from "./FrameComponent";

export type HeaderDropdownType = {
  className?: string;
};

const HeaderDropdown: FunctionComponent<HeaderDropdownType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFOOTERContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onNAVContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onMEGAMENUContainerClick = useCallback(() => {
    navigate("/product-listgrid");
  }, [navigate]);

  return (
    <section
      className={`w-[1462.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-gray1-200 font-proxima-nova ${className}`}
    >
      <div className="w-[1254.2px] flex flex-col items-end justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16.2px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[42.3px]">
              <div className="flex flex-row items-start justify-start gap-[13.1px]">
                <div className="flex flex-row items-start justify-start gap-[5.6px]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px] shrink-0 mq450:text-base">
                    EN
                  </a>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-[6.7px] h-1 relative shrink-0"
                      alt=""
                      src="/arrow-down.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4.2px] text-gray1-300">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] shrink-0 mq450:text-base">
                    USD
                  </a>
                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                    <img
                      className="w-[6.7px] h-1 relative shrink-0"
                      alt=""
                      src="/arrow-down-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start gap-[6.3px] cursor-pointer text-lg text-gray1-300 font-caption-normalbold"
                onClick={onFOOTERContainerClick}
              >
                <div className="h-11 w-11 relative rounded-2xl bg-primary-blue shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
                  <img
                    className="absolute h-[44.55%] w-[44.55%] top-[27.73%] right-[27.73%] bottom-[27.73%] left-[27.73%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-400@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[9.8px] px-0 pb-0">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[84px] shrink-0">
                    E-Comm
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[177.5px] min-w-[718px] max-w-full text-3xl text-silver-100 font-caption-normalbold mq800:gap-11 mq800:min-w-full mq1125:gap-[89px] mq450:gap-[22px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[12.8px] max-w-full">
              <header className="w-[815.6px] flex flex-row items-start justify-start gap-[6.5px] max-w-full text-left text-5xl text-gray1-200 font-caption-normalbold">
                <div className="w-[161.4px] flex flex-col items-start justify-start pt-[90.6px] px-0 pb-0 box-border text-primary-blue">
                  <div
                    className="w-[70px] flex flex-row items-start justify-start cursor-pointer"
                    onClick={onNAVContainerClick}
                  >
                    <a className="[text-decoration:none] flex-1 relative font-medium whitespace-nowrap text-[inherit]">
                      <span>HOME</span>
                      <span className="text-gray1-300 whitespace-pre-wrap">{`            `}</span>
                    </a>
                  </div>
                </div>
                <div className="w-[156.4px] flex flex-col items-start justify-start pt-[90.6px] pb-0 pl-0 pr-5 box-border">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px]">
                    BAGS
                  </a>
                </div>
                <div className="w-[138.6px] flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[107.1px] relative">
                    <img
                      className="absolute top-[0px] left-[118.6px] w-5 h-5"
                      loading="lazy"
                      alt=""
                      src="/profile-close-2.svg"
                    />
                    <a className="[text-decoration:none] absolute top-[71.1px] left-[0px] font-medium text-[inherit] inline-block min-w-[119px]">
                      SNEAKERS
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-end justify-start gap-[6.6px] max-w-full text-xl font-proxima-nova">
                  <NavCartBeltItems />
                  <div className="flex-1 flex flex-row items-start justify-start relative">
                    <img
                      className="h-0.5 w-[1500.4px] absolute !m-[0] top-[40px] left-[-1193.6px]"
                      loading="lazy"
                      alt=""
                      src="/divider.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[48.6px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5">
                        <a className="[text-decoration:none] w-[53px] relative text-[inherit] inline-block whitespace-nowrap">
                          {" "}
                          Items
                        </a>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-gray1-700">
                          <div className="flex flex-row items-start justify-start gap-[6.6px]">
                            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px] whitespace-nowrap">
                              $0.00
                            </a>
                            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                              <img
                                className="w-[21px] h-[20.9px] relative"
                                loading="lazy"
                                alt=""
                                src="/searchicon.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-end text-5xl font-caption-normalbold">
                        <a
                          className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[118px] cursor-pointer"
                          onClick={onCONTACTTextClick}
                        >
                          CONTACT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div
                  className="flex flex-row items-start justify-start pt-[47.7px] pb-[3.7px] pl-[84px] pr-8 box-border relative gap-[77px] max-w-full cursor-pointer z-[2] mq800:gap-[19px] mq800:pl-[21px] mq800:box-border mq1125:flex-wrap mq1125:gap-[38px] mq1125:pl-[42px] mq1125:box-border mq450:pt-[31px] mq450:pb-5 mq450:box-border"
                  onClick={onMEGAMENUContainerClick}
                >
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/base.svg"
                  />
                  <div className="flex flex-row items-start justify-start gap-[45.4px] max-w-full mq800:flex-wrap mq800:gap-[23px]">
                    <div className="w-[137.1px] flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-1.5">
                          <div className="flex-1 relative font-medium z-[1] mq450:text-lg">
                            Category
                          </div>
                        </div>
                        <div className="self-stretch h-[245.9px] relative text-base text-gray1-200 inline-block shrink-0 z-[1]">
                          <p className="m-0">{`Coporate Shoes `}</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">Sneakers</p>
                          <p className="m-0">{` `}</p>
                          <p className="m-0">{`Sandals `}</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">Sport Shoe</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">Trainers</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[150.4px] flex flex-col items-start justify-start pt-[51.8px] pb-0 pl-0 pr-[13px] box-border text-base text-gray1-200">
                      <div className="self-stretch h-[245.9px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">{`Coporate Shoes `}</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sneakers</p>
                        <p className="m-0">{` `}</p>
                        <p className="m-0">{`Sandals `}</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sport Shoe</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Trainers</p>
                      </div>
                    </div>
                    <div className="w-[137.1px] flex flex-col items-start justify-start gap-[15.2px]">
                      <div className="relative font-medium inline-block min-w-[104px] z-[1] mq450:text-lg">
                        Category
                      </div>
                      <div className="self-stretch h-[266.2px] relative text-base text-gray1-200 inline-block shrink-0 z-[1]">
                        <p className="m-0">HOT DEAL</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sunglasses</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Belts</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Handbags</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sneakers</p>
                      </div>
                    </div>
                    <div className="w-[137.1px] flex flex-col items-start justify-start pt-[51.8px] px-0 pb-0 box-border text-base text-gray1-200">
                      <div className="self-stretch h-[266.2px] relative inline-block shrink-0 z-[1]">
                        <p className="m-0">HOT DEAL</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sunglasses</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Belts</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Handbags</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sneakers</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[13px]">
                      <div className="w-[114.9px] relative font-medium inline-block z-[1] mq450:text-lg">
                        Category
                      </div>
                      <div className="h-[239.6px] relative text-base text-gray1-200 inline-block shrink-0 z-[1]">
                        <p className="m-0">Coporate Shoes</p>
                        <p className="m-0">{` `}</p>
                        <p className="m-0">Sneakers</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Sandals</p>
                        <p className="m-0">{` `}</p>
                        <p className="m-0">Sport Shoe</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Trainers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[611.3px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <img
                className="h-[1.2px] w-[1.2px] relative object-cover z-[1]"
                alt=""
                src="/oculusriftprofile-grande@2x.png"
              />
            </div>
          </div>
        </div>
        <FrameComponent
          imageProduct="/image-product@2x.png"
          base="/base.svg"
          rectangle1Copy3="/rectangle-1-copy-3.svg"
          propBackgroundImage="unset"
          imageProduct1="/image-product1@2x.png"
          banner="/banner.svg"
          propBackgroundImage1="unset"
          imageProduct2="/image-product2@2x.png"
        />
      </div>
    </section>
  );
};

export default HeaderDropdown;
