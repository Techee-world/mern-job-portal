import React from 'react'
import SearchBar from './SearchBar'
import JobFilter from './JobFilter';
import VacancyJobCard from './VacancyJobCard';
import SideProfile from './SideProfile';

const JobPageIndex = () => {
  return (
    <div>
      <SearchBar />
      <div className="flex justify-between  max-w-7xl m-auto ">
        <JobFilter />
        <VacancyJobCard />
        <SideProfile />
      </div>
    </div>
  );
}

export default JobPageIndex