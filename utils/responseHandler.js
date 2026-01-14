const response = (res,statusCode,messge,data=null)=>{
    if(!res){
        console.log("response object is null");
        return;
    }

    const responseObject = {
        status :  statusCode < 400 ? "success" : "error",
        message,
        data
    }
    
    return res.status(statusCode).json(responseObject)

}

module.exports = response;