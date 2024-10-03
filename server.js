const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Middleware to parse URL-encoded data (for parsing form fields)
app.use(express.urlencoded({ extended: true }));

// Create 'temp_uploads' directory if it doesn't exist
const tempDir = path.join(__dirname, 'temp_uploads');
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

// Set up storage with Multer to store files temporarily
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

// File upload validation
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /mp4|mov|avi|wmv|mkv/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Only video files are allowed!');
        }
    }
});

// Middleware to serve static files (like uploaded videos)
app.use('/uploads', express.static('uploads'));

// Handle file upload
app.post('/upload', upload.single('video'), (req, res) => {
    const mapName = req.body.map;
    if (!mapName) {
        // Remove the uploaded file from temp directory if map name is missing
        fs.unlink(req.file.path, () => {
            return res.status(400).json({ success: false, message: 'Map name is required' });
        });
    } else {
        const dir = path.join('uploads', mapName);
        fs.mkdirSync(dir, { recursive: true });

        const oldPath = req.file.path;
        const newPath = path.join(dir, req.file.filename);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error('Error moving file:', err);
                return res.status(500).json({ success: false, message: 'Failed to move file' });
            }
            res.json({ success: true, filename: req.file.filename });
        });
    }
});

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
