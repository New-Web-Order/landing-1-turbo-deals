"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Button from "@/components/widgets/Buttons";
import Logo from "@/components/widgets/Logo";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import data from "@/dictionaries/en.json";
import "@/styles/globals.css"
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};


const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <Disclosure as="nav" className="bg-transparent lg:flex lg:items-center lg:h-20 border-b border-[#F1F0EF] py-3 lg:py-0 ">
        {({ open }) => (
          <>
            <div className="mx-auto w-full max-w-7xl px-3.5 lg:px-6 2xl:px-0 ">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex w-full items-center justify-end lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <RiCloseLine
                        className="block h-6 w-6 text-primary-300"
                        aria-hidden="true"
                      />
                    ) : (
                      <RiMenuFill
                        className="block h-6 w-6 text-primary-300"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                
                <div
                  onClick={() => router.push("/")}
                  className="flex flex-1 cursor-pointer items-center gap-x-1.5"
                >
                  
                  <Logo className="h-[1.406rem] w-[1.406rem]" />
                  <p className="font-bold text-2xl text-[#21201C] ">{data.navbar.logoText}</p>
                </div>
                <div className=" hidden flex-auto lg:ml-0 lg:block">
                  <div className="flex items-center justify-center gap-1.5">
                    {data.navbar.links.map((item) => (
                      <a key={item.name} href={item.href}>
                        <p
                          className={classNames(
                            "px-4 text-[15px] font-semibold leading-[1.219rem]  ",
                            item.name
                              ? "text-bg-200"
                              : "text-[#22D3EE] underline",
                          )}
                          aria-current={item.name ? "page" : undefined}
                        >
                          {item.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 hidden flex-1 items-center justify-end pr-2 lg:static lg:inset-auto lg:ml-0 lg:flex lg:pr-0">
                  {
                    <a
                      href='/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Button shape="surface" className="navbarbutton">
                        Signup
                      </Button>
                      <Button shape="filled" >
                      {data.navbar.buttonText}
                      </Button>

                    </a>
                    
                  }
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden ">
              <div className="space-y-1 px-3.5 pb-3 pt-2 flex flex-col">
                {data.navbar.links.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.name ? "text-bg-200" : "text-primary-300",
                      " p-3 px-3 py-2 text-sm font-medium tracking-[0.00438rem]",
                    )}
                    aria-current={item.name ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
    );
};
export default Navbar;