import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  group400?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propAlignSelf,
  propWidth,
  propPadding,
  group400,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[83.9px] text-left text-lg text-gray1-300 font-caption-normalbold ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-start justify-start gap-[7.1px]">
          <div className="h-[39px] w-[39px] relative rounded-2xl bg-primary-blue z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
            <img
              className="absolute h-[44.36%] w-[44.36%] top-[27.69%] right-[27.95%] bottom-[27.95%] left-[27.69%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src={group400}
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <b className="relative inline-block min-w-[84px] z-[1]">E-Comm</b>
          </div>
        </div>
        <div className="self-stretch relative text-xs font-proxima-nova z-[1]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.Since the 1500s, when an unknown printer.
        </div>
      </div>
      <div className="w-[152px] flex flex-col items-start justify-start gap-[30px]">
        <div className="relative inline-block min-w-[99px] z-[1]">
          Infomation
        </div>
        <div className="self-stretch relative text-sm text-gray1-200 z-[1]">
          <p className="m-0">About Us</p>
          <p className="m-0">{`Infomation `}</p>
          <p className="m-0">Privacy Policy</p>
          <p className="m-0">{`Terms & Conditions`}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
