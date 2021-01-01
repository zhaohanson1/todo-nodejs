// start mongoDB
var mongoose = require('mongoose');

const dbname = process.env.MONGO_DBNAME;
const dbuname = process.env.MONGO_UNAME;
const dbpass = process.env.MONGO_PW;
const uri = "mongodb+srv://" + dbuname + ":" + dbpass + "@cluster0.ftei6.mongodb.net/" + dbname + "?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    /* Deprecation fixes */
    useFindAndModify: false,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR: MongoDB connection error:'));
db.once('open', () => { console.log("LOG: connected to database") });

var TaskSchema = new mongoose.Schema({
    creationDate: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Task', TaskSchema);