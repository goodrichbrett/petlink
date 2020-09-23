const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.use(require('../config/auth'));
router.post('/:id', checkAuth, postsCtrl.create);
router.post('/comments', checkAuth, postsCtrl.createComment);
router.get('/', checkAuth, postsCtrl.index);
router.get('/archive', checkAuth, postsCtrl.getArchived);
router.get('/followedPets', checkAuth, postsCtrl.getApplicablePosts);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
