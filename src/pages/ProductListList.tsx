import { FunctionComponent } from "react";
import ProductListContainer from "../components/ProductListContainer";
import HotDealsContainer from "../components/HotDealsContainer";
import Footer from "../components/Footer";

const ProductListList: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[28.3px] px-0 pb-0 box-border gap-[19.5px] leading-[normal] tracking-[normal]">
      <ProductListContainer />
      <section className="w-[1472.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <HotDealsContainer />
      </section>
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

export default ProductListList;
