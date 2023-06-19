import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const AddJobs = () => {
  return (
    <div className="text-center">
      <p className="py-6 lg:py-10 text-2xl lg:text-3xl font-semibold">
        What would you like to have done?
      </p>
      <form action="" className="mx-auto w-full max-w-2xl">
        <div className="relative flex items-center">
          <SearchIcon className="w-5 h-6 text-[#081D03] absolute ml-3 pointer-events-none"></SearchIcon>
          <input
            type="text"
            name="search"
            autoComplete="off"
            className="pr-3 pl-10 py-2 w-full font-semibold text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
