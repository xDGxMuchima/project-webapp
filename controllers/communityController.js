const Review = require('../models/Review');
module.exports = async (req, res) => {
    try {
        const currentDate = new Date();
        const revs = await Review.find();

        console.log(revs);

        res.render('community', { revs });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
