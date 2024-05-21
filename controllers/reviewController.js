module.exports =  (req, res) => {
    let rev_chat = ""
    let rev_date = ""
    let rev_time = ""
    let data = req.flash('data')[0]

    res.render('review', {
        errors: req.flash('validationErrors'),
        rev_chat: rev_chat,
        rev_date: rev_date,
        rev_time: rev_time,
    })
}