const AWS = require('aws-sdk')

const s3 = new AWS.S3({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
	},
})

module.exports = s3
