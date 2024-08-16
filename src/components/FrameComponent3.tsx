import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  facebook?: string;
  twitter?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  propWidth,
  facebook,
  twitter,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[462.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray1-300 font-caption-normalbold ${className}`}
      style={frameDiv1Style}
    >
      <div className="w-[198px] flex flex-col items-start justify-start gap-[19.3px]">
        <div className="relative font-medium inline-block min-w-[84px] z-[1]">
          Follow Us
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22.7px] text-xs font-proxima-nova">
          <div className="self-stretch relative z-[1]">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </div>
          <div className="w-[64.1px] flex flex-row items-start justify-start py-0 px-px box-border">
            <div className="flex-1 flex flex-row items-end justify-between gap-5">
              <img
                className="self-stretch w-[7.6px] relative max-h-full min-h-[15px] shrink-0 z-[1]"
                alt=""
                src={facebook}
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
                <img
                  className="w-[14.6px] h-[11.9px] relative shrink-0 z-[1]"
                  alt=""
                  src={twitter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
