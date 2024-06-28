const jwt = require('jsonwebtoken');

exports.sequre = async (req, res, next) => {

    try {

        let token = req.headers.authorization

        if (!token) {
            throw new Error('Please Attach Token')
        }

        let decoded = jwt.verify(token, 'userLogin')

        console.log(decoded)

        let userFind = await User.findById(decoded.id)

        if(!userFind)
            {
                throw new Error('User Not Found')
            }

        next()
        
    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}