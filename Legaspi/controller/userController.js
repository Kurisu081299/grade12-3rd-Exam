const userModel = require('../model/userModel');

const userController = {};

userController.getGrade12Data = (req, res) => {
  // Call the model to get Grade 12 data
  userModel.getGrade12Data((error, Grade12Data) => {
    if (error) {
      console.error("Error getting Grade 12 data: ", error);
      return res.status(500).json({ message: "Error getting Grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: Grade12Data });
  });
};

userController.postGrade12Data = (req, res) => {
  const { first_name, last_name, middle_name, LRN, address, grade_level, birth_date, email_address, contact_number, father_name, mother_name } = req.body;

  // Check if required fields are provided
  if (!first_name || !last_name || !middle_name || !LRN || !address || !grade_level || !birth_date || !email_address || !contact_number || !father_name || !mother_name) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { first_name, last_name, middle_name, LRN, address, grade_level, birth_date, email_address, contact_number, father_name, mother_name };

  // Call the model to insert Grade 12 data
  userModel.insertGrade12Data(data, (error, result) => {
    if (error) {
      console.error("Error inserting Grade 12 data: ", error);
      return res.status(500).json({ message: "Error inserting Grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data inserted successfully" });
  });
};

userController.putGrade12Data = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { first_name, last_name, middle_name, LRN, address, grade_level, birth_date, email_address, contact_number, father_name, mother_name } = req.body;

  // Check if required fields are provided
  if (!first_name || !last_name || !middle_name || !LRN || !address || !grade_level || !birth_date || !email_address || !contact_number || !father_name || !mother_name) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { first_name, last_name, middle_name, LRN, address, grade_level, birth_date, email_address, contact_number, father_name, mother_name };

  // Call the model to update Grade 12 data
  userModel.updateGrade12Data(id, data, (error, result) => {
    if (error) {
      console.error("Error updating Grade 12 data: ", error);
      return res.status(500).json({ message: "Error updating Grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data updated successfully" });
  });
};

// Delete Grade 12 Data
userController.deleteGrade12Data = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteGrade12Data(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting Grade 12 data: ", error);
      return res.status(500).json({ message: "Error deleting Grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
