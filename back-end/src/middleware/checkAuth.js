const jwt = require('jsonwebtoken');
const User = require('../model/user');

module.exports = async(req,res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];//space eken Bearer kiyna eka seperate kra gnnwa ' ' white space eken wen kra gnne 0,1 kiyla
        const decoded = jwt.verify(token,"Super_secret");//ape token ekai secrete key ekai compaire krla verify kra gnnwa 
        req.user = decoded;

        User.findOneAndDelete({_id:decoded},{lastseen: new Date()});
        next(); //next kiynne ape api ekata ynna kiyla
        const {userId} = req.user; //user kawda kiyla attched krnwa
    }catch(error){
        const details = JSON.parse(JSON.stringify(error));
        if(details.message){
            return res.status(401).json(details.message);
        }
        return res.sendStatus(401);
    }
}

// const jwt = require('jsonwebtoken');
// const User = require('../model/user');
// const cors = require('cors'); // Import cors module

// // Configure cors middleware
// const corsOptions = {
//     origin: 'http://localhost:4200', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
// };

// module.exports = async (req, res, next) => {
//     try {
//         // Apply cors middleware with options
//         cors(corsOptions)(req, res, () => {});

//         if (req.method === 'OPTIONS') {
//             return res.sendStatus(200); // Respond to preflight requests
//         }

//         const token = req.headers.authorization.split(' ')[1];
//         const decoded = jwt.verify(token, "Super_secret");
//         req.user = decoded;

//         // Update user's last seen time (example)
//         await User.findOneAndUpdate(
//             { _id: decoded.userId },
//             { lastseen: new Date() }
//         );

//         next();
//     } catch (error) {
//         console.error('Authentication Error:', error);
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// };
