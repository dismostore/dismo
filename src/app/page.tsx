import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import CTA from "../components/CTA";

import { z } from "zod";
import { NewsletterSchema } from "../models/zod";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <CTA />
      </MaxWidthWrapper>
    </>
  );
}
