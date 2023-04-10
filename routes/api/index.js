const router = require('express').Router();

// const Thoughts = require('./thought-routes');
const Users = require('./user-routes');

// router.use('/thoughts', Thoughts);
router.use('/users', Users);


module.exports = router;