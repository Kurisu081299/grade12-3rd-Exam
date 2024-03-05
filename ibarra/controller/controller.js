const model = require('../model/model');

const controller = {};

controller.getgrade12_db = (req,res) => {
    //call the model to call the grade 12 data
    model.getgrade12_db((error,grade12_db) => {
        if (error){
            console.error("error getting grade12_db:",error);
            return res.status(500).json({message:"error getting grade12_db data"});
        }
        return res.status(200).json({message:"Grade 12_db data retrieved",data:grade12_db});
});
};

controller.postgrade12_db = (req,res) =>{
    const{first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name}= req.body;
    //check if the required fields are provided
    if (!first_name || !last_name || !middle_name || !LRN || !address || !grade_level || !birth_date || !email_address || !contact_number || !father_name || !mother_name){
        return res.status(400).json({message:"Please provide first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name"});
    }
    const data = {first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name};
    //call the model to insert grade 12 data
    model.insertgrade12_db(data,(error, result) => {
        if (error){
            console.error("error inserting grade 12 data",error);
            return res.status(500).json({message:"error getting grade 12 data"});
        }
        return res.status(200).json({message:"grade 12 data inserted successfully"});
    });
};

controller.putgrade12_db = (req,res) =>{
    const{id}= req.body;// get id from the url params
    const {first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name}= req.body;
    //check if the required fields are provided
    if (!first_name || !last_name || !middle_name || !LRN || !address || !grade_level || !birth_date || !email_address || !contact_number || !father_name || !mother_name){
        return res.status(400).json({message:"Please provide first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name"});
    }
    const data = {first_name,last_name,middle_name,LRN,address,grade_level,birth_date,email_address,contact_number,father_name,mother_name};
    //call the model to insert grade 12 data
    model.updategrade12_db(id,data,(error, result) => {
        if (error){
            console.error("error updating grade 12 data",error);
            return res.status(500).json({message:"error updating grade 12 data"});
        }
        return res.status(200).json({message:"grade 12 data updated successfully"});
    });
};

controller.deletegrade12_db = (req,res) =>{
    const idsToDelete= req.body.id; //assuming you're passing an array of ID's in req. body 
    
    if (!idsToDelete){
        return res.status(400).json({message:"ID to delete are required in the request body"});
    }
    
    model.deletegrade12_db(idsToDelete,(error, result) => {
        if (error){
            console.error("error deleting grade 12 data",error);
            return res.status(500).json({message:"error deleting grade 12 data"});
        }
        return res.status(200).json({message:"grade 12 data deleted successfully",deletedCount: result.affectedRows});
    });
};
module.exports = controller;

