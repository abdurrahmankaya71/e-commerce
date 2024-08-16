import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LanguageNavType = {
  className?: string;
  group400?: string;
  divider?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const LanguageNav: FunctionComponent<LanguageNavType> = ({
  className = "",
  frameDivPadding,
  group400,
  divider,
  propGap,
}) => {
  const languageNavStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const contactContentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 pl-0 pr-[212px] box-border gap-[6.3px] max-w-full text-left text-xl text-gray1-200 font-proxima-nova mq450:flex-wrap mq450:pr-5 mq450:box-border ${className}`}
      style={languageNavStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[42.3px] min-w-[44px] mq450:flex-1">
        <div className="flex flex-row items-start justify-start gap-[5.6px]">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px] shrink-0 mq450:text-base">
            EN
          </a>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <img
              className="w-[6.7px] h-1 relative shrink-0"
              alt=""
              src="/arrow-down.svg"
            />
          </div>
        </div>
        <div className="w-11 h-11 relative rounded-2xl bg-primary-blue">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-primary-blue hidden" />
          <img
            className="absolute h-[44.55%] w-[44.55%] top-[27.73%] right-[27.73%] bottom-[27.73%] left-[27.73%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src={group400}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start relative min-w-[84px] text-gray1-300 mq450:flex-1">
        <img
          className="h-0.5 w-[1500.4px] absolute !m-[0] top-[38px] right-[-1262.1px]"
          loading="lazy"
          alt=""
          src={divider}
        />
        <div
          className="flex flex-col items-start justify-start gap-[52.1px]"
          style={contactContentStyle}
        >
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="flex flex-row items-start justify-start gap-[4.2px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] shrink-0 mq450:text-base">
                USD
              </a>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <img
                  className="w-[6.7px] h-1 relative shrink-0"
                  alt=""
                  src="/arrow-down-1.svg"
                />
              </div>
            </div>
          </div>
          <a className="[text-decoration:none] relative text-lg font-bold font-caption-normalbold text-[inherit] inline-block min-w-[84px]">
            E-Comm
          </a>
        </div>
      </div>
    </div>
  );
};

export default LanguageNav;
