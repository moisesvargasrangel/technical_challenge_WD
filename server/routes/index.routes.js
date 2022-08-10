const PhoneRoutes = require("./phones.routes")

/* GET home page */
router.get("/", (req, res, next) => {
    res.json("...");
  });
  
  router.use("/auth", authRoutes);
  
  module.exports = router;