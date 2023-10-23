import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const getData = (path: string) => {
  const content = fs.readFileSync(`data/${path}.json`, "utf-8");
  return JSON.parse(content);
};

const blog = (req: NextApiRequest, res: NextApiResponse) => {
  const data = getData(req.query.title as string);
  console.log({ data });
  res.send(data);
};

export default blog;
