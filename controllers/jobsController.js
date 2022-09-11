const getAllJobs = async (req, res) => {
  res.json({ TASK: "GET ALL JOBS" });
};
const getJob = async (req, res) => {
  res.json({ TASK: "GET SINGLE JOBS" });
};

const createJob = async (req, res) => {
  res.json({ TASK: "CREATE JOBS" });
};

const updateJob = async (req, res) => {
  res.json({ TASK: "UPDATE JOB" });
};

const deleteJob = async (req, res) => {
  res.json({ TASK: "DELETE JOB" });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
