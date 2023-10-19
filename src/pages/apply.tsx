import { TopNav } from "@/components";
import React, { useRef } from "react";
import Iframe from "react-iframe";

function Apply() {
  const containerRef = useRef(null) as any;

  return (
    <TopNav>
      <div
        ref={containerRef}
        id="script-container"
        className="p-10 py-24 flex items-center justify-center bg-[var(--neutral-200)] overflow-x-hidden"
      >
        <Iframe
          // url="https://aeco.ams4you.net/webinqcode-13059-1100.html"
          // url="https://test.ams4you.net/webinqcode-12356-1089.html"
          url="https://ams4you.net/panel/webinq.php?ag=13059&wfid=1100&url='+location.href.replace('&', '[P]')+'&ptit='+document.title+'"
        //   width="1024px"
        //   height="940px"
          id=""
          className="rounded-lg w-full h-[1460px] md:h-[940px]"
          display="block"
          position="relative"
        />
      </div>
    </TopNav>
  );
}

export default Apply;
