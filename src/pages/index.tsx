"use client";
import {
  PartnerCard,
  PartnersLogo,
  ServiceCard,
  TopNav,
  Services,
  FullNews,
  SubNews,
} from "@/components";

export default function Home() {
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
          <div className="my-8">
            <PartnersLogo />
          </div>
          <div className="my-16 mx-10">
            <Services />
          </div>
          <div className="mt-16  items-center justify-center flex flex-col">
            <div className="grid items-center justify-center">
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-5xl my-2">
                Partner Highlights
              </p>
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-[16px] mb-4">
                We believe in the power of collaboration and building strong
                alliances to achieve success together.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 my-8 m-auto">
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
            </div>
          </div>
          <div className="mt-12 items-center justify-center flex flex-col">
            <div className="grid items-center justify-center">
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-5xl my-2">
                NEWS
              </p>
              <p className="text-center text-[var(--neutral-600)] font-inter font-bold text-[16px] mb-4">
                Breaking News: Stay Updated with the Latest Headlines
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 my-8 m-auto w-full px-28">
              <div className="grid row-span-1">
                <FullNews />
              </div>
              <div className="grid row-span-1 grid-cols-2 gap-4">
                <div className="grid row-span-1  grid-rows-2 gap-2">
                  <div className="col-span-1 ">
                    <SubNews />
                  </div>
                  <div className="col-span-1 ">
                    <SubNews />
                  </div>
                </div>
                <div className="grid row-span-1  grid-rows-2 gap-2">
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
