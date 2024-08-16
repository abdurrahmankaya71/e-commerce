import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type ImageBannerType = {
  className?: string;
};

const ImageBanner: FunctionComponent<ImageBannerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[20.2px] pl-1 pr-0 box-border max-w-full text-left text-xl text-neutral-dark font-caption-normalbold ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="w-[909.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-[1.2px] w-[1.2px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/oculusriftprofile-grande@2x.png"
          />
        </div>
        <FrameComponent
          imageProduct="/image-product@2x.png"
          base="/base.svg"
          rectangle1Copy3="/rectangle-1-copy-3.svg"
          imageProduct1="/image-product1@2x.png"
          banner="/banner.svg"
          imageProduct2="/image-product2@2x.png"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
