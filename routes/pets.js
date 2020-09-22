const router = require('express').Router();
const petsCtrl = require('../controllers/pets');

router.use(require('../config/auth'));
router.get('/', checkAuth, petsCtrl.index);
router.get('/following', checkAuth, petsCtrl.getFollowedPets);
router.get('/search', checkAuth, petsCtrl.search);
router.post('/', checkAuth, petsCtrl.create);
router.put('/:id', checkAuth, petsCtrl.update);
router.delete('/:id', checkAuth, petsCtrl.delete);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
