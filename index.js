const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const port = process.env.PORT || 3000;


// MongoDB Connection
mongoose.connect('mongodb+srv://muchimajitw:Gong13138@cluster0.bdkbg2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true
})

global.loggedIn = null
global.aa = null
// Controllers
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')
const homeController = require('./controllers/homeController')
const postController = require('./controllers/postController')
const contactController = require('./controllers/contactController')
const reviewController = require('./controllers/reviewController')
const storePostController = require('./controllers/storePostController')
const reviewPostController = require('./controllers/reviewPostController')
const communityController = require('./controllers/communityController')
const activityController = require('./controllers/activityController')
const aboutUsController = require('./controllers/aboutUsController')

// Middleware
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    aa = "win"
    next()
})
app.set('view engine', 'ejs')

app.get('/', indexController)
app.get('/home', authMiddleware, homeController)
app.get('/login', redirectIfAuth, loginController)
app.get('/register', redirectIfAuth, registerController)
app.post('/user/register', redirectIfAuth, storeUserController)
app.post('/user/login', redirectIfAuth, loginUserController)
app.post('/user/post', storePostController)
app.post('/user/review', reviewPostController)
app.get('/logout', logoutController)
app.post('/post', authMiddleware, postController)
app.get('/contact', contactController)
app.post('/review', authMiddleware, reviewController)
app.get('/community', communityController)
app.get('/activity', activityController)
app.get('/aboutUs', aboutUsController)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
