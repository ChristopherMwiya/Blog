const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  headline:{
    type:String,
    required:true
  },
  news:{
    type:String,
    required:true
  }
},{ timestamps: true});
const News = mongoose.model('News',newsSchema);

module.exports = News;