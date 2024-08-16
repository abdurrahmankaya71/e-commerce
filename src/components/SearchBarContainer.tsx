import { FunctionComponent } from "react";
import SEARCH from "./SEARCH";

export type SearchBarContainerType = {
  className?: string;
};

const SearchBarContainer: FunctionComponent<SearchBarContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1473.5px] flex flex-row items-start justify-center pt-0 px-5 pb-[31.7px] box-border max-w-full ${className}`}
    >
      <SEARCH
        propWidth="635.5px"
        roundedRectangle3="/rounded-rectangle-3.svg"
        propRight="0.5px"
        roundedRectangle3Copy="/rounded-rectangle-3-copy.svg"
      />
    </section>
  );
};

export default SearchBarContainer;
