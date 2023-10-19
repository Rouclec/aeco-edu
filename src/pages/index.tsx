"use client";
import {
  PartnerCard,
  PartnersLogo,
  TopNav,
  Services,
  FullNews,
  SubNews,
  Testimonials,
} from "@/components";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>AECO EDUCATION</title>
        <meta name="description" content="Travel abroad to work, study..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <TopNav>
            <div className="pb-32 overflow-x-hidden">
            <div
                className="bg-cover bg-center w-full h-[80vh] overflow-hidden"
                style={{ backgroundImage: `url("/assets/hero.png")` }}
              >
                <div className="w-full h-full  grid md:grid-cols-3 items-center justify-center px-10 md:px-20 lg:px-40">
                  <div className="grid w-full lg:w-[80%] bg-[#000508c1] p-8 col-span-2 gap-1">
                    <p className="text-center pb-6 text-[var(--neutral-10)] font-inter font-bold text-xl lg:text-4xl lg:leading-10">
                      Your Journey Starts Here!
                    </p>
                    <p className="text-center text-[var(--tetiary-500)] font-inter font-light text-[16px] leeading-[24px]">
                      Kick start your higher education journey globally with
                      AECO Education and unlock a world of opportunities through
                      our International year Programme, Direct Placement in Home
                      and Abroad Universities.
                    </p>
                  </div>
                  {/* <div className="col-span-1">
                    <div
                      ref={containerRef}
                      id="script-container"
                      className="mr-10"
                    >
                      <Iframe
                        url="https://ams4you.net/panel/webinq.php?ag=13059&wfid=1100&url='+location.href.replace('&', '[P]')+'&ptit='+document.title+'"
                        width="400px"
                        height="320px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="my-16">
                <PartnersLogo />
              </div>
              <div className="my-16 mb-28 mx-10">
                <Services />
              </div>
              <div className="mt-16  items-center justify-center flex flex-col">
                <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-4 text-[var(--neutral-600)] font-inter font-bold text-xl md:text-3xl lg:text-5xl my-2">
                    Partner Highlights
                  </p>
                  <p className="text-center text-[var(--neutral-600)] font-inter text-[16px] mb-4">
                    We believe in the power of collaboration and building strong
                    alliances to achieve success together.
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 w-[100vw] px-10 mt-12">
                  <PartnerCard />
                  <PartnerCard />
                  <PartnerCard />
                  <PartnerCard />
                </div>
              </div>
              <div className="mt-12 items-center justify-center flex flex-col">
              <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-4 text-[var(--neutral-600)] font-inter font-bold text-xl md:text-3xl lg:text-5xl my-2">
                    NEWS
                  </p>
                  <p className="text-center text-[var(--neutral-600)] font-inter text-[16px] mb-4">
                    Breaking News: Stay Updated with the Latest Headlines
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-10 w-full">
                  <div className="grid row-span-1">
                    <FullNews />
                  </div>
                  <div className="grid row-span-1 grid-cols-2 gap-4">
                    <div className="grid row-span-1  grid-rows-2 gap-4">
                      <div className="col-span-1 ">
                        <SubNews />
                      </div>
                      <div className="col-span-1 ">
                        <SubNews />
                      </div>
                    </div>
                    <div className="grid row-span-1  grid-rows-2 gap-4">
                      <div className="col-span-1 ">
                        <SubNews />
                      </div>
                      <div className="col-span-1 ">
                        <SubNews />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 items-center justify-center flex flex-col mx-10">
              <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-4 text-[var(--neutral-600)] font-inter font-bold text-xl md:text-3xl lg:text-5xl my-2">
                    Testimonials
                  </p>
                  <p className="text-center text-[var(--neutral-600)] font-inter text-[16px] mb-4">
                    Breaking News: Stay Updated with the Latest Headlines
                  </p>
                </div>
                <div className="mt-8">
                  <Testimonials />
                </div>
              </div>
            </div>
          </TopNav>
        </div>
      </main>
    </>
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
