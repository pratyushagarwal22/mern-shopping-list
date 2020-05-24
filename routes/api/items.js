// All Routes present in this.
const express = require('express');
const router = express.Router();

// Bringing in the Item Model
const Item = require('../../models/Item');

// @route GET request to /api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


// @route POST request to /api/items
// @desc Create a post
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then(item => res.json(item));
});


// @route DELETE request to /api/items
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});







module.exports = router;