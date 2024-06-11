import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setJobFormDataAction } from "../../redux/actions/adminJobApplicationAction";

const ApplicationForm = () => {
  const dispatch = useDispatch();
  const [isClick , setIsClick ] = useState('')
  const [jobFormData, setJobFormData] = useState({
    jobId: "",
    jobTitle: "",
    companyName: "",
    location: "",
    salaryRange: "",
    maxExperience: "",
    jobDescription: "", 
    responsibilities: "",
    requirements: "",
    applicationDeadline: "",
    datePosted: "",
    dateUpdated: "",
    jobType: {
      partTime: false,
      fullTime: false,
      hybrid: false,
      remote: false,
      internship: false,
    },
  });
 const navigate = useNavigate();
  const jobApplicationForm = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setJobFormData({
        ...jobFormData,
        jobType: {
          ...jobFormData.jobType,
          [id]: checked,
        },
      });
    } else {
      setJobFormData({
        ...jobFormData,
        [id]: value,
      });
    }
  };

  const jobFormSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(setJobFormDataAction(jobFormData));
      console.log(jobFormData, "one");
      navigate("/application-list");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Job Posting Management</h1>
        <form onSubmit={jobFormSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobId"
            >
              Job ID
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.jobId}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobId"
              type="text"
              placeholder="Enter Job ID"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.jobTitle}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobTitle"
              type="text"
              placeholder="Enter Job Title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.companyName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.location}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter Location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <div className="flex gap-8 flex-wrap items-center cursor-pointer">
              <div>
                <input
                  onChange={jobApplicationForm}
                  checked={jobFormData.jobType.partTime}
                  type="checkbox"
                  id="partTime"
                />{" "}
                <span>Part-time</span>
              </div>
              <div>
                <input
                  onChange={jobApplicationForm}
                  checked={jobFormData.jobType.fullTime}
                  type="checkbox"
                  id="fullTime"
                />{" "}
                <span>Full-time</span>
              </div>
              <div>
                <input
                  onChange={jobApplicationForm}
                  checked={jobFormData.jobType.hybrid}
                  type="checkbox"
                  id="hybrid"
                />{" "}
                <span>Hybrid</span>
              </div>
              <div>
                <input
                  onChange={jobApplicationForm}
                  checked={jobFormData.jobType.remote}
                  type="checkbox"
                  id="remote"
                />{" "}
                <span>Remote</span>
              </div>
              <div>
                <input
                  onChange={jobApplicationForm}
                  checked={jobFormData.jobType.internship}
                  type="checkbox"
                  id="internship"
                />{" "}
                <span>Internship</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salaryRange"
            >
              Salary Range
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.salaryRange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salaryRange"
              type="text"
              placeholder="Enter Salary Range"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salaryRange"
            >
              Experience Require{" "}
              <span className="text-gray-400 text-xs">
                (0 Experience enter is must){" "}
                <input
                  onClick={() => setIsClick("Fresher")}
                  type="radio"
                  name="exp"
                />
                fresher{" "}
                <input
                  onClick={() => setIsClick("2")}
                  type="radio"
                  name="exp"
                />{" "}
                Add Experience
              </span>
            </label>
            {isClick === "Fresher" ? (
              <div className="flex items-center gap-6">
                <input
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  id="startExperience"
                  value="fresher"
                  type="text"
                  placeholder="fresher"
                  disabled={isClick !== "1"}
                  required
                />
              </div>
            ) : (
              <div className="flex md:flex-row flex-col gap-6 items-center">
                <input
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startExperience"
                  value={0}
                  type="number"
                  placeholder="Enter Salary Range"
                  disabled={isClick !== "2"}
                />
                <span>to</span>
                <input
                  onChange={jobApplicationForm}
                  value={jobFormData.maxExperience}
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="maxExperience"
                  type="number"
                  placeholder="Enter Salary Range"
                  disabled={isClick !== "2"}
                  required
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              onChange={jobApplicationForm}
              value={jobFormData.jobDescription}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobDescription"
              rows="3"
              placeholder="Enter Job Description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="responsibilities"
            >
              Responsibilities
            </label>
            <textarea
              onChange={jobApplicationForm}
              value={jobFormData.responsibilities}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="responsibilities"
              rows="3"
              placeholder="Enter Responsibilities"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="requirements"
            >
              Requirements
            </label>
            <textarea
              onChange={jobApplicationForm}
              value={jobFormData.requirements}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requirements"
              rows="3"
              placeholder="Enter Requirements"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="applicationDeadline"
            >
              Application Deadline
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.applicationDeadline}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="applicationDeadline"
              type="date"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="datePosted"
            >
              Date Posted
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.datePosted}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="datePosted"
              type="date"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="dateUpdated"
            >
              Date Updated
            </label>
            <input
              onChange={jobApplicationForm}
              value={jobFormData.dateUpdated}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateUpdated"
              type="date"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
