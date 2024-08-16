import { FunctionComponent } from "react";
import HeaderDropdown from "../components/HeaderDropdown";
import FrameComponent7 from "../components/FrameComponent7";
import PromotionBanner from "../components/PromotionBanner";
import FrameComponent8 from "../components/FrameComponent8";
import SearchBarContainer from "../components/SearchBarContainer";
import Footer2 from "../components/Footer2";
import Footer3 from "../components/Footer3";

const HomePageDropdown: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[9.7px] px-0 pb-0 box-border gap-[63.7px] leading-[normal] tracking-[normal] mq800:gap-8 mq450:gap-4">
      <HeaderDropdown />
      <section className="w-[1918.5px] !m-[0] absolute top-[165.3px] left-[-208.5px] flex flex-row items-start justify-start text-left text-45xl text-background-white font-caption-normalbold">
        <img
          className="h-[653.7px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
          alt=""
          src="/promotion-image@2x.png"
        />
        <h1 className="!m-[0] h-[228.5px] w-[573.2px] absolute bottom-[166.5px] left-[309.5px] text-inherit tracking-[0.5px] leading-[150%] font-bold font-[inherit] inline-block z-[1] mq800:text-32xl mq800:leading-[77px] mq450:text-19xl mq450:leading-[58px]">
          <p className="m-0">Super Flash Sale</p>
          <p className="m-0">50% Off</p>
        </h1>
      </section>
      <img
        className="w-[1920px] relative max-h-full hidden max-w-full z-[2]"
        alt=""
        src="/rectangle-1-copy-19.svg"
      />
      <FrameComponent7 />
      <PromotionBanner />
      <FrameComponent8 />
      <SearchBarContainer />
      <footer className="self-stretch flex flex-col items-start justify-start max-w-full">
        <Footer2 />
        <Footer3 />
      </footer>
    </div>
  );
};

export default HomePageDropdown;
