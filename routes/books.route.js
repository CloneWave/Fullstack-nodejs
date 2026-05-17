const { fetchBooks, addBook, updateBook, deleteBook, fetchSingleBook } = require('../controllers/books.controller');
    
const router = require('express').Router()

router.route('/books').get(fetchBooks).post(addBook)
router.route('/books/:id').delete(deleteBook).patch(updateBook).get(fetchSingleBook)

module.exports = router