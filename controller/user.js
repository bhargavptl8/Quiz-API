const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../model/user');



exports.SignUp = async (req, res) => {

    try {

        let { firstName, lastName, favoriteLanguage, profession, userName, email, password } = req.body

        if (userName) {
            let userFind = await User.findOne({ userName })

            if (userFind) {
                throw new Error('UserName Already Exited! Change Your UserName')
            }
        }

        if (email) {
            let userFind = await User.findOne({ email })

            if (userFind) {
                throw new Error('Email-ID Already Exited! Change Your Email-ID')
            }
        }

        password = await bcrypt.hash(password, 10)

        let userCreate = await User.create({ firstName, lastName, favoriteLanguage, profession, userName, email, password })

        console.log(userCreate);

        let token = jwt.sign({ id: userCreate._id }, 'userSignUp');

        res.status(201).json({
            status: 'Success',
            message: 'User Create SuccessFully',
            data: userCreate,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.Login = async (req, res) => {

    try {

        let tokenCheck = req.headers.authorization

        if (!tokenCheck) {
            throw new Error('Please Attach Token')
        }

        let decoded = jwt.verify(tokenCheck, 'userSignUp')

        console.log(decoded)

        let { userName, email, password } = req.body

        let userFind = {}

        if (email) {
             userFind = await User.findOne({ email })
        }

        if (userName) {
             userFind = await User.findOne({ userName })
        }

        if(userName && email)
            {
             userFind = await User.findOne({ userName , email })
            }

        if (!userFind) {
            throw new Error('Please Check UserName or Email-ID')
        }

        passwordCompare = await bcrypt.compare(password, userFind.password)

        if (!passwordCompare) {
            throw new Error('Invalid Password')
        }

        let token = jwt.sign({ id: userFind._id }, 'userLogin');

        res.status(200).json({
            status: 'Success',
            messatokenCheckge: 'User Login SuccessFully',
            data: userFind,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
