const Lead = require("../models/Lead")

const createLead = async (req, res)=>{
    try{
        const {name, email, budget, message}= req.body;
        const lead = await Lead.create({
            name,
            email,
            budget,
            message,
        });
        res.status(201).json(lead);
    }catch(error){
        res.status(500).json({
            message: error.message,
        })
    }
}
const getlead = async (req, res)=>{
    try{
        const leads = await Lead.find().sort({ createAt: -1 })

        res.status(200).json(leads);
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
};

const updateLeadStatus = async(req, res)=>{
  try{
    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );
    if(!lead){
        return res.status(404).json({message: "Lead not found"});
    }
    res.status(200).json(lead);
  }catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
}

const deleteLead = async (req, res)=>{
    try{
        const lead = await lead.findByIdAndDelete(req.param.id);
        if(!lead){
            return res.status(404).json({
                message: "Lead not found"
            })
        }
        res.status(200).json({
            message: "Lead deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            message: error.message,
        })
    }
}
module.exports = {createLead, getlead,updateLeadStatus, deleteLead}