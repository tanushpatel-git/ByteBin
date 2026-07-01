const execute = async (req, res) => {
    try {
        const { files } = req.body;
        console.log(files);


        return res.json({
            success: true,
            message: "Done"
        })
} catch (error) {
    return res.json({
        sucess:false,
        message:"Server Not Found"
    })
}
};

module.exports={execute};