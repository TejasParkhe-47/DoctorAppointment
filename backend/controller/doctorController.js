import doctorModel from "../models/doctorModel.js";




const changeavail = async(req,res)=>{

    try{
        const {docId} = req.body;

        const docdata = await doctorModel.find({docId});
        await doctorModel.findByIdAndUpdate(docId,{available: !docdata.available})
        res.json({success:true,message:"availability changed"})

    }
    catch(error){
        console.log(error)
        res.json({successs:false,message:error.message})
    }

   


}


const doclist = async (req,res)=>{
    try{
        const doctors = await doctorModel.find({}).select(['-password','-email']);
        res.json({success:true,doctors})
    }
    catch(error){

        console.log(error)
        res.json({successs:false,message:"error in doccontroller"})

    }  
}

export  {changeavail,doclist}