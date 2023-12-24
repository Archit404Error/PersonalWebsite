"use client";

import { SectionHeader } from "../text/SectionHeader";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="grid grid-cols-9 mt-48">
        <div className="col-start-2 col-span-5">
          <SectionHeader subtitle="Let's Get In Touch." title="Contact Me" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOFrTh007K0i-srsRhvlHVpwhDCeSWkCI-qsixbemrpNB8sA/viewform?embedded=true"
          width="640"
          height="871"
          className="bg-white"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
