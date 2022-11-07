const {Pool} = require('pg')
const fs = require('fs');
const path = require('path');
const uploadDir = path.join(__dirname, "__uploads");


const pool = new Pool({
  user: 'ckan',
  host: '192.168.1.14',
  database: 'ckan',
  password: 'ckan',
  port: 5432,
})


const getAllFiles = (req, res) => {
  const {file_name, page_name, type_report} = req.query;
  let queryStr = "SELECT * FROM files WHERE is_deleted = false"
  pool.query(queryStr,
    (error, results) => {
      if (error) {
        console.log(error)
        res.status(404).json({message: "Invalid API Request"});
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getById = (req, res) => {
  const {id} = req.params;
  console.log(id)
  let queryStr = "SELECT * FROM files WHERE id = $1"
  pool.query(queryStr, [id],
    (error, results) => {
      if (error) {
        console.log(error)
        res.status(404).json({message: "Invalid API Request"});
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const delById = (req, res) => {
  const {id} = req.params;
  let queryStr = "UPDATE files SET is_deleted = true WHERE id = $1"
  pool.query(queryStr, [id],
    (error, results) => {
      if (error) {
        console.log(error)
        res.status(404).json({message: "Invalid API Request"});
      } else {
        res.status(200).json({status: 200, msg: 'ss'});
      }
    }
  );
};

const createFiles = (req, res) => {
  const {file_name, page_name, type_report} = req.body;
  const queryStr = "INSERT INTO files (file_name, page_name, type_report) values ($1, $2, $3)"
  pool.query(queryStr, [file_name, page_name, type_report],
    (error, results) => {
      if (error) {
        console.log(error)
        res.status(404).json({message: "Invalid API Request"});
      } else {
        res.status(200).json({file_name, page_name, type_report});
      }
    });
};

const uploadFile = (req, res) => {
  return new Promise((resolve, reject) => {
    const file = req.files.file;
    let file_name = `${Date.now()}_${file.name}`;
    const filePath = path.join(uploadDir, file_name);

    const f = fs.createWriteStream(filePath);
    req.pipe(f);

    f.on('end', function () {
      resolve(file_name);
    });

    f.on('error', function (err) {
      fs.unlinkSync(filePath);
    });
  })
};

module.exports = {
  getAllFiles,
  getById,
  createFiles,
  uploadFile,
  delById
};


