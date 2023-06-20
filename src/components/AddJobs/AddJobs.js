import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import img from "../../assets/icons/plus.png";
import JobCategory from "../JobCategory/JobCategory";
import SelectedJobs from "../SelectedJobs/SelectedJobs";

const AddJobs = () => {
  // job Category array of objects
  const jobCategories = [
    {
      title: "Architectural services",
      image: img,
    },
    {
      title: "Bathroom fitting",
      image: img,
    },
    {
      title: "Bricklaying & Repointing",
      image: img,
    },
    {
      title: "Carpentry & Joinery",
      image: img,
    },
    {
      title: "Carpets, Lino & Flooring",
      image: img,
    },
    {
      title: "Central heating",
      image: img,
    },
    {
      title: "Chimney & Fireplace",
      image: img,
    },
    {
      title: "Conservatories",
      image: img,
    },
    {
      title: "Conversions",
      image: img,
    },
    {
      title: "Damp Proofing",
      image: img,
    },
    {
      title: "Demolition & Clearance ",
      image: img,
    },
    {
      title: "Driveways & Paving",
      image: img,
    },
    {
      title: "Electrical",
      image: img,
    },
    {
      title: "Extensions",
      image: img,
    },
  ];

  // added jobs state
  const [addedJobs, setAddedJobs] = useState([]);

  //add job button event handler
  const jobsHandler = (title) => {
    if(addedJobs.length + 1 <= 5){
      if(addedJobs.includes(title)){
        alert("Item already added")
      }
      else{
        const newAddedJobs = [...addedJobs, title];
        setAddedJobs(newAddedJobs);
      }
    }
    else{
      alert('already added 5 items');
    }
  };
  // console.log('added jobs ',addedJobs);

  // remove job button event handler
  const removeJobsHandler = (job) =>{

    const newAddedJobs = addedJobs.filter((remainingJobs)=> remainingJobs !==job);
    setAddedJobs(newAddedJobs);

    console.log('job removed' , job);
  }


  return (
    <div className="text-center">
      {/* title */}
      <p className="py-6 lg:py-10 text-2xl lg:text-3xl font-semibold">
        What would you like to have done?
      </p>
      {/* search bar */}
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
      {/* job category section */}
      <div className="flex flex-wrap mt-6 mx-auto w-full">
        {jobCategories.map((category, index) => (
          <JobCategory
            key={index}
            category={category}
            jobsHandler={jobsHandler}
          ></JobCategory>
        ))}
      </div>

      {/* showing added category fake data */}
      <div>
        <h2 className="text-5xl mt-6">Added Jobs</h2>
        <div className="mb-16 flex flex-wrap mt-6 mx-auto w-full">
          {addedJobs.map((job, index) => (
            <SelectedJobs
            key={index} 
            job={job}
            removeJobsHandler={removeJobsHandler}
            ></SelectedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
