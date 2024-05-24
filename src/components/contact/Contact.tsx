"use client";

import { SectionHeader } from "../text/SectionHeader";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <div id="contact" className="mb-10">
      <div className="grid grid-cols-9 mt-10 md:mt-20">
        <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5 3xl:col-start-3 3xl:col-span-4">
          <SectionHeader subtitle="Let's Get In Touch." title="Contact Me" />
          <div className="mb-5 md:mb-0" />
          <Form />
        </div>
      </div>
    </div>
  );
};
