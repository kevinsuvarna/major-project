const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const multer = require("multer");
const path = require("path");
const PDFDocument = require("pdfkit");
const fs = require("fs");

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to allow cross-origin requests

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // uploads must be in the same directory as server.js
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  },
});

const upload = multer({ storage: storage });

// Serve the Vue.js frontend
app.use(express.static(path.join(__dirname, "client", "dist")));

// File upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

let formData = {};
const doc = new PDFDocument();
const fileName = "sample.pdf";
const filePath = path.join(__dirname, "pdfs", fileName);

app.post("/submit-form", (req, res) => {
  formData = req.body;
  console.log("Form Data Received:", formData);
  res.sendStatus(200);
});

app.get("/get-form-data", (req, res) => {
  res.json(formData);
});

// Generate PDF
app.post("/generate-pdf", (req, res) => {
  // Create a write stream for the PDF file
  const stream = fs.createWriteStream(filePath);

  // Pipe the PDF document to the write stream
  doc.pipe(stream);
  // doc.pipe(fs.createWriteStream(filePath));
  // doc.text(JSON.stringify(formData, null, 2));

  // Iterate over formData object and add data to PDF document
  for (let i = 1; i <= Object.keys(formData).length / 2; i++) {
    const subjectKey = `subjectData${i}`;
    const marksKey = `marksData${i}`;

    const subject = formData[subjectKey];
    const marks = formData[marksKey]; 

    doc.text(`"${subject}": "${marks}",`);
  }
  doc.end();

  // res.download(filePath, fileName);
  // When the stream is finished, send the file as response
  stream.on('finish', () => {
    res.download(filePath, fileName, (err) => {
        if (err) {
            console.error('Error sending PDF file:', err);
        } else {
            // Remove the file after sending it
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting PDF file:', err);
                }
            });
        }
    });
});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
