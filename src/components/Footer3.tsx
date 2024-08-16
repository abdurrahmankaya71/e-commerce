import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent3 from "./FrameComponent3";

export type Footer3Type = {
  className?: string;
};

const Footer3: FunctionComponent<Footer3Type> = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-5.7px] self-stretch bg-lightsteelblue flex flex-col items-end justify-start pt-[149.6px] pb-[54.1px] pl-[139px] pr-[148px] box-border gap-[68.1px] shrink-0 max-w-full z-[5] mt-[-680.6px] text-left text-lg text-gray1-300 font-caption-normalbold mq800:gap-[34px] mq800:pl-[69px] mq800:pr-[74px] mq800:pb-[35px] mq800:box-border mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1500px] h-[680.6px] relative bg-lightsteelblue hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-px pr-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[56.7px] max-w-full mq800:gap-7">
          <FrameComponent2
            propAlignSelf="unset"
            propWidth="273.8px"
            propPadding="0px 52px 0px 0px"
            group400="/group-400-2@2x.png"
          />
          <div className="w-[529.5px] flex flex-col items-end justify-start gap-[60.2px] max-w-full mq800:gap-[30px] mq450:gap-[15px]">
            <FrameComponent3
              propWidth="488px"
              facebook="/facebook-1.svg"
              twitter="/twitter-1.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center">
              <div className="w-[152px] flex flex-col items-start justify-start gap-[34.7px]">
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
              <div className="w-[152px] flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0 box-border">
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
          <div className="w-[284.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.5px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[90.3px] mq450:gap-[45px]">
              <div className="w-[148.1px] flex flex-col items-start justify-start gap-[19.2px]">
                <div className="relative font-medium inline-block min-w-[101px] z-[1]">
                  Contact Us
                </div>
                <div className="self-stretch relative text-sm z-[1]">
                  E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="w-[154.4px] flex flex-col items-start justify-start gap-[18.9px]">
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
      <div className="w-[1196.6px] flex flex-col items-start justify-start gap-[30.4px] max-w-full text-sm text-silver-100 font-proxima-nova mq800:gap-[15px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-0 box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[1]"
            alt=""
            src="/rectangle-1-copy-35.svg"
          />
        </div>
        <div className="w-[1171px] flex flex-row items-start justify-between shrink-0 gap-5 max-w-full mq800:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative shrink-0 z-[1]">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </div>
          </div>
          <div className="w-[212.4px] flex flex-row items-start justify-start gap-[19.8px] shrink-0 text-7xs text-background-white font-caption-normalbold">
            <img
              className="self-stretch w-[38.3px] relative max-h-full min-h-[25px] z-[1]"
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
                alt=""
                src="/shape-329.svg"
              />
              <img
                className="absolute top-[3.6px] left-[3px] w-[18px] h-[18px] z-[3]"
                alt=""
                src="/shape-329-1.svg"
              />
              <div className="absolute top-[8.35px] left-[2.88px] [transform:_rotate(7.3deg)] [transform-origin:0_0]">
                MasterCard
              </div>
            </div>
            <img
              className="self-stretch w-[38px] relative max-h-full min-h-[25px] z-[1]"
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
                <div className="absolute top-[8.5px] left-[5.6px] w-[26.3px] h-[8.7px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                    alt=""
                    src="/shape-328.svg"
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
    </div>
  );
};

export default Footer3;
