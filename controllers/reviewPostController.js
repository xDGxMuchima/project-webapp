console.log("win review")
const Review = require('../models/Review')

module.exports = (req, res) => {
    Review.create(req.body).then(() => {
        console.log("Review successfully!")
        res.redirect('/community')
    }).catch((error) => {
        console.log(error.errors)

        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/login')
        }
    })
}