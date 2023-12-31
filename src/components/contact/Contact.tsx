"use client";

import { SectionHeader } from "../text/SectionHeader";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <div id="contact" className="mb-10">
      <div className="grid grid-cols-9 mt-10 md:mt-20">
        <div className="col-start-2 col-span-7 md:col-start-2 md:col-span-5">
          <SectionHeader subtitle="Let's Get In Touch." title="Contact Me" />
          <Form />
        </div>
      </div>
    </div>
  );
};
