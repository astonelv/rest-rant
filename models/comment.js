let commentSchema = new mongoose.Schema({
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Comment', commentSchema)
