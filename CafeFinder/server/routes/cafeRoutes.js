const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const Cafe = require("../models/Cafe");

router.get("/", async (req, res) => {
  const cafes = await Cafe.find();
  res.json(cafes);
});

router.post("/", authMiddleware, async (req, res) => {
  const newCafe = await Cafe.create(req.body);
  res.status(201).json(newCafe);
});

router.get("/:id", async (req, res) => {
  const cafe = await Cafe.findById(req.params.id);

  if (!cafe) {
    return res.status(404).json({
      message: "Cafe not found",
    });
  }

  res.json(cafe);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Cafe.findByIdAndDelete(req.params.id);

  res.json({
    message: "Cafe deleted successfully",
  });
});
 router.patch("/:id", authMiddleware, async (req, res) => {
  const updatedCafe = await Cafe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedCafe);
});
router.put("/:id", async (req, res) => {
  const updatedCafe = await Cafe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedCafe);
});

module.exports = router;