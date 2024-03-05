const dbConn = require("../Config/db.Config");

const UserModel = {};

UserModel.getGrade12Data = (callback) => {
  dbConn.query("SELECT * FROM student_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving Grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertGrade12Data = (data, callback) => {
  dbConn.query("INSERT INTO student_tb (first_name, last_name, middle_name, LRN, address, grade_level, birth_date, email_address, contact_number, father_name, mother_name) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [data.first_name, data.last_name, data.middle_name, data.LRN, data.address, data.grade_level, data.birth_date, data.email_address, data.contact_number, data.father_name, data.mother_name], (error, result) => {
    if (error) {
      console.error("Error inserting Grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updateGrade12Data = (id, data, callback) => {
  dbConn.query(
    "UPDATE student_tb SET first_name=?, last_name=?, middle_name=?, LRN=?, address=?, grade_level=?, birth_date=?, email_address=?, contact_number=?, father_name=?, mother_name=? WHERE id=?",
    [data.first_name, data.last_name, data.middle_name, data.LRN, data.address, data.grade_level, data.birth_date, data.email_address, data.contact_number, data.father_name, data.mother_name, id],
    (error, result) => {
      if (error) {
        console.error("Error updating Grade 12 data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

UserModel.deleteGrade12Data = (idsToDelete, callback) => {
  const query = "DELETE FROM student_tb WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting Grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = UserModel;
