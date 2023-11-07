// import module
const fs = require("fs");

//Accept two command-line arguments: the source directory path and the target
//directory path. assuming that the arguments are absolute paths.
const args = process.argv.slice(2);
const source = args[0];
const target = args[1];

//Read the contents of the source directory using fs.readdir.
fs.readdir(source, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }
  //store the names of the files in an array.
  const fileNames = files;

  // Filter for files with specific extensions (e.g., .txt, .jpg). I will add .png
  const filteredFiles = fileNames.filter(
    (file) =>
      file.endsWith(".txt") || file.endsWith(".jpg") || file.endsWith(".png")
  );
  //print the names of the files in the source directory.
  console.log("Files in directory:", fileNames, "\n");
  console.log("Filtered files:", filteredFiles);

  //Copy the filtered files to the target directory while preserving their original
  //names, using fs.copyFile.
  filteredFiles.forEach((file) => {
    fs.copyFile(`${source}/${file}`, `${target}/${file}`, (err) => {
      if (err) {
        console.error("Could not copy the file.", err);
        process.exit(1);
      }
      console.log("Copied file:", file);
    });
  });
  console.log("Done!");
});
