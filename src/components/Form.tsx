import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FormType = {
  className?: string;
  base?: string;
  rectangle37?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const Form: FunctionComponent<FormType> = ({
  className = "",
  propMarginTop,
  base,
  rectangle37,
}) => {
  const formStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={`w-[389px] flex flex-row items-start justify-between py-0 px-5 box-border relative max-w-full gap-5 mt-[-406.8px] text-left text-base text-gray1-700 font-caption-normalbold mq450:flex-wrap ${className}`}
      style={formStyle}
    >
      <img
        className="h-full w-[calc(100%_-_20px)] absolute !m-[0] top-[0px] right-[20px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={base}
      />
      <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
        <div className="relative inline-block min-w-[113px] z-[1]">
          Voucher code
        </div>
      </div>
      <div className="h-[60px] w-[118px] relative text-lg text-background-white">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src={rectangle37}
        />
        <div className="absolute top-[18.5px] left-[21px] font-medium inline-block min-w-[76px] z-[2]">
          Redeem
        </div>
      </div>
    </div>
  );
};

export default Form;
