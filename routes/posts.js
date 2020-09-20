const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.use(require('../config/auth'));
router.post('/', checkAuth, postsCtrl.create);
router.get('/', checkAuth, postsCtrl.index);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
