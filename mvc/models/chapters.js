const mongoose = require("mongoose")

const QuestionSchema  = new mongoose.Schema({
    id: String,
    question: {
        type: String,
        required: true
    },
    possibleAnswers: [String],
    acceptedAnswer: {
        type: String,
        required: true
    }
})

const chapterSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    questions: [QuestionSchema]
})




mongoose.model("Chapter", chapterSchema)
mongoose.model("Question", QuestionSchema)