import { FunctionComponent } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import GetInTouch from "../components/GetInTouch";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const ContactUs: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-white overflow-hidden flex flex-col items-start justify-start pt-[20.4px] px-0 pb-[0.4px] box-border gap-[134.4px] leading-[normal] tracking-[normal] mq450:gap-[34px] mq750:gap-[67px]">
      <FrameComponent9 />
      <GetInTouch />
      <SearchBar />
      <Footer
        group400="/group-400-13@2x.png"
        rectangle1Copy35="/rectangle-1-copy-35.svg"
      />
    </div>
  );
};

export default ContactUs;
