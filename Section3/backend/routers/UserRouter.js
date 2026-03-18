const express = require('express');

const router = express.Router();

router.add('/', (req, res) => {
    res.send('response from add user');
});

router.get('/getall', (req, res) => {
    res.send('response from getall user');
});

router.get('/getbyid', (req, res) => {
    res.send('response from getbyid');
});

router.delete('/delete', (req, res) => {
    res.send('response from delete user');
}); 

router.put('/update', (req, res) => {
    res.send('response from update user');
});

module.exports = router;