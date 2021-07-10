const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const findAllTags = await Tag.findAll(
    {include: [{ model: Product}]}
  )
  return res.json(findAllTags)
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const singleTag = await Tag.findByPk(req.params.id, {
    include: [{ model: Product}]
  })
  res.json(singleTag)
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  return res.json(deleteTag)
})

module.exports = router;
