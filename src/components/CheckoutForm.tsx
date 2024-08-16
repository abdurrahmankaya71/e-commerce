import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type CheckoutFormType = {
  className?: string;
};

const CheckoutForm: FunctionComponent<CheckoutFormType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  return (
    <div
      className={`w-[1237.6px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-base text-gray1-700 font-caption-normalbold ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[369px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border relative gap-[118px] max-w-full mq450:flex-wrap mq450:gap-[59px] mq450:pr-5 mq450:pb-5 mq450:box-border">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/base-11.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <div className="relative inline-block min-w-[113px] z-[1]">
              Voucher code
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[60px] flex-1 relative min-w-[77px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
              alt=""
              src="/rectangle-37-1.svg"
            />
            <div className="absolute top-[18.5px] left-[21px] text-lg font-medium font-caption-normalbold text-background-white text-left inline-block min-w-[76px] z-[2]">
              Redeem
            </div>
          </button>
        </div>
        <div className="w-[377.1px] flex flex-col items-start justify-start gap-6 max-w-full text-lg text-gray1-200">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[22.5px]">
              <div className="relative inline-block min-w-[76px]">Subtotal</div>
              <div className="relative inline-block min-w-[113px]">
                Shipping fee
              </div>
              <div className="relative inline-block min-w-[73px]">Coupon</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[23px]">
              <div className="relative inline-block min-w-[46px] whitespace-nowrap">
                $998
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[9px] pr-1">
                <div className="relative inline-block min-w-[33px] whitespace-nowrap">
                  $20
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-[3px]">
                <div className="relative inline-block min-w-[25px]">No</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/divider-4.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-11xl text-gray1-300 mq450:flex-wrap">
            <h2 className="m-0 relative text-inherit font-medium font-[inherit] inline-block min-w-[92px] mq450:text-lg mq1050:text-5xl">
              TOTAL
            </h2>
            <div className="relative font-medium inline-block min-w-[60px] whitespace-nowrap mq450:text-lg mq1050:text-5xl">
              $118
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[60px] relative"
            onClick={onBtnClick}
          >
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/rectangle-37.svg"
            />
            <div className="absolute top-[16.5px] left-[140.4px] text-lg font-medium font-caption-normalbold text-background-white text-left inline-block w-[93.3px] min-w-[93.3px] z-[1]">
              Check out
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
