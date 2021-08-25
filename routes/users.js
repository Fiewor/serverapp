const express = require('express')
const router = express.Router()
const db = require('../database')

// script to fetch data from mysql table
router.get('/user-list', (req, res, next) =>{
    let sql = 'SELECT * FROM user_table'
    db.query(sql, (err, data, fields) => {
        if(err) throw err
        res.render('user-list', {title: 'User List', userData: data})
    })
})

module.exports = router