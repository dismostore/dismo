import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import CTA from "../components/CTA";

import { z } from "zod";
import { NewsletterSchema } from "../models/zod";
import { cn } from "../lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h1 className="mx-auto text-3xl text-center font-bold text-gray-800 mb-8">
                DISMO warranty +
              </h1>
              <div className="grid max-w-4xl mx-auto gap-y-6 grid-cols-2 sm:grid-cols-3 w-full mb-2">
                <p className="flex justify-center items-center gap-x-3 font-semibold text-gray-800 w-full">
                  <svg
                    className="stroke-green-600 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Technical defects
                </p>
                <p className="flex justify-center items-center gap-x-3 font-semibold text-gray-800 w-full">
                  <svg
                    className="stroke-green-600 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L10.5 10.5M6 6H3L2 3L3 2L6 3V6ZM19.259 2.74101L16.6314 5.36863C16.2354 5.76465 16.0373 5.96265 15.9632 6.19098C15.8979 6.39183 15.8979 6.60817 15.9632 6.80902C16.0373 7.03735 16.2354 7.23535 16.6314 7.63137L16.8686 7.86863C17.2646 8.26465 17.4627 8.46265 17.691 8.53684C17.8918 8.6021 18.1082 8.6021 18.309 8.53684C18.5373 8.46265 18.7354 8.26465 19.1314 7.86863L21.5893 5.41072C21.854 6.05488 22 6.76039 22 7.5C22 10.5376 19.5376 13 16.5 13C16.1338 13 15.7759 12.9642 15.4298 12.8959C14.9436 12.8001 14.7005 12.7521 14.5532 12.7668C14.3965 12.7824 14.3193 12.8059 14.1805 12.8802C14.0499 12.9501 13.919 13.081 13.657 13.343L6.5 20.5C5.67157 21.3284 4.32843 21.3284 3.5 20.5C2.67157 19.6716 2.67157 18.3284 3.5 17.5L10.657 10.343C10.919 10.081 11.0499 9.95005 11.1198 9.81949C11.1941 9.68068 11.2176 9.60347 11.2332 9.44681C11.2479 9.29945 11.1999 9.05638 11.1041 8.57024C11.0358 8.22406 11 7.86621 11 7.5C11 4.46243 13.4624 2 16.5 2C17.5055 2 18.448 2.26982 19.259 2.74101ZM12.0001 14.9999L17.5 20.4999C18.3284 21.3283 19.6716 21.3283 20.5 20.4999C21.3284 19.6715 21.3284 18.3283 20.5 17.4999L15.9753 12.9753C15.655 12.945 15.3427 12.8872 15.0408 12.8043C14.6517 12.6975 14.2249 12.7751 13.9397 13.0603L12.0001 14.9999Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Accidential repairs
                </p>
                <p className="flex col-span-2 sm:col-span-1 justify-center items-center gap-x-3 font-semibold text-gray-800 w-full">
                  <svg
                    className="stroke-green-600 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Priority support
                </p>
              </div>
            </div>

            <div className="w-full space-y-4 divide-y divide-gray-200 mx-auto">
              <h2 className="text-xl font-bold text-gray-800">
                Warranty information
              </h2>
              <table className={cn("pr-12 w-full", inter.className)}>
                <tbody className="bg-white">
                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm sm:w-48">
                      Coverage
                    </td>
                    <td className="flex gap-x-1.5 items-center whitespace-nowrap px-4 h-12 text-green-500 font-medium className text-sm">
                      Valid
                      <svg
                        className="h-5 w-5 flex-none stroke-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>

                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      Expiry
                    </td>
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      31<sup>st</sup> December 2099
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm sm:w-48">
                      Brand
                    </td>
                    <td className="flex gap-x-3 whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      Apple
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      Model
                    </td>
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      iPhone 15 Pro
                    </td>
                  </tr>

                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      IMEI
                    </td>
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      12 302<span></span>024 898<span></span>093 6
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      Serial number
                    </td>
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      C6MYZ1GE8DSN
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm sm:w-48">
                      Reference
                    </td>
                    <td className="flex gap-x-2 whitespace-nowrap px-4 h-12 items-center text-gray-800 className text-sm">
                      40<span></span>433-224<span></span>41
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact support
              </h2>
              <p className="text-gray-600">
                Need a hand? Fill out the form below, and we&apos;ll get back to
                you within 24 hours!
              </p>
            </div>

            <div>ss</div>
          </div>
        </section>
      </main>
    </>
  );
}
