import { buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
            <h2 className="text-3xl leading-7 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-8">
              Under maintenance...
            </h2>
            <p className="mt-5 text-lg leading-4 text-gray-600">
              Don&apos;t worry, we&apos;ll be back up shortly. In the meantime,
              we&apos;re here if you need any support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="mailto:support@dismo.co.uk"
                className={buttonVariants({ variant: "default" })}
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Icons.illustrationserver className="absolute left-0 top-0 w-128 h-auto max-w-none " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
