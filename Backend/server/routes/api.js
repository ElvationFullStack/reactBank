const express = require('express')
const router = express.Router()
const path = require("path");
const Transaction = require('../../model/transactionSchema');

// router.get("/", (req, res) => {
//     console.log(path.join(__dirname, "public", "index.html"))
//     //  res.sendFile(path.join(__dirname, "public", "index.html"));
//     res.send(' ok ')
// });

router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, trans) {
        if (err) {
            res.status = 404

        }
        res.send(trans)


    })

})
router.post('/transactions', function (req, res) {
    let transaction = req.body
    let newTransaction = new Transaction(transaction)
    newTransaction.save();
    res.statusCode = 201

    res.send('post works ')
})

router.delete('/transactions', function (req, res) {
    transactionId = req.body._id
    Transaction.findByIdAndDelete(transactionId, function (err, rese) {
        res.statusCode=204
        res.send("delete sucssesfuly")
    })
})

module.exports = router