module.exports =  (req, res) => {
    let act_name = ""
    let act_info = ""
    let act_addr = ""
    let act_date = ""
    let act_time = ""
    let act_contact = ""
    let act_company_name = ""
    let act_moreinfo = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") {
        act_name = data.act_name
        act_info = data.act_info
        act_addr = data.act_addr
        act_date = data.act_date
        act_time = data.act_time
        act_contact = data.act_contact
        act_company_name = data.act_company_name
        act_moreinfo = data.act_moreinfo
    }

    res.render('post', {
        errors: req.flash('validationErrors'),
        act_name: act_name,
        act_info: act_info,
        act_addr: act_addr,
        act_date: act_date,
        act_time: act_time,
        act_contact: act_contact,
        act_company_name: act_company_name,
        act_moreinfo: act_moreinfo
        
    })
}