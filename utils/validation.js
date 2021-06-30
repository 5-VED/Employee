//Input Validation File
const { check, validationResult } = require('express-validator');

exports.validate = [

    check('username')
        .trim() //trims characters (whitespace by default) at the beginning and at the end of a string
        .escape() // replaces <, >, &, ', " and / with their corresponding HTML entities
        .not() // returns a boolean value
        .isEmpty() // checks weather it is empty or not
        .withMessage('User Name cannot be Empty')
        .bail() // blocks the execution if the condition are not met
        .length({ min: 3 })
        .withMessage('Minimum 3 characters required')
        .bail(),

    check('lastname')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Lastname cannot be Empty')
        .bail()
        .length({ min: 3 })
        .withMessage('Minimun 3 Characters are required')
        .bail(),

    check('age')
        .not()
        .isEmpty('Age cannot be Empty')
        .bail()
        .isInt({ min: 0, max: 110 })
        .withMessage('Enter your age properly')
        .bail(),

    check('DOB')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Date of Birth is required")
        .bail()
        .isDate()
        .bail(),

    check('designation')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Designation cannot be empty')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Enter Proper Value')
        .bail(),

    check('email')
        .trim()
        .isEmail()
        .withMessage('Invalid Email Address')
        .bail()
        .not()
        .isEmpty()
        .withMessage('Email cannot be Empty')
        .bail(),

    check('password')
        .not()
        .isEmpty()
        .withMessage('Password cannot Empty')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Password is to short')
        .bail(),




    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });
        next()
    }
]
