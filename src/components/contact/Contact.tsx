"use client";

import { RevealWrapper } from "next-reveal";

export const Contact = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-9">
        <div className="col-start-2 col-span-5">
          <RevealWrapper origin="bottom">
            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Let&apos;s Get In Touch.
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="top">
            <h1 className="text-section">Contact Me</h1>
          </RevealWrapper>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOFrTh007K0i-srsRhvlHVpwhDCeSWkCI-qsixbemrpNB8sA/viewform?embedded=true"
          width="640"
          height="871"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="bg-white"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
