import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type MobilePhoneInputType = {
  className?: string;
  goToPayment?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const MobilePhoneInput: FunctionComponent<MobilePhoneInputType> = ({
  className = "",
  propWidth,
  propPadding,
  goToPayment,
}) => {
  const mobilePhoneInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const navigate = useNavigate();

  const onButtonLargeColorClick = useCallback(() => {
    navigate("/payment-6");
  }, [navigate]);

  return (
    <div
      className={`w-[784px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
      style={mobilePhoneInputStyle}
    >
      <button
        className="cursor-pointer [border:none] pt-[9px] px-5 pb-7 bg-cornflowerblue-100 w-[338px] shadow-[0px_10px_40px_rgba(248,_161,_112,_0.2)] rounded-3xs flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-dodgerblue"
        onClick={onButtonLargeColorClick}
      >
        <div className="h-[70px] w-[338px] relative rounded-3xs bg-cornflowerblue-100 hidden max-w-full" />
        <div className="flex-1 relative text-5xl tracking-[-0.02em] font-extrabold font-nunito text-background-white text-center z-[1]">
          {goToPayment}
        </div>
      </button>
    </div>
  );
};

export default MobilePhoneInput;
