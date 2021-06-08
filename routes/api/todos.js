const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator/check")
const auth = require("../../middleware/auth")

const Todo = require("../../models/Todo")
const User = require("../../models/User")

// @route    GET api/todos
// @desc     Get all todos
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({
      user: req.user.id,
    }).sort({ reminderAt: -1, createdAt: -1 })
    res.json(todos)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route    POST api/todos
// @desc     Create a todo
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("text", "Description is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user = await User.findById(req.user.id).select("-password")

      const newTodo = new Todo({
        text: req.body.text,
        reminderAt: req.body.reminderAt,
        user: req.user.id,
      })

      const todo = await newTodo.save()
      res.json(todo)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route    PUT api/todos/:id
// @desc     Update a todo
// @access   Private
router.put(
  "/:id",
  [
    auth,
    [
      check("text", "Description is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const todo = await Todo.findById(req.params.id)

      // Check for ObjectId format and todo
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !todo) {
        return res.status(404).json({ msg: "Todo not found" })
      }

      // Check user if the todo belongs to authenticated user
      if (todo.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "User not authorized" })
      }

      // Update the todo
      if (todo) {
        todo.text = req.body.text
      }

      await todo.save()
      res.json(todo)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route    GET api/todos/:id
// @desc     Get todo by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    // Check for ObjectId format and todo besides if the todo belongs to authenticated user
    if (
      !req.params.id.match(/^[0-9a-fA-F]{24}$/) ||
      !todo ||
      todo.user.toString() !== req.user.id
    ) {
      return res.status(404).json({ msg: "Todo not found" })
    }
    res.json(todo)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route    DELETE api/todos/:id
// @desc     Delete a todo
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    // Check for ObjectId format and todo
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !todo) {
      return res.status(404).json({ msg: "Todo not found" })
    }

    // Check user if the todo belongs to authenticated user
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" })
    }

    // Mark todo as deleted
    todo.deletedAt = Date.now()

    await todo.save()

    res.json({ msg: "Todo removed" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route    PUT api/todos/complete/:id
// @desc     Mark todo as complete
// @access   Private
router.put("/complete/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    // Check for ObjectId format and todo
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !todo) {
      return res.status(404).json({ msg: "Todo not found" })
    }

    // Check user if the todo belongs to authenticated user
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" })
    }

    // Mark todo as completed
    todo.completedAt = Date.now()

    await todo.save()

    res.json(todo.completedAt)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route    PUT api/todos/incomplete/:id
// @desc     Mark todo as incomplete
// @access   Private
router.put("/incomplete/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    // Check for ObjectId format and todo
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !todo) {
      return res.status(404).json({ msg: "Todo not found" })
    }

    // Check user if the todo belongs to authenticated user
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" })
    }

    // Mark todo as incomplete
    todo.completedAt = undefined

    await todo.save()

    res.json(todo.completedAt)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router
