import { FunctionComponent } from "react";

export type SearchBarType = {
  className?: string;
};

const SearchBar: FunctionComponent<SearchBarType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1489px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray1-800 font-proxima-nova ${className}`}
    >
      <div className="w-[635px] flex flex-row items-start justify-between py-0 pl-[21px] pr-0 box-border relative gap-5 max-w-full mq450:flex-wrap mq450:justify-center mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rounded-rectangle-3.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
          <div className="relative inline-block min-w-[117px] z-[1]">
            Search query...
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-16 w-[127px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
            alt=""
            src="/rounded-rectangle-3-copy.svg"
          />
          <div className="absolute top-[17px] left-[27.5px] text-xl font-semibold font-caption-normalbold text-background-white text-left inline-block min-w-[72px] z-[2] mq450:text-base">
            Search
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
