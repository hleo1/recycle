var mysqlConn = require("./database");
module.exports = class Lists{


    findUserById(userId){
        return new Promise((resolve, reject)=>{
            
            mysqlConn.query("Select * from RG_CUSTOMER where CUSTOMER_ID=?",userId.CUSTOMER_ID, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    console.log({"res":res});
                    resolve(res);
                }
            })
        })
    };

    
    
}