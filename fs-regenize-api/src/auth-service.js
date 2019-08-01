const User = require('./user-model');


module.exports = class AuthService {
    constructor() {}
    async hashPassword(password){
      var salt = bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    }
    getUserByID(userId) {
      return new Promise((resolve, reject) => {
        User.getUserById(userId, (err, res)=>{
          if(err) reject(err);
          let dbUser = res.filter(dbUser=>{
            return dbUser.CUSTOMER_ID == userId;
          })
        })
        if(dbUser){
          resolve(dbUser)
        }else{
          reject("no users found");
        }
       
      });
    }
    register(user) {
    
      return new Promise((resolve, reject) => {
  
        
          User.findAllUsers((err, dbUsers) =>{
            if(err) reject(err);
            let dbUser = dbUsers.filter(dbUser =>{
              if (dbUser.email == user.email){
                reject("This email address has already been used");
              }
            });
         
          
          const userObj = {
            EMAIL: user.EMAIL,
            NAME: user.NAME,
            DOB: user.DOB,
            ADDRESS: user.ADDRESS,
            CITY: user.CITY,
            POSTAL_CODE: user.POSTAL_CODE,
            SUBURB: user.SUBURB,
            CONTACT_NUMBER: user.CONTACT_NUMBER,
            P_AVAILABLE: user.P_AVAILABLE,
            P_USED: user.P_USED,
            CARBON_EMISSION: user.CARBON_EMISSION,
            PASSWORD: user.PASSWORD,
            CUSTOMER_CODE: user.CUSTOMER_CODE,
            SIGNUP_DATE: user.SIGNUP_DATE,
            APARTMENT_NAME: user.APARTMENT_NAME,
            UNIT_NUMBER: user.UNIT_NUMBER,
            COLLECTOR_ID: user.COLLECTOR_ID,
            COLL_DATE: user.COLL_DATE,
            CUSTOMER_ID: user.CUSTOMER_ID
          };
  
  
          const newUser = new User(userObj);
          
          
          User.createUser(newUser, (err, res) =>{
            if (err) reject(err);
            resolve(res);
          });
        });
  
      });
    
    }
  
    login(user) {
      return new Promise((resolve, reject) => {
        var found = false;
        User.findAllUsers((err, dbUsers) =>{
          if(err) reject(err);
          let dbUser = dbUsers.filter(dbUser =>{
            return dbUser.EMAIL == user.EMAIL;
          });

          if(dbUser.length){
            if(dbUser[0].PASSWORD != user.PASSWORD){
              reject("Incorrect password");
            } 
            else {
              resolve(dbUser[0]);
            }
          }else{
            reject("User not found");
          }
        });
        
      });
    }
    async getJwtToken(user, rememberUser){
        let jwtObject = {};
  
        jwtObject.id = user.id;
        jwtObject.firstName = user.firstName;
        jwtObject.lastName = user.lastName;
    }
  };