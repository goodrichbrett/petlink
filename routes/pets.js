const router = require('express').Router();
const petsCtrl = require('../controllers/pets');
const upload = require('../src/services/upload')
const singleUpload = upload.single('image')

router.use(require('../config/auth'));
router.get('/', checkAuth, petsCtrl.index);
router.get('/getAllPets', checkAuth, petsCtrl.getAllPets);
router.get('/following', checkAuth, petsCtrl.getFollowedPets);
router.get('/search', checkAuth, petsCtrl.search);
router.get('/:id', checkAuth, petsCtrl.getOne);
router.post('/', checkAuth, petsCtrl.create);
router.put('/:id', checkAuth, petsCtrl.update);
router.delete('/:id', checkAuth, petsCtrl.delete);

router.post('/upload', checkAuth, function(req, res) {
	singleUpload(req, res, (err) => {
		if (err) {
			return res.status(422).send({
				errors: [{
					title: 'Image Upload Error',
					detail: err.message
				}]
			});
		}
		return res.json({'imageUrl': req.file.location})
	})
})

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
