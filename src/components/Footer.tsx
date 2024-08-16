import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;
  group400?: string;
  rectangle1Copy35?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMarginRight?: CSSProperties["marginRight"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propGap1?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propGap2?: CSSProperties["gap"];
  propPadding2?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propPadding3?: CSSProperties["padding"];
  propGap3?: CSSProperties["gap"];
  propGap4?: CSSProperties["gap"];
  propWidth2?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propWidth3?: CSSProperties["width"];
  propLeft3?: CSSProperties["left"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propPadding,
  propMarginRight,
  propWidth,
  propGap,
  propGap1,
  group400,
  propPadding1,
  propGap2,
  propPadding2,
  propWidth1,
  propPadding3,
  propGap3,
  propGap4,
  propWidth2,
  rectangle1Copy35,
  propLeft,
  propLeft1,
  propLeft2,
  propWidth3,
  propLeft3,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      marginRight: propMarginRight,
    };
  }, [propPadding, propMarginRight]);

  const contactContent1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const infoStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const infoLogoStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const socialContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const copyrightInfoStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap2,
    };
  }, [propGap2]);

  const contactInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding3,
    };
  }, [propWidth1, propPadding3]);

  const contactLinkStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap3,
    };
  }, [propGap3]);

  const offersTitleStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap4,
    };
  }, [propGap4]);

  const footerBottomStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const shape329IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const shape329Icon1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const masterCard1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const paymentIconTwoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const shape328IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <footer
      className={`self-stretch bg-lightsteelblue flex flex-col items-end justify-start pt-[149.6px] pb-[54.1px] pl-[139px] pr-[148px] box-border gap-[68.1px] max-w-full text-left text-lg text-gray1-300 font-caption-normalbold mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[34px] mq750:pt-[97px] mq750:pb-[35px] mq750:pl-[69px] mq750:pr-[74px] mq750:box-border ${className}`}
      style={footerStyle}
    >
      <div className="w-[1500px] h-[680.6px] relative bg-lightsteelblue hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-px pr-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[56.7px] max-w-full mq750:gap-7">
          <div
            className="w-[273.8px] flex flex-col items-start justify-start py-0 pl-0 pr-[52px] box-border gap-[83.9px] mq450:gap-[42px] mq450:pr-5 mq450:box-border"
            style={contactContent1Style}
          >
            <div
              className="self-stretch flex flex-col items-start justify-start gap-4"
              style={infoStyle}
            >
              <div
                className="flex flex-row items-start justify-start gap-[7.1px]"
                style={infoLogoStyle}
              >
                <div className="h-[39px] w-[39px] relative rounded-2xl bg-primary-blue z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
                  <img
                    className="absolute h-[44.36%] w-[44.36%] top-[27.69%] right-[27.95%] bottom-[27.95%] left-[27.69%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                    alt=""
                    src={group400}
                  />
                </div>
                <div
                  className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0"
                  style={socialContentStyle}
                >
                  <b className="relative inline-block min-w-[84px] z-[1]">
                    E-Comm
                  </b>
                </div>
              </div>
              <div className="self-stretch relative text-xs font-proxima-nova z-[1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </div>
            </div>
            <div className="w-[152px] flex flex-col items-start justify-start gap-[30px]">
              <div className="relative inline-block min-w-[99px] z-[1]">
                Infomation
              </div>
              <div className="self-stretch relative text-sm text-gray1-200 z-[1]">
                <p className="m-0">About Us</p>
                <p className="m-0">{`Infomation `}</p>
                <p className="m-0">Privacy Policy</p>
                <p className="m-0">{`Terms & Conditions`}</p>
              </div>
            </div>
          </div>
          <div className="w-[529.5px] flex flex-col items-end justify-start gap-[63.7px] max-w-full mq450:gap-4 mq750:gap-8">
            <div className="w-[498.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[198px] flex flex-col items-start justify-start gap-[21px]">
                <div className="relative font-medium inline-block min-w-[84px] z-[1]">
                  Follow Us
                </div>
                <div className="self-stretch relative text-xs font-proxima-nova z-[1]">
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </div>
                <div className="w-[64.1px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 flex flex-row items-end justify-between gap-5">
                    <img
                      className="self-stretch w-[7.6px] relative max-h-full min-h-[15px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                    />
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
                      <img
                        className="w-[14.6px] h-[11.9px] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/twitter.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center">
              <div
                className="w-[152px] flex flex-col items-start justify-start gap-[34.7px]"
                style={copyrightInfoStyle}
              >
                <div className="relative inline-block min-w-[66px] z-[1]">
                  Service
                </div>
                <div className="self-stretch relative text-sm text-gray1-200 z-[1]">
                  <p className="m-0">About Us</p>
                  <p className="m-0">{`Infomation `}</p>
                  <p className="m-0">Privacy Policy</p>
                  <p className="m-0">{`Terms & Conditions`}</p>
                </div>
              </div>
              <div
                className="w-[152px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border"
                style={contactInfoStyle}
              >
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                  <div className="relative inline-block min-w-[106px] z-[1]">
                    My Account
                  </div>
                  <div className="self-stretch relative text-sm text-gray1-200 z-[1]">
                    <p className="m-0">About Us</p>
                    <p className="m-0">{`Infomation `}</p>
                    <p className="m-0">Privacy Policy</p>
                    <p className="m-0">{`Terms & Conditions`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[284.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.5px] box-border"
            style={frameDiv4Style}
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[90.3px] mq450:gap-[45px]">
              <div
                className="w-[148.1px] flex flex-col items-start justify-start gap-[19.3px]"
                style={contactLinkStyle}
              >
                <div className="relative font-medium inline-block min-w-[101px] z-[1]">
                  Contact Us
                </div>
                <div className="self-stretch relative text-sm z-[1]">
                  E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div
                  className="w-[154.4px] flex flex-col items-start justify-start gap-[18.9px]"
                  style={offersTitleStyle}
                >
                  <div className="relative font-medium inline-block min-w-[92px] z-[1]">
                    Our Offers
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-sm text-gray1-200">
                    <div className="flex-1 relative z-[1]">
                      <p className="m-0">About Us</p>
                      <p className="m-0">{`Infomation `}</p>
                      <p className="m-0">Privacy Policy</p>
                      <p className="m-0">{`Terms & Conditions`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[1196.6px] flex flex-col items-start justify-start gap-[30.4px] max-w-full text-sm text-silver-100 font-proxima-nova mq750:gap-[15px]"
        style={footerBottomStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-0 box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={rectangle1Copy35}
          />
        </div>
        <div className="w-[1171px] flex flex-row items-start justify-between shrink-0 gap-5 max-w-full mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative z-[1]">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </div>
          </div>
          <div className="w-[212.4px] flex flex-row items-start justify-start gap-[19.8px] text-7xs text-background-white font-caption-normalbold">
            <img
              className="self-stretch w-[38.3px] relative max-h-full min-h-[25px] z-[1]"
              loading="lazy"
              alt=""
              src="/westernunion.svg"
            />
            <div className="h-[25.1px] flex-1 relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                alt=""
                src="/shape-327.svg"
              />
              <img
                className="absolute top-[3.6px] left-[16.7px] w-[18px] h-[18px] z-[2]"
                loading="lazy"
                alt=""
                src="/shape-329.svg"
                style={shape329IconStyle}
              />
              <img
                className="absolute top-[3.6px] left-[3px] w-[18px] h-[18px] z-[3]"
                alt=""
                src="/shape-329-1.svg"
                style={shape329Icon1Style}
              />
              <div
                className="absolute top-[8.35px] left-[2.88px] [transform:_rotate(7.3deg)] [transform-origin:0_0]"
                style={masterCard1Style}
              >
                MasterCard
              </div>
            </div>
            <img
              className="self-stretch w-[38px] relative max-h-full min-h-[25px] z-[1]"
              loading="lazy"
              alt=""
              src="/paypal.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="h-[25.1px] w-[38.3px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/shape-327-1.svg"
                />
                <div
                  className="absolute top-[8.5px] left-[5.6px] w-[26.3px] h-[8.7px]"
                  style={paymentIconTwoStyle}
                >
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                    alt=""
                    src="/shape-328.svg"
                    style={shape328IconStyle}
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-[5.2px] h-[4.7px] z-[3]"
                    alt=""
                    src="/shape-328-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
