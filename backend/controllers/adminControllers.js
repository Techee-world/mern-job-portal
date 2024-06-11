import AdminJobForm from "../modules/Admin.js";

export const adminJobApplicationForm = async (req, res) => {
  try {
   const jobData = req.body;
   const jobApplication = new AdminJobForm(jobData);
   await jobApplication.save();
   res.status(200).json({ message: "Job application saved successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error ");
  }
};

export const adminJobApplicationList = async (req, res) => {
  try {
    const listData = await jobApplication.find({});
    console.log(listData,';;;;');
    res.status(200).json(listData); // Sending the data as JSON response
  } catch (error) {
    console.error("Error fetching job applications:", error); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while fetching job applications." }); // Sending an error response
  }
};

