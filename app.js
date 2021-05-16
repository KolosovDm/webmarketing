let express = require('express');
let app = express();

app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
app.locals.data = require('./data.json')


app.get('/', function(req, res){
	res.render('index');
	res.end;
})

let server = app.listen(4051, function () {
	console.log('listen port 4051...');
});