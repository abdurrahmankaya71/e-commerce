import { FunctionComponent } from "react";
import TopBar from "../components/TopBar";
import Deals from "../components/Deals";
import Footer from "../components/Footer";

const ProductListGrid: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[21.5px] px-0 pb-0 box-border gap-[154.8px] leading-[normal] tracking-[normal] mq450:gap-[39px] mq825:gap-[77px]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[49.5px] max-w-full mq825:gap-[25px]">
        <TopBar />
        <Deals />
      </main>
      <Footer
        propPadding="149.6px 148px 54.1px 139px"
        propMarginRight="unset"
        propWidth="273.9px"
        propGap="16px"
        propGap1="7.2px"
        group400="/group-400-12@2x.png"
        propPadding1="5px 0px 0px"
        propGap2="34.7px"
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

export default ProductListGrid;
