import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  imageProduct?: string;
  base?: string;
  rectangle1Copy3?: string;
  imageProduct1?: string;
  banner?: string;
  imageProduct2?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundImage1?: CSSProperties["backgroundImage"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  imageProduct,
  base,
  rectangle1Copy3,
  propBackgroundImage,
  imageProduct1,
  banner,
  propBackgroundImage1,
  imageProduct2,
}) => {
  const masterCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const socialMediaLinksStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-center gap-[0.1px] max-w-full text-left text-xl text-neutral-dark font-caption-normalbold mq1125:flex-wrap ${className}`}
    >
      <div className="w-[417.9px] flex flex-col items-start justify-start pt-[29px] pb-[41.5px] pl-[52px] pr-[27px] box-border relative gap-[185.8px] min-w-[417.9px] max-w-full z-[1] mq800:min-w-full mq450:gap-[93px] mq450:pl-5 mq450:pt-5 mq450:pb-[27px] mq450:box-border mq1125:flex-1">
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full">
          <img
            className="h-[358.3px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src={imageProduct}
          />
          <div className="h-[300px] w-full absolute !m-[0] top-[1.3px] right-[0px] left-[0px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src={base}
            />
            <img
              className="absolute top-[33.6px] left-[103.6px] w-[0.7px] h-[0.7px] object-cover z-[2]"
              alt=""
              src="/pic-1@2x.png"
            />
          </div>
        </div>
        <b className="w-[202.2px] relative tracking-[0.5px] leading-[150%] inline-block z-[2] mq450:text-base mq450:leading-[24px]">
          FS - QUILTED MAXI CROSS BAG
        </b>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-lg text-neutral-grey mq450:flex-wrap">
          <div className="h-[15px] overflow-hidden flex flex-row items-start justify-start gap-2 z-[2]">
            <div className="mt-[-6px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[73px] whitespace-nowrap">
              $534,33
            </div>
            <b className="mt-[-6px] relative tracking-[0.5px] leading-[150%] inline-block text-primary-red min-w-[75.5px]">
              24% Off
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0 text-11xl text-primary-blue font-raleway">
            <b className="relative tracking-[0.5px] leading-[39.3px] inline-block min-w-[116px] whitespace-nowrap z-[2] mq800:text-5xl mq800:leading-[31px] mq450:text-lg mq450:leading-[24px]">
              $299,43
            </b>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-end justify-start min-w-[543px] [row-gap:20px] max-w-full mq800:flex-wrap mq800:min-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[282px] max-w-full">
          <img
            className="h-[340.9px] w-[417.9px] absolute !m-[0] top-[-3px] left-[0px] z-[1]"
            loading="lazy"
            alt=""
            src={rectangle1Copy3}
          />
          <div
            className="flex-1 rounded-8xs flex flex-col items-end justify-start pt-5 px-[35px] pb-[31px] box-border gap-[223px] bg-[url('/public/image-product1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[3] mq450:gap-[111px] mq450:pb-5 mq450:box-border"
            style={masterCardStyle}
          >
            <img
              className="w-[434.4px] h-[354px] relative rounded-8xs object-cover hidden max-w-full"
              alt=""
              src={imageProduct1}
            />
            <div className="w-[348.7px] flex flex-row items-start justify-start gap-[54.5px] max-w-full mq450:flex-wrap mq450:gap-[27px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[116px]">
                <b className="self-stretch relative tracking-[0.5px] leading-[150%] shrink-0 z-[4] mq450:text-base mq450:leading-[24px]">
                  FS - Nike Air Max 270 React...
                </b>
              </div>
              <b className="relative text-11xl tracking-[0.5px] leading-[180%] inline-block font-raleway text-primary-blue min-w-[116px] shrink-0 whitespace-nowrap z-[4] mq800:text-5xl mq800:leading-[43px] mq450:text-lg mq450:leading-[32px]">
                $299,43
              </b>
            </div>
            <div className="w-[344.6px] flex flex-row items-start justify-center max-w-full text-lg text-neutral-grey">
              <div className="h-[15px] overflow-hidden flex flex-row items-start justify-start gap-2 z-[4]">
                <div className="mt-[-6px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[73px] whitespace-nowrap">
                  $534,33
                </div>
                <b className="mt-[-6px] relative tracking-[0.5px] leading-[150%] inline-block text-primary-red min-w-[81px]">
                  24% Off
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[408.6px] flex flex-row items-start justify-start relative min-w-[408.6px] max-w-full ml-[-8.1px] mq800:flex-1 mq800:min-w-full mq800:ml-0">
          <img
            className="h-[340.9px] w-[417px] absolute !m-[0] top-[0px] left-[-8.4px] z-[1]"
            loading="lazy"
            alt=""
            src={banner}
          />
          <div
            className="flex-1 rounded-8xs flex flex-col items-start justify-start pt-8 pb-[14.5px] pl-[52px] pr-[33px] box-border gap-[161px] bg-[url('/public/image-product2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq450:gap-20 mq450:pl-5 mq450:pt-[28.1px] mq450:pb-5 mq450:box-border"
            style={socialMediaLinksStyle}
          >
            <img
              className="w-[408.6px] h-[357px] relative rounded-8xs object-cover hidden max-w-full"
              alt=""
              src={imageProduct2}
            />
            <div className="w-[171.6px] flex flex-col items-start justify-start gap-[22.4px]">
              <b className="self-stretch relative tracking-[0.5px] leading-[150%] z-[3] mq450:text-base mq450:leading-[24px]">
                FS - Nike Air Max 270 React...
              </b>
              <div className="w-[149.2px] h-[15px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[7px] z-[3] text-base text-neutral-grey">
                <div className="mt-[-4.5px] relative [text-decoration:line-through] tracking-[0.5px] leading-[150%] inline-block min-w-[66px] whitespace-nowrap shrink-0">
                  $534,33
                </div>
                <b className="mt-[-4.5px] flex-1 relative tracking-[0.5px] leading-[150%] inline-block text-primary-red shrink-0">
                  24% Off
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-px text-11xl text-primary-blue font-raleway">
              <b className="relative tracking-[0.5px] leading-[180%] inline-block min-w-[116px] whitespace-nowrap z-[3] mq800:text-5xl mq800:leading-[43px] mq450:text-lg mq450:leading-[32px]">
                $299,43
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
