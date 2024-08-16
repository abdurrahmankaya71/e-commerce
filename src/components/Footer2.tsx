import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

export type Footer2Type = {
  className?: string;
};

const Footer2: FunctionComponent<Footer2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-lightsteelblue flex flex-col items-end justify-start pt-[149.6px] pb-[54.1px] pl-[134px] pr-[154px] box-border gap-[61.6px] shrink-0 max-w-full text-left text-lg text-gray1-300 font-caption-normalbold mq800:gap-[31px] mq800:pt-[97px] mq800:pb-[35px] mq800:pl-[67px] mq800:pr-[77px] mq800:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1500px] h-[680.6px] relative bg-lightsteelblue hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq1350:flex-wrap">
          <div className="w-[221.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.1px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[79.3px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start gap-[7.1px]">
                  <div className="h-[39px] w-[39px] relative rounded-2xl bg-primary-blue z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
                    <img
                      className="absolute h-[44.36%] w-[44.36%] top-[27.69%] right-[27.95%] bottom-[27.95%] left-[27.69%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                      alt=""
                      src="/group-400-11@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <b className="relative inline-block min-w-[84px] z-[1]">
                      E-Comm
                    </b>
                  </div>
                </div>
                <div className="self-stretch relative text-xs font-proxima-nova z-[1]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[31px] pr-[38px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
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
            </div>
          </div>
          <div className="w-[831.3px] flex flex-row items-start justify-start gap-[56.7px] max-w-full mq1125:flex-wrap mq450:gap-7">
            <div className="flex-1 flex flex-col items-end justify-start gap-[69.8px] max-w-full mq800:gap-[35px]">
              <FrameComponent3
                propWidth="462.5px"
                facebook="/facebook.svg"
                twitter="/twitter.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center">
                <div className="w-[152px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[34.6px]">
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
                </div>
                <div className="w-[152px] flex flex-col items-start justify-start gap-[19px]">
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
            <div className="w-[284.2px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[284.2px] mq1125:flex-1">
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

export default Footer2;
