const { books } = require("../database/connection")

exports.fetchBooks=async (req,res)=>{
//Logic for reading book
    const datas=await books.findAll()
    res.json({
        message:"Books fetched successfully.",
        datas
    })
}

exports.addBook=async (req,res)=>{
//logic for adding book
    const {bookName,bookPrice,bookAuthor,bookGenre}=req.body
    await books.create(
        {
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        }
    )
    res.json({
        message:"Book added successfully."
    })
}

exports.deleteBook=(req,res)=>{
//logic for removing a book
    res.json({
        message:"Book deleted successfully"
    })
}

exports.updateBook=(req,res)=>{
    //logic to update book
    res.json({
        message:"Book updated successfully"
    })
}
exports.fetchSingleBook=async (req,res)=>{
    const id = req.params.id

    const datas = await books.findByPk(id)
    res.json({
        message:"Book fetched successfully",
        datas
    })
}
