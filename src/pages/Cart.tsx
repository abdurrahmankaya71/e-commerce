import { FunctionComponent } from "react";
import Empty from "../components/Empty";
import ImageGallery from "../components/ImageGallery";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";

const Cart: FunctionComponent = () => {
  return (
    <div className="w-full h-[2006px] relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[20.4px] px-0 pb-[837px] box-border gap-[156.5px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[39px] mq750:gap-[78px]">
      <section className="self-stretch h-[1148.6px] flex flex-col items-start justify-start pt-0 pb-[400px] pl-[104px] pr-0 box-border gap-[46.9px] max-w-full shrink-0 text-left text-lg text-cornflowerblue-100 font-proxima-nova lg:h-auto lg:pl-[52px] lg:pb-[260px] lg:box-border mq450:pb-[110px] mq450:box-border mq750:gap-[23px] mq750:pl-[26px] mq750:box-border mq1050:pb-[169px] mq1050:box-border">
        <Empty />
        <div className="ml-[-104.4px] w-[1500.4px] flex flex-row flex-wrap items-start justify-start py-[14.5px] px-[546px] box-border relative gap-[2.5px] max-w-[108%] shrink-0 lg:pl-[273px] lg:pr-[273px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[136px] mq750:pr-[136px] mq750:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/base1.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1.5 gap-2">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] z-[1]">
              Home
            </a>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-sm text-silver-100">
              <div className="relative inline-block min-w-[5px] z-[1]">/</div>
            </div>
          </div>
          <div className="relative inline-block min-w-[70px] z-[1]">
            Hot Deal
          </div>
          <div className="w-[8.8px] flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-[3px] box-border text-sm text-silver-100">
            <div className="relative inline-block min-w-[5px] z-[1]">/</div>
          </div>
          <div className="relative text-gray1-200 z-[1]">
            Nike Airmax 270 React
          </div>
        </div>
        <ImageGallery />
        <CheckoutForm />
      </section>
      <Footer
        propPadding="149.6px 148px 54.1px 139px"
        propMarginRight="unset"
        propWidth="273.9px"
        propGap="16px"
        propGap1="7.2px"
        group400="/group-400-15@2x.png"
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

export default Cart;
