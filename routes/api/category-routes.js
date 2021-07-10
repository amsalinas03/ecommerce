const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  const findAllCategories = await Category.findAll(
    {include: [{ model: Product}]}
  )
  return res.json(findAllCategories)
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const singleCategory = await Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  })
  res.json(singleCategory)
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
