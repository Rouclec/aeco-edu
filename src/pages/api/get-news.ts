import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from 'path'

const getData = (docName: string) => {
  const directoryPath = path.join(process.cwd(), "data");
  const content = fs.readFileSync(`${directoryPath}/${docName}.json`, "utf-8");
  return JSON.parse(content);
};

const blog = (req: NextApiRequest, res: NextApiResponse) => {
  const data = getData(req.query.title as string);
  console.log({ data });
  res.send(data);
};

export default blog;
