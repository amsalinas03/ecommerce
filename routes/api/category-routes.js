const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const findAllCategories = await Category.findAll(
    {include: [{ model: Product}]}
  )
  return res.json(findAllCategories)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const singleCategory = await Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  })
  res.json(singleCategory)
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  Category.create(req.body)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.updateupdate(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  return res.json(deleteCategory)
});

module.exports = router;
