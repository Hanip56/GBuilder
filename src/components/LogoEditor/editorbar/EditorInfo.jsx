import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const EditorInfo = () => {
  const { setBusinessName, businessName, setSlogan, slogan } =
    useStateContext();

  return (
    <div className="p-4 py-8 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <p className="text-lg">Business Name (Optional)</p>
        <input
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full rounded-md py-2 px-4 border border-black outline-none"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-lg">Slogan (Optional)</p>
        <input
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
          className="w-full rounded-md py-2 px-4 border border-black outline-none"
        />
      </div>
    </div>
  );
};

export default EditorInfo;
