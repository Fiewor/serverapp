const express = require("express");
const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express();
const port = process.env.PORT || 3000

// view engine setup
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

//error handler
app.use((req, res, next)=>{
	// set locals, only providing error in development
	res.locals.message = error.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status||500)
	res.render('error')
})
// app.get("/", function(req, res){
// 	res.sendFile("/index.html", {root:__dirname});
// });

app.listen(port, function(){
	console.log(`Server is started on port ${port}`);
});