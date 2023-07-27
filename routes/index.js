const Router = require(`express`).Router();

const postRouter = require('./reportRouter')
const userRouter = require('./userRouter')
const adminRouter = require('./speciesRouter')

Router.use('/report', postRouter)
Router.use('/users', userRouter)
Router.use('/species', adminRouter)
Router.get("/", (req, res) => res.send('ON A BOAT!'));


module.exports = Router;