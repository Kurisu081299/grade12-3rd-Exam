const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getGrade11Data = (callback) => {
  dbConn.query("SELECT * FROM grade11_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertGrade11Data = (data, callback) => {
  dbConn.query("INSERT INTO grade11_tb (name, age, address) VALUES (?, ?, ?)", [data.name, data.age, data.address], (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updateGrade11Data = (id, data, callback) => {
  dbConn.query(
    "UPDATE grade11_tb SET name=?, age=?, address=? WHERE id=?",
    [data.name, data.age, data.address, id],
    (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

UserModel.deleteGrade11Data = (idsToDelete, callback) => {
  const query = "DELETE FROM grade11_tb WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = UserModel;
