function downloadFile(filename, callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback();
    }, 2000);
}

downloadFile("demo.pdf", () => {
    console.log("Download complete!");
});
