const Post = require('../models/Post');

module.exports = async (req, res) => {
    try {
        const currentDate = new Date();

        // Using await to wait for the promise to resolve
        const posts = await Post.find({ act_date: { $gt: currentDate.toISOString() } });

        console.log(posts);

        // Render the 'activity.ejs' template with the retrieved posts
        res.render('activity', { posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};