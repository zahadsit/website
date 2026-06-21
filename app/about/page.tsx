import About from "@/components/Resources/About";
import { getPageMetadata } from "@/utils/metadata";
// import { getMetadata } from "@/utils/metadata";
import React from "react";

export async function generateMetadata() {
  return getPageMetadata('/about');
}
const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
