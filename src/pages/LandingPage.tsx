import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import ImageBanner from "../components/ImageBanner";
import BestSellerTitle from "../components/BestSellerTitle";
import ImageRating from "../components/ImageRating";
import RunningSneakersDescription from "../components/RunningSneakersDescription";
import AuthorLogoTwo from "../components/AuthorLogoTwo";
import Footer1 from "../components/Footer1";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0 box-border gap-[90.8px] leading-[normal] tracking-[normal] text-left text-36xl text-background-white font-caption-normalbold mq800:gap-[45px] mq450:gap-[23px]">
      <img
        className="w-[1918.5px] h-[653.7px] absolute !m-[0] top-[165.3px] right-[-210px] rounded-8xs object-cover"
        alt=""
        src="/promotion-image@2x.png"
      />
      <section className="w-[1920px] !m-[0] absolute top-[2250px] left-[-210px] flex flex-row items-start justify-start">
        <img
          className="h-[600px] flex-1 relative max-w-full overflow-hidden"
          alt=""
          src="/rectangle-1-copy-10.svg"
        />
        <div className="h-[599.6px] w-[794.6px] absolute !m-[0] top-[-93px] right-[226.2px]">
          <img
            className="absolute top-[0px] left-[125.8px] w-[1.2px] h-[1.2px] object-cover"
            alt=""
            src="/pic@2x.png"
          />
          <img
            className="absolute top-[0.7px] left-[0px] w-full h-full object-contain z-[2]"
            alt=""
            src="/shoesshoepngtransparentshoeimagespluspng17-1@2x.png"
          />
        </div>
      </section>
      <FrameComponent6 />
      <section className="w-[1458px] flex flex-row items-start justify-center pt-0 px-5 pb-[218.7px] box-border relative max-w-full text-left text-45xl text-background-white font-caption-normalbold mq800:pb-[92px] mq800:box-border mq1125:pb-[142px] mq1125:box-border">
        <div className="w-[1257.1px] flex flex-col items-start justify-start gap-[43.5px] max-w-full mq800:gap-[22px]">
          <h1 className="m-0 w-[573.2px] h-[228.5px] relative text-inherit tracking-[0.5px] leading-[150%] font-bold font-[inherit] inline-block shrink-0 max-w-full z-[1] mq800:text-32xl mq800:leading-[77px] mq450:text-19xl mq450:leading-[58px]">
            <p className="m-0">Super Flash Sale</p>
            <p className="m-0">50% Off</p>
          </h1>
          <ImageBanner />
          <BestSellerTitle />
        </div>
        <ImageRating />
      </section>
      <section className="w-[1468.8px] flex flex-row items-start justify-center pt-0 px-5 pb-[249.9px] box-border max-w-full text-left text-lg text-neutral-dark font-caption-normalbold">
        <div className="w-[1220.6px] flex flex-row flex-wrap items-end justify-between gap-5 max-w-full mq1125:justify-center">
          <div className="w-[224.5px] flex flex-col items-start justify-end pt-0 pb-[5.2px] pl-0 pr-[5px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27.5px]">
              <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
                Nike Air Max 270 React
              </b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
                <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
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
          <div className="w-[227.5px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border gap-[27.5px]">
            <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
              Nike Air Max 270 React
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
              <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
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
          <div className="w-[219.3px] flex flex-col items-start justify-start gap-[27.5px]">
            <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
              Nike Air Max 270 React
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] text-primary-blue">
              <div className="flex-1 flex flex-row items-start justify-start gap-[12.2px]">
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
          <div className="w-[219.3px] flex flex-col items-start justify-start gap-[27.5px]">
            <b className="relative tracking-[0.5px] leading-[150%] z-[1]">
              Nike Air Max 270 React
            </b>
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
      </section>
      <RunningSneakersDescription />
      <img
        className="ml-[-210.1px] mb-[71px] w-[1920px] relative max-h-full max-w-[128%] shrink-0 z-[1]"
        alt=""
        src="/rectangle-1-copy-19.svg"
      />
      <div className="w-[806.1px] flex flex-row items-start justify-center pt-0 px-5 pb-[169.2px] box-border max-w-full mq450:pb-[110px] mq450:box-border">
        <div className="flex flex-col items-start justify-start gap-[23.3px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq800:text-25xl mq450:text-14xl">
              <p className="m-0">Adidas Men Running</p>
              <p className="m-0">Sneakers</p>
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12.1px] text-5xl">
            <div className="relative z-[1] mq450:text-lgi">
              Performance and design. Taken right to the edge.
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[3px] text-xl">
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="relative font-semibold inline-block min-w-[111px] z-[1] mq450:text-base">
                  SHOP NOW
                </div>
                <img
                  className="w-[75px] h-[3px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-14-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthorLogoTwo />
      <Footer1 />
    </div>
  );
};

export default LandingPage;
