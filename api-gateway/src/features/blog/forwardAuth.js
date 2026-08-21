const forwardAuth = (req, res, next) => {
    const token = req.cookies?.token;

    if (token) {
        next();
    }else{
        return res.status(400).json({
            status:400,
            message:"You are not Authorization",
        });
    }
};

module.exports = forwardAuth;
