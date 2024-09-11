import Link from "next/link";
import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import CardDemo from "./card";
import { useRouter } from "next/router";

const Class = () => {
  const router = useRouter();
  const { q, page, pageSize } = router.query;
  return (
    <main className="w-full h-full">
      <section className="w-full h-1/3 bg-white flex flex-col justify-between items-center">
        <div className="w-full h-full flex justify-center items-center">
          <h2 className="text-6xl font-semibold ">Courses</h2>
        </div>
        <div className="w-full h-24 flex justify-between items-center px-16">
          <div className="flex gap-3 justify-center items-center ">
            <div className=" border-slate-200 h-6 flex  items-center">
              <FaSearch />
            </div>
          </div>
          <nav className="flex gap-8 capitalize font-semibold">
            <Link href={"/courses?q=class&page=1&pageSize=15"} className="hover:underline ">
              class
            </Link>
            <Link href={"/courses/bootcamp"} className="hover:underline">
              bootcamp
            </Link>
            <Link href={"/courses/quiz"} className="hover:underline ">
              Quiz
            </Link>
          </nav>
          <div className="flex gap-8 ">
            <div className="flex ">
              <MdWindow />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-color-coursesTopic p-16">
        <div className="w-full h-full grid grid-cols-4 gap-8">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </section>
    </main>
  );
};

export default Class;
