const router = require('express').Router()
const path = require('node:path')
const upload = require('./config/multer/multer.config')
const s3 = require('./config/s3/s3.config')

router.post('/', upload.single('file'), (req, res) => {
	if (!req.file) return res.send('Not file!')

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: path.join('uploads', req.file.originalname),
		Body: req.file.buffer,
		ContentType: req.file.mimetype,
	}

	s3.putObject(params, (error, data) => {
		if (error) return res.send(error)

		return res.send(data)
	})
})

module.exports = router
