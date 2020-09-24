const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, usersCtrl.index);
router.get('/users/:id/profile', checkAuth, usersCtrl.showProfile);
router.get('/:id', checkAuth, usersCtrl.getOne);
router.put('/:id', checkAuth, usersCtrl.update);
router.put('/pet/:id', checkAuth, usersCtrl.followPet)
router.delete('/:id', checkAuth, usersCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
