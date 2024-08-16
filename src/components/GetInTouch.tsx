import { FunctionComponent } from "react";

export type GetInTouchType = {
  className?: string;
};

const GetInTouch: FunctionComponent<GetInTouchType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1467.1px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-background-white font-raleway ${className}`}
    >
      <div className="w-[1252.4px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] bg-background-white flex flex-row items-end justify-start relative gap-[30px] max-w-full lg:flex-wrap">
        <div className="self-stretch w-[1252.4px] relative shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] bg-background-white hidden max-w-full z-[0]" />
        <div className="w-[646.3px] flex flex-col items-start justify-start pt-[89.3px] pb-[257.6px] pl-[332px] pr-20 box-border relative gap-[133.3px] min-w-[646.3px] max-w-full lg:flex-1 mq450:gap-[33px] mq450:pl-5 mq450:box-border mq750:gap-[67px] mq750:pt-[58px] mq750:pb-[167px] mq750:pl-[166px] mq750:pr-10 mq750:box-border mq750:min-w-full">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <h1 className="m-0 w-[156.2px] relative text-inherit font-semibold font-[inherit] inline-block z-[2] mq450:text-5xl mq1050:text-13xl">
            <p className="m-0">
              <span className="lowercase">Ge</span>t in
            </p>
            <p className="m-0">touch</p>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[30.8px] text-sm">
            <div className="w-[161.6px] flex flex-row items-start justify-start py-0 px-px box-border">
              <div className="flex-1 relative lowercase font-medium whitespace-nowrap z-[2]">
                contact@e-comm.ng
              </div>
            </div>
            <div className="w-[163.4px] relative capitalize font-medium flex items-end whitespace-nowrap z-[2]">
              +234 4556 6665 34
            </div>
            <div className="self-stretch h-[46.8px] relative capitalize font-medium flex items-end shrink-0 z-[2]">
              <span>
                <p className="m-0">20 Prince Hakerem Lekki</p>
                <p className="m-0">Phase 1, Lagos.</p>
              </span>
            </div>
          </div>
        </div>
        <div className="h-[614.6px] w-[510.1px] flex flex-col items-start justify-start min-w-[510.1px] max-w-full text-sm text-darkslategray lg:flex-1 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21.9px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16.2px] max-w-full">
              <div className="w-[93.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                <div className="flex-1 relative capitalize font-medium z-[1]">
                  Fullname
                </div>
              </div>
              <div className="self-stretch shadow-[1px_3px_3px_rgba(0,_0,_0,_0.01)] rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none bg-background-white border-cornflowerblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[23px] px-[27px] pb-[19px] max-w-full z-[1]">
                <div className="h-[73.2px] w-[510.1px] relative shadow-[1px_3px_3px_rgba(0,_0,_0,_0.01)] rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none bg-background-white border-cornflowerblue-100 border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[120.4px] [border:none] [outline:none] font-medium font-raleway text-base bg-[transparent] h-[27.8px] relative capitalize text-darkslategray text-left flex items-end p-0 z-[2]"
                  placeholder="James Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16.2px] max-w-full">
              <div className="w-[57.7px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                <div className="flex-1 relative capitalize font-medium z-[1]">
                  Email
                </div>
              </div>
              <div className="self-stretch shadow-[1px_3px_3px_rgba(0,_0,_0,_0.01)] rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none bg-background-white border-gray1-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[23px] px-[27px] pb-[19px] max-w-full z-[1]">
                <div className="h-[73.2px] w-[510.1px] relative shadow-[1px_3px_3px_rgba(0,_0,_0,_0.01)] rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none bg-background-white border-gray1-100 border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[237.9px] [border:none] [outline:none] font-medium font-raleway text-base bg-[transparent] h-[27.8px] relative lowercase text-gray1-100 text-left flex items-end whitespace-nowrap p-0 z-[2]"
                  placeholder="jamesdoe@gmail.com"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16.2px]">
              <div className="w-[89.2px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                <div className="flex-1 relative capitalize font-medium z-[1]">
                  Message
                </div>
              </div>
              <textarea
                className="border-gray1-100 border-[1px] border-solid bg-background-white h-[229.8px] w-auto [outline:none] self-stretch shadow-[1px_3px_3px_rgba(0,_0,_0,_0.01)] rounded-tl-none rounded-tr-10xs rounded-br-10xs rounded-bl-none box-border flex flex-row items-start justify-start py-[41px] px-[27px] font-raleway font-medium text-sm text-gray1-100 z-[1]"
                placeholder="Type your message"
                rows={11}
                cols={26}
              />
            </div>
          </div>
        </div>
        <img
          className="h-[718.3px] w-[718.3px] absolute !m-[0] bottom-[-24.1px] left-[-175.2px] object-cover z-[3]"
          alt=""
          src="/call-1@2x.png"
        />
      </div>
    </section>
  );
};

export default GetInTouch;
