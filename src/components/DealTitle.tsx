import { FunctionComponent } from "react";

export type DealTitleType = {
  className?: string;
  base?: string;
  base1?: string;
  slider?: string;
  base2?: string;
  colors?: string;
  base3?: string;
  base4?: string;
};

const DealTitle: FunctionComponent<DealTitleType> = ({
  className = "",
  base,
  base1,
  slider,
  base2,
  colors,
  base3,
  base4,
}) => {
  return (
    <div
      className={`h-[1059px] w-[270px] flex flex-col items-start justify-start pt-0 px-0 pb-[86px] box-border gap-[30px] text-left text-lg text-gray1-200 font-caption-normalbold lg:pb-14 lg:box-border mq450:gap-[15px] mq825:hidden mq825:pb-9 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[19px] pb-[26px] pl-5 pr-3.5 relative gap-5 font-proxima-nova mq450:pt-5 mq450:pb-5 mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src={base}
        />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-gray1-300 font-caption-normalbold">
          <div className="relative font-medium inline-block min-w-[86px] z-[1]">
            Hot Deals
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="relative inline-block min-w-[37px] z-[1]">Nike</div>
            <div className="relative text-cornflowerblue-100 inline-block min-w-[55px] z-[1]">
              Airmax
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 text-gray1-600">
            <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0.5">
              <div className="relative inline-block min-w-[11px] z-[1]">2</div>
            </div>
            <div className="relative text-cornflowerblue-100 inline-block min-w-[21px] z-[1]">
              48
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="relative inline-block min-w-[37px] z-[1]">Nike</div>
            <div className="relative inline-block min-w-[55px] z-[1]">
              Adidas
            </div>
          </div>
          <div className="w-[17.4px] flex flex-col items-start justify-start gap-5 text-gray1-600">
            <div className="relative inline-block min-w-[17px] z-[1]">14</div>
            <div className="relative inline-block min-w-[17px] z-[1]">15</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="relative inline-block min-w-[39px] z-[1]">Vans</div>
            <div className="relative inline-block min-w-[64px] z-[1]">
              All Stars
            </div>
            <div className="relative inline-block min-w-[55px] z-[1]">
              Adidas
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 text-gray1-600">
            <div className="relative inline-block min-w-[21px] z-[1]">23</div>
            <div className="flex flex-row items-start justify-start py-0 pl-3 pr-[3px]">
              <div className="relative inline-block min-w-[7px] z-[1]">1</div>
            </div>
            <div className="relative inline-block min-w-[22px] z-[1]">95</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-36 flex flex-col items-start justify-start py-[19px] pl-5 pr-[17px] box-border relative gap-5 shrink-0 text-gray1-300">
        <div className="relative font-medium inline-block min-w-[62px] z-[1]">
          PRICES
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src={base1}
          />
          <img
            className="absolute top-[104px] left-[20px] w-[236px] h-3 z-[1]"
            loading="lazy"
            alt=""
            src={slider}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-gray1-200 font-proxima-nova">
          <div className="relative inline-block min-w-[61px] z-[1]">{`Ranger: `}</div>
          <div className="relative text-gray1-300 inline-block min-w-[125px] z-[1]">
            $13.99 - $25.99
          </div>
        </div>
      </div>
      <div className="self-stretch h-[123px] flex flex-col items-start justify-start py-[19px] px-5 box-border relative shrink-0 text-gray1-300">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src={base2}
          />
          <img
            className="absolute top-[67px] left-[23px] w-[227px] h-[26px] z-[1]"
            loading="lazy"
            alt=""
            src={colors}
          />
        </div>
        <div className="relative font-medium inline-block min-w-[62px] z-[1]">
          COLOR
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[19px] pb-[26px] pl-5 pr-3.5 relative gap-[22px] font-proxima-nova">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src={base3}
        />
        <div className="relative font-medium font-caption-normalbold text-gray1-300 inline-block min-w-[62px] z-[1]">
          BRAND
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="relative inline-block min-w-[37px] z-[1]">Nike</div>
          <div className="relative text-gray1-600 inline-block min-w-[22px] z-[1]">
            99
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="relative text-cornflowerblue-100 inline-block min-w-[37px] z-[1]">
              Nike
            </div>
            <div className="relative inline-block min-w-[55px] z-[1]">
              Adidas
            </div>
            <div className="relative inline-block min-w-[68px] z-[1]">
              Siemens
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 text-gray1-600">
            <div className="relative text-cornflowerblue-100 inline-block min-w-[22px] z-[1]">
              99
            </div>
            <div className="relative inline-block min-w-[22px] z-[1]">99</div>
            <div className="relative inline-block min-w-[22px] z-[1]">99</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-14 relative shrink-0 text-sm">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src={base4}
        />
        <div className="absolute top-[19px] left-[115.2px] font-medium inline-block min-w-[40px] z-[1]">
          MORE
        </div>
      </div>
    </div>
  );
};

export default DealTitle;
