import express from 'express';
import imgUploadController from './imgUpload.controller';
import {checkTempFolder, multipartMiddleware} from '../../utils/fileUtils';

export const imgUploadRouter = express.Router();

imgUploadRouter
  .route('/hissync')
  .get(imgUploadController.downloadFileHisSync)

imgUploadRouter
  .route('/:id')
  .get(imgUploadController.findFileById)

imgUploadRouter
  .route('/')
  .post(checkTempFolder, multipartMiddleware, imgUploadController.uploadImages);

imgUploadRouter
  .route('/files')
  .post(checkTempFolder, multipartMiddleware, imgUploadController.uploadFiles);

imgUploadRouter
  .route('/files/:id')
  .get(imgUploadController.downloadFile)

