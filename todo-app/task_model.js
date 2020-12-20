// start mongoDB
var mongoose = require('mongoose');
const dbname = "Cluster0";
const dbuname = process.env.MONGOUNAME;
const dbpass = process.env.MONGOPW;
const uri = "mongodb+srv://"+ dbuname + ":"+dbpass+"@cluster0.ftei6.mongodb.net/"+dbname+"?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var Schema = mongoose.Schema;
var TaskSchema = new Schema({
    creation_date: Date,
    description: String,
    is_completed: Boolean,
    _id: Schema.Types.ObjectId
});

var TaskModel = mongoose.model('Task', TaskSchema);

module.export = TaskModel;