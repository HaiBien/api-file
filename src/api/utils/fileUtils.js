import fs from "fs";
import multipart from 'connect-multiparty';
import path from "path";
const osTempDir = require('os').tmpdir();
const tempDir = osTempDir + '/uploads';
const filesDir = path.resolve('./storage');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

function createIfNotExistFolders() {
  createFolderIfNotExist(tempDir);
  createFolderIfNotExist(filesDir);
  const filesTemplatesDir = getDirPath('templates');
  createFolderIfNotExist(filesTemplatesDir);
}

const multipartMiddleware = multipart({uploadDir: tempDir});

const checkTempFolder = (req, res, next) => {
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
    createIfNotExistFolders()
  }
  next();
};

function createFolderIfNotExist(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

export const getDirPath = (dirName, rootPath = './storage') => {
  const dirPath = path.resolve(rootPath, dirName);
  createFolderIfNotExist(dirPath);
  return dirPath;
};


export {
  multipartMiddleware,
  checkTempFolder,
};
