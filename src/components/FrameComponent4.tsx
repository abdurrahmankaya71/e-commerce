import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent4Type = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  propWidth,
  propGap,
  propAlignSelf,
  propColor,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propGap, propAlignSelf]);

  const cONTACTStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navigate = useNavigate();

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div
      className={`w-[484.8px] flex flex-col items-end justify-start gap-4 max-w-full text-left text-xl text-gray1-200 font-proxima-nova ${className}`}
      style={frameDiv3Style}
    >
      <div className="w-[368.2px] flex flex-row items-start justify-start gap-[13.4px] max-w-full mq450:flex-wrap">
        <div className="h-[59px] flex-1 relative min-w-[122px]">
          <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start gap-[6.5px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-5 h-5 relative"
                loading="lazy"
                alt=""
                src="/profile-close-2.svg"
              />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-base">
              My profile
            </a>
          </div>
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[113.2px] max-h-full w-[75px] z-[1]"
            loading="lazy"
            alt=""
            src="/cart.svg"
          />
        </div>
        <div className="w-[166.6px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8.6px]">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5">
              <a className="[text-decoration:none] w-[53px] relative text-[inherit] inline-block mq450:text-base">
                {" "}
                Items
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-gray1-700">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px] whitespace-nowrap mq450:text-base">
                $0.00
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[21px] h-[20.9px] relative"
                loading="lazy"
                alt=""
                src="/searchicon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-5 whitespace-nowrap text-left text-5xl text-gray1-200 font-caption-normalbold mq450:flex-wrap">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[119px] mq450:text-lgi">
          SNEAKERS
        </a>
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[52px] mq450:text-lgi">
          BELT
        </a>
        <a
          className="[text-decoration:none] relative font-medium text-primary-blue inline-block min-w-[118px] cursor-pointer mq450:text-lgi"
          onClick={onCONTACTTextClick}
          style={cONTACTStyle}
        >
          CONTACT
        </a>
      </nav>
    </div>
  );
};

export default FrameComponent4;
