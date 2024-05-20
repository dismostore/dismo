import MaxWidthWrapper from "./MaxWidthWrapper";
import { Inter } from "next/font/google";
import { cn } from "@/src/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="bg-gray-900 flex-grow-0 py-8">
      <MaxWidthWrapper>
        <p
          className={cn(
            "text-xs leading-1 text-gray-400 text-center",
            inter.className
          )}
        >
          © 2024 Distro Mobiles Ltd T/A DISMO. All rights reserved.
        </p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
