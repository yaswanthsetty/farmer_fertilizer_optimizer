const { spawn } = require('child_process');
const path = require('path');

exports.predictFertilizerUsage = (req, res) => {
    const inputData = req.body;

    const pythonProcess = spawn('python', [path.join(__dirname, '../ml/predict.py'), JSON.stringify(inputData)]);

    pythonProcess.stdout.on('data', (data) => {
        const prediction = data.toString();
        res.status(200).json({ prediction });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).json({ message: 'Server error' });
    });
};