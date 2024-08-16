import { FunctionComponent } from "react";
import CurrencyRate from "../components/CurrencyRate";
import ProductContent from "../components/ProductContent";
import FrameComponent10 from "../components/FrameComponent10";
import Footer from "../components/Footer";

const Product: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-end justify-start pt-[31.7px] px-0 pb-[0.4px] box-border gap-[42.3px] leading-[normal] tracking-[normal] mq825:gap-[21px]">
      <CurrencyRate />
      <img
        className="w-[299.5px] h-[276.5px] absolute !m-[0] right-[422.1px] bottom-[881.2px] rounded-8xs object-cover z-[1]"
        alt=""
        src="/image-product10@2x.png"
      />
      <section className="w-[1476.6px] flex flex-row items-start justify-center pt-0 px-5 pb-[43.9px] box-border max-w-full lg:pb-[29px] lg:box-border mq825:pb-5 mq825:box-border">
        <div className="w-[1304px] flex flex-col items-start justify-start gap-[77.5px] max-w-full mq450:gap-[19px] mq825:gap-[39px]">
          <ProductContent />
          <FrameComponent10 />
        </div>
      </section>
      <Footer
        propPadding="149.7px 148px 54.1px 139px"
        propMarginRight="-2.4px"
        propWidth="273.8px"
        propGap="15.9px"
        propGap1="7.1px"
        group400="/group-400-16@2x.png"
        propPadding1="4.9px 0px 0px"
        propGap2="34.7px"
        propPadding2="5.4px 0px 0px"
        propWidth1="284.2px"
        propPadding3="0px 0px 6.4px"
        propGap3="19.2px"
        propGap4="19px"
        propWidth2="1196.6px"
        rectangle1Copy35="/rectangle-1-copy-35.svg"
        propLeft="16.7px"
        propLeft1="2.9px"
        propLeft2="2.88px"
        propWidth3="26.3px"
        propLeft3="0px"
      />
    </div>
  );
};

export default Product;
