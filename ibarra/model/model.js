const connection = require ("../config/config");

const model = {} ; 

model.getgrade12_db = (callback) =>{
    connection.query("SELECT * FROM student_tb", (error,result) => {
        if(error){
            console.error("error retrieving grade12_db",error);
            return callback(error, null);
        }
        return callback(null,result);
    });

};

model.insertgrade12_db = (data, callback) => {
    connection.query("INSERT INTO student_tb (first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name)VALUES(?,?,?,?,?,?,?,?,?,?,?)",[data.first_name, data.last_name, data.middle_name, data.LRN,data.address,data.grade_level,data.birth_date,data.email_address,data.contact_number,data.father_name,data.mother_name
    ],(error,result) => {
    if(error){
        console.error("error insertingg grade12_db",error);
        return callback(error, null);
    }
    return callback(null,result);
    });
};

 model.updategrade12_db = (id, data, callback) => {
    connection.query(
        "Update student_tb SET first_name=?,last_name=?,middle_name=?,LRN=?,address=?,grade_level=?,birth_date=?,email_address=?,contact_number=?,father_name=?,mother_name=? WHERE id=? ",
        [data.first_name , data.last_name, data.middle_name,data.LRN,data.address,data.grade_level,data.birth_date,data.email_address,data.contact_number,data.father_name,data.mother_name, id],
        (error, result) =>{
            if (error) {
                console.error("Error updating grade 12 data: ", error);
                return callback(error, null);
              }
        
              return callback(null, result);
            }
        );
    
 }; 
 model.deletegrade12_db = (idsToDelete, callback) => {
    const query = "DELETE FROM student_tb WHERE id = ?";
  
    connection.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting grade12_db data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  module.exports = model;
  
