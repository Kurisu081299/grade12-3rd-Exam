const userModel = require('../model/userModel');

const userController = {};

userController.getGrade11Data = (req, res) => {
  // Call the model to get grade 11 data
  userModel.getGrade11Data((error, grade11Data) => {
    if (error) {
      console.error("Error getting grade 11 data: ", error);
      return res.status(500).json({ message: "Error getting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data retrieved", data: grade11Data });
  });
};

userController.postGrade11Data = (req, res) => {
  const { name, age, address } = req.body;

  // Check if required fields are provided
  if (!name || !age || !address) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, age, address };

  // Call the model to insert grade 11 data
  userModel.insertGrade11Data(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data inserted successfully" });
  });
};

userController.putGrade11Data = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, age, address } = req.body;

  // Check if required fields are provided
  if (!name || !age || !address) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, age, address };

  // Call the model to update grade 11 data
  userModel.updateGrade11Data(id, data, (error, result) => {
    if (error) {
      console.error("Error updating grade 11 data: ", error);
      return res.status(500).json({ message: "Error updating grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data updated successfully" });
  });
};

// Delete Grade 11 Data
userController.deleteGrade11Data = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteGrade11Data(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting grade 11 data: ", error);
      return res.status(500).json({ message: "Error deleting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
