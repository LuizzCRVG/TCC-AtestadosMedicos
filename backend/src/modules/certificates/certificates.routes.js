const express = require('express');
const router = express.Router();

//  Importa o middleware de autenticação
const { authenticate } = require('../auth/auth.middleware');

//  Importa controller (regras de negócio)
const {
  createCertificate,
  getUserCertificates
} = require('./certificates.controller');

//  Importa o upload (multer)
const { upload } = require('./certificates.service');


router.use(authenticate);

// Envia um novo atestado com arquivo
router.post(
  '/',
  upload.single('file'), // ⚠️ padrão: "file" (tem que ser igual no Postman/frontend)
  createCertificate
);

// Lista os atestados do usuário logado
router.get(
  '/',
  getUserCertificates
);

module.exports = router;