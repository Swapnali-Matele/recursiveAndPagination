

const pagination = async (req, res)=>{
    try{

        const page = 4
        const limit = 10;
        const finalQuoteData ;
        
        if(sort){

        }else{
            finalQuoteData  = await finance_quotes.find().limit(50).skip
        }


    }catch(err){
        res.status(200).json({message:err.message})
                 
    }

}