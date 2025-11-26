var mongoose = require( 'mongoose' ); 
var dbURI = 'mongodb+srv://test:test@mekanbul.zkscs62.mongodb.net/mekanbul';


mongoose.connect(dbURI)
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veri tabanına ulaşıldı\n");
});
mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası\n " );
});
mongoose.connection.on('disconnected', function () {
    console.log("Mongoose bağlantısı kesildi\n");
});
process.on("SIGINT", function () {
    mongoose.connection.close(); 
        console.log("Bağlantı kapatıldı\n");
        process.exit(0);
 });
require("./venue"); 