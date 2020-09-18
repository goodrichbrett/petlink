const router = require('express').Router();
const petsCtrl = require('../controllers/pets');

router.use(require('../config/auth'));
router.post('/', checkAuth, petsCtrl.create);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
