const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
await Admin.create({
    username,
    password
})
res.json({

    msg:"Admin created sucessfully"
})
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;

 const newCourse=await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        message:"Course has been created", courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const response = await Course.find({});
        if (!response) {
            return res.status(404).json({ message: "No courses found" });
        }
        res.json({
            courses: response
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while retrieving courses", error: error.message });
    }
});


module.exports = router;