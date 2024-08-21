const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const username=req.headers.username;
    const password=req.headers.password;
await Admin.create({
    username,
    password
})
res.json({
    msg:"Admin created sucessfully"
})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;