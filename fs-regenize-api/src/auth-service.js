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
            id: user.id,
            email: user.email,
            address: user.address,
            collector_id: user.collector_id,
            remali: user.remali,
            points: user.points,
            kg_recycled: user.kg_recycled,
            emissions: user.emissions,
            firstName: user.firstName,
            lastName: user.lastName,
            photo: user.photo,
            type: user.type,
            collection_date: user.collection_date,
            password: user.password,
            suburb: user.suburb,
            postal_code: user.postal_code,
            city: user.city
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
            return dbUser.email == user.email;
          });

          if(dbUser.length){
            if(dbUser[0].password != user.password){
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