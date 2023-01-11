const jwt  = require("jsonwebtoken");

exports.auth = async (req, res,next) => {

    try {

        const token = req.get("Authorization");
        
        if(token){
            const check  = await jwt.verify(token.split(" ")[1],"msg");
            req.email = check.email;
            next();
        }
        else{
            return res.json({
                "msg":'Invalid Token'
            })
        }

    } catch (error) {
        
        console.log(error);

        return res.json({
            "msg":'internal server error'
        })
    }
    
}