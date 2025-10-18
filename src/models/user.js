const mongoose = require('mongoose');
const validator= require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
        firstName: {
            type:String,
            required:true,
            minLength:4,
            maxLength:50,
        },
        lastName: {
            type:String, 
            minLength:4,
            maxLength:20,
        },  
        email:{
            type:String,
            required:true,
            unique: true,
           
            maxLength:30,
            lowercase:true,
            trim:true, 
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email"+ value);
                }
            }
            
        },
        password:{
            type:String,
            required:true,
            minLength:8,
           
             validate(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("Enter a strong Password"+ value);
                }
            }
        
        },
        age:{
            type:Number,
            min:18,
        },
        gender:{
            type:String,
            enum:{
                values:["male","female","others"],
                message:`{VALUE}  is not valid gender type`
            }
           
        },
        photoUrl:{
            type:String,
            default:'https://wallpaperaccess.com/full/2615131.jpg',
            validate(value){
                if(!validator.isURL(value)){
                    throw new Error("Invalid Url"+ value);
                }
            }
        },
        about:{
            type:String,
            default:"This is default about the user!",
        },
        skills:{
            type:[String],
        }
},{
    timestamps:true,
});
userSchema.methods.getJWT = async  function (){
    const user = this;
   const token = await  jwt.sign({ _id: user._id }, "DEV@TINDER@$96",{expiresIn:"7d"

   });
   return token;

}
userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(passwordInputByUser,passwordHash );
    return passwordInputByUser;
}
module.exports= mongoose.model('User',userSchema)

