import mongoose from "mongoose";

const adminJobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: String,
  },
  jobTitle: {
    type:String,
  },
  companyName: {
    type:String,
  },
  location: {
     type:String,
  },
  salaryRange: {
     type:String,
  },
  maxExperience:{
     type:String,
  },
  jobDescription:{
     type:String,
  },
  responsibilities: {
     type:String,
  },
  requirements: {
     type:String,
  },
  applicationDeadline: {
     type:String,
  },
  datePosted: {
     type:String,
  },
  dateUpdated:{
     type:String,
  },
  jobType: {
    partTime: Boolean,
    fullTime: Boolean,
    hybrid: Boolean,
    remote: Boolean,
    internship: Boolean,
  },
});
const AdminJobForm = mongoose.model("adminJobFormData", adminJobApplicationSchema);
export default AdminJobForm;