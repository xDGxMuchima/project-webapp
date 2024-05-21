module.exports = (req, res) => {
    console.log(req,res)
    let email = ""
    let password = ""
    let fullname = ""
    let birthday = ""
    let address = ""
    let tel = ""
    let username = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") {
        email = data.email
        password = data.password
        fullname = data.fullname
        birthday = data.birthday
        address = data.address
        tel = data.tel
        username = data.username
    }

    res.render('register1', {
        errors: req.flash('validationErrors'),
        email: email,
        password: password,
        fullname: fullname,
        birthday: birthday,
        address: address,
        tel: tel,
        username: username
    })
}