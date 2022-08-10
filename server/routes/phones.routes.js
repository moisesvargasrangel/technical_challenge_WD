
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("");
});

router.use("/auth", authRoutes);
router.use("/publications", PublicationsRoutes);
router.use("/comments", CommentsRoutes);

module.exports = router;