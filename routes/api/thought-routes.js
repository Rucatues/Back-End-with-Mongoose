const router = require('express').Router();

const { getAllThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');


// chaining functions with the same routes
router.route("/").get(getAllThoughts).post(createNewThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);



module.exports = router; 