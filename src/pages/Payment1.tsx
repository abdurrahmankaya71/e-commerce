import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import ProductDetails from "../components/ProductDetails";
import Footer from "../components/Footer";

const Payment1: FunctionComponent = () => {
  return (
    <div className="w-full h-[2006px] relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[20.4px] px-0 pb-[740.2px] box-border gap-[46.9px] leading-[normal] tracking-[normal] mq1050:h-auto mq750:gap-[23px]">
      <FrameComponent5
        group400="/group-4002@2x.png"
        base="/base1.svg"
        divider="/divider.svg"
      />
      <ProductDetails />
      <div className="w-[137.9px] !m-[0] absolute top-[407.7px] left-[175.4px] flex flex-row items-start justify-start">
        <img
          className="h-[130px] w-[139.6px] absolute !m-[0] top-[-22.7px] left-[-20.9px]"
          alt=""
          src="/pic.svg"
        />
        <img
          className="h-[94px] flex-1 relative rounded-6xs max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/product-image@2x.png"
        />
      </div>
      <div className="w-[131.8px] !m-[0] absolute top-[613px] left-[178.4px] flex flex-row items-start justify-start">
        <img
          className="h-[130px] w-[139.6px] absolute !m-[0] bottom-[-20px] left-[-23.9px]"
          alt=""
          src="/pic.svg"
        />
        <img
          className="h-[94px] flex-1 relative rounded-6xs max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-product1@2x.png"
        />
      </div>
      <section className="w-full h-full absolute !m-[0] right-[-0.4px] bottom-[-0.1px] bg-gray1-500 z-[5]" />
      <Footer
        propPadding="149.6px 148px 54.1px 139px"
        propMarginRight="unset"
        propWidth="273.9px"
        propGap="16px"
        propGap1="7.2px"
        group400="/group-400-14@2x.png"
        propPadding1="5px 0px 0px"
        propGap2="34.6px"
        propPadding2="5.4px 0px 0px"
        propWidth1="284.1px"
        propPadding3="0px 0px 6.5px"
        propGap3="19.2px"
        propGap4="18.9px"
        propWidth2="1196.7px"
        rectangle1Copy35="/rectangle-1-copy-35.svg"
        propLeft="16.8px"
        propLeft1="3px"
        propLeft2="2.98px"
        propWidth3="26.4px"
        propLeft3="0.1px"
      />
    </div>
  );
};

export default Payment1;
