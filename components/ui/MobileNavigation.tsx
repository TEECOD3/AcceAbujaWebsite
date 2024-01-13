import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "../icons/Hamburger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./separator";
import Link from "next/link";

const accordiondata = [
  {
    id: 1,
    linkname: "Career",
    item: "item-1",
    extralinks: [
      { id: 1, extralinkname: "Vacancy", link: "/Vacancy" },
      { id: 1, extralinkname: "Apply now", link: "/Vacancy" },
    ],
  },
  {
    id: 2,
    linkname: "admissions",
    item: "item-2",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 3,
    linkname: "academics",
    item: "item-3",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 4,
    linkname: "school life",
    item: "item-4",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 5,
    linkname: "departments",
    item: "item-5",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 6,
    linkname: "research",
    item: "item-6",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 7,
    linkname: "careers",
    item: "item-7",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
  {
    id: 8,
    linkname: "resources",
    item: "item-8",
    extralinks: [
      { id: 1, extralinkname: "about us", link: "/" },
      { id: 1, extralinkname: "about our staffs", link: "/" },
    ],
  },
];

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="max-sm:pointer-events-none max-sm:user-select-none "
      >
        <div className="">
          <Hamburger className="" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full">
        <Accordion type="single" collapsible className="w-full mt-10">
          {accordiondata.map((data) => (
            <AccordionItem value={data.item} key={data.id}>
              <AccordionTrigger className="uppercase w-1/2">
                {data.linkname}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex-col flex gap-y-2">
                  {data.extralinks.map((data) => (
                    <li key={data.id} className="capitalize text-xl">
                      <SheetClose asChild>
                        <Link href={data.link}>{data.extralinkname}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
