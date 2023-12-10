const jwt = require("jsonwebtoken");

// Code to check the token is correct
const verifyToken = (req, res, next) => {
    // console.log('>>>>>>>>>>>>>>>', req);
    let authHeader = req.headers.token       
    // console.log("req.header.token===", authHeader);

    if (authHeader) {
        const token = authHeader.split(" ")[1];          
        // console.log('Separated token==', token);

        jwt.verify(token, process.env.Jwt_Key, (err, user) => {
            if (err) {
                console.log('Token Verification Error', err);
                return res.status(403).json("This token is not valid");
            }
            req.user = user;
            // console.log("User?????????", user);
            next();                                           
        });
    } else {
        return res.status(401).json({ error: "Token not found" })
    }
};


//code to check if id matches 
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, (data) => {
        // console.log('data?????',data);
        // console.log('req.user.id==', req.user.id);
        // console.log('req.params.id==', req.params.id);
        if (req.user.id === req.params.id) {
            console.log('successful');
            next()
        } else {
            console.log("Id's doesn't match");
            return res.status(403).json('You are not allowed')
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization }