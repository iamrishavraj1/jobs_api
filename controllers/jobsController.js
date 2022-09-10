const getAllJobs = (req, res) => {
  res.json({ TASK: "GET ALL JOBS" });
};
const getJob = (req, res) => {
  res.json({ TASK: "GET SINGLE JOBS" });
};

const createJob = (req, res) => {
  res.json({ TASK: "CREATE JOBS" });
};

const updateJob = (req, res) => {
  res.json({ TASK: "UPDATE JOB" });
};

const deleteJob = (req, res) => {
  res.json({ TASK: "DELETE JOB" });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
