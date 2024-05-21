console.log("win")
const Post = require('../models/Post')

module.exports = (req, res) => {
    Post.create(req.body).then(() => {
        console.log("Post successfully!")
        res.redirect('/activity')
    }).catch((error) => {
        console.log(error.errors)

        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
        }
    })
}