const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/categories', function (req, res, next) {
  const sql = `
SELECT
child_categories.id,
child_categories.name,
child_categories.slug,
parent_categories.name as parent_name,
parent_categories.id as parent_id,
parent_categories.slug as parent_slug
FROM 
categories child_categories
LEFT JOIN
categories parent_categories ON child_categories.parent_id = parent_categories.id
  `

  db.query(sql, (err, results, fields) => {
    const cats =
      results
        .filter(category => (category.parent_id === null))
        .map(parent => {
          return {
            id: parent.id,
            slug: parent.slug,
            name: parent.name,
            child_categories: results
              .filter(child => {
                return child.parent_id === parent.id
              })
              .map(child => {
                return {
                  id: child.id,
                  slug: child.slug,
                  name: child.name,
                  child_categories: []
                }
              })
          }
        })
    res.json(cats)
  })
})

module.exports = router
