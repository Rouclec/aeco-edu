import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import slugify from "slugify";
import path from "path";

const news = [
  {
    title: "Study in the U.K. (1 Year Bachelor)",
    date: "25/10/2023",
    body: "Have you been wondering how to further your studies abroad after HND? Worry no more. \n\nHere is your oportunity to do a 1 Year Bachelors degree top up in any field of your choice in the U.K. We have several universities offering top up possibilities at very affordable prices. Contact us now and enroll for the January 2024 intake.",
    image: "/assets/work_overseas.jpeg",
  },
  {
    title: "6 Months Masters Foundation + 1 year master's degree",
    date: "25/10/2023",
    body: "Get a chance to do a 6 months masters Foundation + 1 year master's degree programme in one of the top universities in the UK",
    image: "/assets/study_abrod.jpeg",
  },
  {
    title: "Study with your dependents",
    date: "25/10/2023",
    body: "Do you wish to move to the UK for studies with your dependents (wife, children etc.)? Here is the opportunity for you",
    image: "/assets/study_abrod.jpeg",
  },
  {
    title: "Study in Canada",
    date: "25/10/2023",
    body: "Do you wish to study in Canada but worried about language barrier? AECO Education has the answer to your problems. Enroll for Business, IT or Audiovisual Production programme at our Montreal or Toronto campus and study in your preferred language (English or French)",
    image: "/assets/study_abrod.jpeg",
  },
  {
    title: "Study in Canada 1",
    date: "25/10/2023",
    body: "Do you wish to study in Canada but worried about language barrier? AECO Education has the answer to your problems. Enroll for Business, IT or Audiovisual Production programme at our Montreal or Toronto campus and study in your preferred language (English or French)",
    image: "/assets/study_abrod.jpeg",
  },
];

const saveData = (news: any[]) => {
  const finished = (error: any) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  news.forEach((news) => {
    const newsString = JSON.stringify(news);
    const name = slugify(news.title.toLowerCase());
    const directoryPath = path.join(__dirname, "data");

    try {
      if (!fs.existsSync(directoryPath)) {
        // Create the directory synchronously
        fs.mkdirSync(directoryPath);
      }
    } catch (err) {
      console.error("Error creating directory:", err);
    }

    fs.writeFile(`${directoryPath}/${name}.json`, newsString, finished);
  });
};

const blog = (req: NextApiRequest, res: NextApiResponse) => {
  saveData(news);
  res.send("OK");
};

export default blog;
