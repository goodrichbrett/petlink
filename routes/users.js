const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const upload = require('../src/services/upload');
const singleUpload = upload.single('image');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, usersCtrl.index);
router.get('/users/:id/profile', checkAuth, usersCtrl.showProfile);
router.get('/:id', checkAuth, usersCtrl.getOne);
router.put('/:id', checkAuth, usersCtrl.update);
router.put('/pet/:id', checkAuth, usersCtrl.followPet);
router.delete('/', checkAuth, usersCtrl.delete);
router.post('/upload', checkAuth, function (req, res) {
	singleUpload(req, res, (err) => {
		if (err) {
			return res.status(422).send({
				errors: [
					{
						title: 'Image Upload Error',
						detail: err.message,
					},
				],
			});
		}
		return res.json({ imageUrl: req.file.location });
	});
});

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({
		msg: 'Not Authorized',
	});
}

module.exports = router;
