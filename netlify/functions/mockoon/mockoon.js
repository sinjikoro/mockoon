const mockoon = require('@mockoon/serverless')
const mockEnv = require('../../../api/demo.json')
const mockoonServerless = new mockoon.MockoonServerless(mockEnv)

exports.handler = mockoonServerless.netlifyHandler()