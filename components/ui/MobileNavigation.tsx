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

const accordiondata = [
  {
    id: 1,
    linkname: "about",
    item: "item-1",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 2,
    linkname: "admissions",
    item: "item-2",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 3,
    linkname: "academics",
    item: "item-3",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 4,
    linkname: "school life",
    item: "item-4",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 5,
    linkname: "departments",
    item: "item-5",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 6,
    linkname: "research",
    item: "item-6",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 7,
    linkname: "careers",
    item: "item-7",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
  {
    id: 8,
    linkname: "resources",
    item: "item-8",
    extralinks: [
      { id: 1, extralinkname: "about us" },
      { id: 1, extralinkname: "about our staffs" },
    ],
  },
];

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
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
                <ul className="flex-col flex gap-y-4">
                  {data.extralinks.map((data) => (
                    <li key={data.id} className="uppercase font-semibold">
                      {data.extralinkname}
                      <Separator className="w-1/2" />
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
