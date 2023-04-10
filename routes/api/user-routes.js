const router = require('express').Router();

const { getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers');


// chaining functions with the same routes
router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router; 