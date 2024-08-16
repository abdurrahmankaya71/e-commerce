import { FunctionComponent } from "react";

export type ImageRatingType = {
  className?: string;
};

const ImageRating: FunctionComponent<ImageRatingType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[817.5px] w-[1315px] absolute !m-[0] right-[64.6px] bottom-[-622.3px] text-left text-lg text-background-white font-proxima-nova ${className}`}
    >
      <img
        className="absolute top-[2.5px] left-[0px] w-full h-full"
        alt=""
        src="/items-grid.svg"
      />
      <div className="absolute top-[4px] left-[5px] rounded-8xs w-[299.5px] h-[272.5px] bg-[url('/public/image-product3@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-full h-full object-cover hidden"
          alt=""
          src="/image-product3@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-16 h-[33px]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
            loading="lazy"
            alt=""
            src="/rectangle-20.svg"
          />
          <div className="absolute top-[5px] left-[12.8px] inline-block min-w-[37px] z-[3]">
            HOT
          </div>
        </div>
      </div>
      <img
        className="absolute top-[324.6px] left-[756.9px] w-[123.6px] h-[15.1px] z-[1]"
        alt=""
        src="/rate.svg"
      />
      <img
        className="absolute top-[751.7px] left-[766px] w-[123.6px] h-[15.1px] z-[1]"
        alt=""
        src="/rate.svg"
      />
      <img
        className="absolute top-[751.7px] left-[410.9px] w-[123.6px] h-[15.1px] z-[1]"
        alt=""
        src="/rate.svg"
      />
      <img
        className="absolute top-[751.7px] left-[84.9px] w-[123.6px] h-[15.1px] z-[1]"
        loading="lazy"
        alt=""
        src="/rate.svg"
      />
      <img
        className="absolute top-[751.7px] left-[1087.9px] w-[123.6px] h-[15.1px] z-[1]"
        alt=""
        src="/rate.svg"
      />
      <img
        className="absolute top-[0px] left-[339px] rounded-8xs w-[301px] h-[276.5px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-product-1@2x.png"
      />
      <div className="absolute top-[0px] left-[674px] rounded-8xs w-[307px] h-[276.5px] bg-[url('/public/image-product4@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
        <img
          className="absolute top-[0px] left-[0px] rounded-8xs w-full h-full object-cover hidden"
          alt=""
          src="/image-product4@2x.png"
        />
        <div className="absolute top-[27.7px] left-[15.4px] w-[278px] h-[219px] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/overlay.svg"
          />
          <img
            className="absolute top-[82px] left-[144px] w-[51px] h-[51px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
          <img
            className="absolute top-[82px] left-[82px] w-[52px] h-[51px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-5.svg"
          />
          <img
            className="absolute h-[14.16%] w-[8.63%] top-[85.39%] right-[7.55%] bottom-[0.46%] left-[83.81%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute top-[4px] left-[1009.5px] rounded-8xs w-[294.5px] h-[272.5px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-product-2@2x.png"
      />
      <img
        className="absolute top-[424.5px] left-[1009.6px] rounded-8xs w-[305.4px] h-[279.1px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-product-3@2x.png"
      />
      <img
        className="absolute top-[424.5px] left-[675.5px] rounded-8xs w-[298px] h-[279.1px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/product-picture01@2x.png"
      />
      <img
        className="absolute top-[424.5px] left-[5px] rounded-lg w-[301px] h-[279.1px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/product-picture02@2x.png"
      />
      <img
        className="absolute top-[430px] left-[333.5px] rounded-lg w-[310.5px] h-[273.6px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/product-picture03@2x.png"
      />
    </div>
  );
};

export default ImageRating;
