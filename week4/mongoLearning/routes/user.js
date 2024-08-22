const {Router}=require('express');
const userMiddleware=require("../middleware/user");
const { User,Course  } = require('../db');
const router=Router();

router.post('/signup' ,(req,res) =>{
    const username=req.body.username;
    const password=req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })
    });

    router.get('/courses',async(req,res)=>{
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
    })

    router.post('/courses/:courseId', userMiddleware, (req, res) => {
      const courseId=req.params.courseId;
      const username=req.headers.username;

      User.updateOne({
        username:username
      },{
       
        "$push":{
        purchasedCourse:courseId
        }
      })
      res.json({
        mesage:"Purchase Complete"
      })
    });
    

    router.get('/purchasedCourses', userMiddleware, async (req, res) => {
        // Implement fetching purchased courses logic
        const user = await User.findOne({
            username: req.headers.username
        });
    
        console.log(user.purchasedCourses);
        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        });
    
        res.json({
            courses: courses
        })
    });
    
    module.exports = router