const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

const port = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://muchimajitw:Gong13138@cluster0.bdkbg2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ใช้ MongoDB เก็บ session แทน
const store = new MongoStore({
    uri: MONGO_URI,
    collection: 'sessions'
});

app.use(session({
    secret: "node secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 วัน
}));

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())

// Middleware สำหรับเก็บค่า session ไว้ใน global variable
app.use("*", (req, res, next) => {
    global.loggedIn = req.session.userId || null;
    global.aa = "win";
    next();
});

app.set('view engine', 'ejs')

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

// Routes
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

// ใช้ module.exports แทน app.listen() เพื่อให้รองรับ Vercel
module.exports = app;
