"use client";
import { PartnerCard, TopNav } from "@/components";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
// import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const partnerLogos = [
    {
      name: "Avila University USA",
      image: "/assets/avila.png",
    },
    {
      name: "Berlin School of Business and Innovation",
      image: "/assets/berlin.png",
    },
    {
      name: "Elmira College, USA",
      image: "/assets/elmira.png",
    },
    {
      name: "Global College Malta",
      image: "/assets/global_college_malta.png",
    },
    {
      name: "Norquest College, Canada",
      image: "/assets/norquest.png",
    },
    {
      name: "Opuvia",
      image: "/assets/opuvia.png",
    },
    {
      name: "St. Alessandro University Institute",
      image: "/assets/sau.png",
    },
    {
      name: "Texila American University",
      image: "/assets/texila.png",
    },
    {
      name: "Trebas Institute Canada",
      image: "/assets/trebas.png",
    },
  ];
  return (
    <div>
      <TopNav>
        <div className="pb-8">
          <div
            className="bg-cover bg-center w-full h-[80vh] overflow-hidden"
            style={{ backgroundImage: `url("/assets/hero.png")` }}
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center px-40">
              <div className="grid w-[80%] h-[80%] bg-[#000508c1] p-8 col-span-1 md:col-span-2 gap-1">
                <p className="text-center text-[var(--neutral-10)] font-inter font-bold text-4xl leading-10">
                  Your Higher Education Journey Starts Here!
                </p>
                <p className="text-center text-[var(--tetiary-500)] font-inter font-light text-[16px] leeading-[24px]">
                  Kick start your higher education journey globally with AECO
                  Education and unlock a world of opportunities through our
                  International year Programme, Direct Placement in Home and
                  Abroad Universities In; UK, USA, CANADA, FRANCE, MALTA,
                  MALAYSIA, CARRIBEANS, GERMANY, IRELAND etc. We will help you
                  take the next step in realising a fulfilling future.
                </p>
              </div>
              <div className="col-span-1">
                <script
                  src="https://aeco.ams4you.net/webinqcode-13059-1100.html"
                  async
                />
              </div>
            </div>
          </div>
          <div className="ml-10 py-4  flex items-center justify-center">
            {/* <Slider /> */}
            {/* <Carousel
              // responsive={responsive}
              autoPlay
              infiniteLoop
              // arrows={false}
              // autoPlaySpeed={5000}
            >
              {partnerLogos.map((partner, index) => (
                // <div
                //   key={index}
                //   className="flex  self-center h-full items-center justify-center"
                // >
                <img
                  key={index}
                  src={partner.image}
                  width={96}
                  height={"auto"}
                  alt={partner.name}
                  className="hover:cursor-pointer"
                />
                // </div>
              ))}
            </Carousel> */}
          </div>
          <div>
            <motion.div className="cursor-grab">
              <motion.div drag="x" className="w-full flex overflow-hidden">
                {partnerLogos.splice(0, 3).map((partner, index) => {
                  return (
                    <motion.div key={index} className="py-1 mx-8">
                      <div
                        className="bg-cover bg-center w-[36vw] h-[80vh] rounded-lg"
                        style={{ backgroundImage: `url("/assets/hero.png")` }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.div className="cursor-grab  ml-20">
              <motion.div className="w-full flex">
                {partnerLogos.map((partner, index) => {
                  return (
                    <motion.div key={index} className="py-1 mx-8">
                      <img src={partner.image} alt={partner.name} width={400} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
          <div className="mx-28">
            <div className="grid items-center justify-center">
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-5xl my-2">
                Partner Highlights
              </p>
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-[16px] mb-4">
                We believe in the power of collaboration and building strong
                alliances to achieve success together.
              </p>
            </div>
            <PartnerCard />
          </div>
        </div>
      </TopNav>
    </div>
  );
}

/******REFERENCE */
{
  /* <div className="w-screen h-screen">
<h1 className={`font-inter uppercase`}>aeco education</h1>
<h1 className={`font-clash font-bold uppercase`}>aeco education</h1>
<h1 className={`font-clash font-semibold uppercase`}>aeco education</h1>
<h1 className="uppercase">aeco education</h1>
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-tetiary">Tetiary</button>
<button className="btn-link">Link</button>
<Image src="//assets/logo.png" alt="logo" width={200} height={200} />
<Image src="//assets/logotext.png" alt="logo" width={200} height={200} />
</div> */
}
