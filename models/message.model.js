const mongoose = require('mongoose');
const Conversation = require('./conversation.model');

const messageSchema = mongoose.Schema({
    Conversation : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        requuired : true
    },
       receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        requuired : true
    },
    content : {
        type : String
    },
    imageOrVideo : {
        type : String,
    },
    contentType : {
        type : String,
        enum : ["image","text","video"]
    },
    reactions : [{

       user : { type : mongoose.Schema.Types.ObjectId,
        ref : "User"
       },
       emoji : {
        type : String
       }

    }],
  messageStatus : {
    type : String,
    default : "send"
  }

},{timestamps : true});

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;