import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const directoryPath = path.join(__dirname, "data");

function readJSONFilesInDirectory(directoryPath: string) {
  const files = fs.readdirSync(directoryPath);

  const jsonFiles = files.filter((file) =>
    file.toLowerCase().endsWith(".json")
  );

  const filePaths = jsonFiles.map((file) => path.join(directoryPath, file));

  const fileContents = filePaths.map((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(content);
    return jsonData;
  });

  return fileContents;
}

const blog = (req: NextApiRequest, res: NextApiResponse) => {
  const jsonFiles = readJSONFilesInDirectory(directoryPath);
  res.send(jsonFiles);
};

export default blog;
