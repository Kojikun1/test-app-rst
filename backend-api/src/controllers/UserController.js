const User = require('../models/User');

class UserController {
    async index(req,res){

        let users = await User.find();
        
        return res.status(200).json(users);
    }
    async store(req,res){

        const { name, email, password } = req.body;

      try {
            
            let user = await User.findOne({ email });

            if(user){
                return res.status(400).json({message: "User with this email already exist"});
            }
            
            user = await User.create({name, email, password});

            user.password = undefined;

            return res.status(200).json({user, message: "Successful registered"});

      } catch (error) {
           console.log(error);
           
           return res.status(400).json({message: "Failure to create User"});
      }
    }
}

module.exports = new UserController();