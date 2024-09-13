import { useIcons } from "@/hook/useIcons";
import React from "react";
import CardDemo from "./card";

const DetailClasses = ({ title }: { title: string | any }) => {
  const { icons } = useIcons();
  return (
    <main className="w-full h-full">
      <section
        id="picture of detail class"
        className="w-full h-[60vh] py-6 px-10 pb-6  "
      >
        <div className="w-full h-full bg-red-500/20 rounded-xl"></div>
        <div className="w-28 h-28 bg-blue-500 rounded-full ml-20 relative bottom-16"></div>
      </section>
      <section className="w-full h-full  pt-14 px-16 flex flex-col gap-6">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-6xl font-bold capitalize">intro to javascript</h2>
          <h6 className="text-xl font-semibold ">MENTORIX Academy</h6>
        </div>
        <div className="flex flex-col gap-4 border-b pb-12">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center text-slate-400">
              <icons.book size={20} />
              12 lesson
            </div>
            <div className="flex gap-2 items-center text-slate-400">
              <icons.timer size={20} />3 hr 35 min
            </div>
          </div>
          <button className="btn w-1/4 text-lg capitalize">ikuti kelas</button>
        </div>
      </section>
      <section className="w-full h-full flex gap-8 px-16">
        <div className="w-2/3 h-full  py-8 flex flex-col gap-8 pr-6">
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">tentang kelas ini</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              voluptatem nulla! Beatae nam quaerat consequuntur a at quasi.
              Fugiat tempore corrupti quam cum nisi recusandae corporis odit
              excepturi laborum natus. Beatae, laudantium? Maxime quidem
              molestiae quos voluptates eaque cum perferendis autem
              reprehenderit libero accusantium distinctio, exercitationem atque
              magni minus deleniti quas rerum id a assumenda ullam saepe amet
              recusandae earum. Autem quas amet doloremque voluptatum illum, et
              corporis libero, corrupti architecto, voluptates ducimus eaque est
              mollitia! Voluptate neque fugiat architecto est. Doloremque ab
              nobis ducimus sed eum pariatur quibusdam necessitatibus. Veritatis
              dolore maiores laudantium deserunt earum itaque quisquam,
              explicabo libero repellat minima esse exercitationem mollitia
              optio nam necessitatibus repudiandae? Iure eligendi nesciunt
              architecto eum et nisi corporis aut error autem? Nisi dolorem
              veritatis cum quos voluptatem numquam temporibus, vel reiciendis
              incidunt nemo.
            </p>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">
              apa yang akan di pelajari ?
            </h4>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 px-4 py-2 border border-slate-200 rounded-lg h-full ">
            <h3 className="text-2xl font-semibold capitalize ">materi</h3>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
              <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                <ul className="list-disc">
                  <li className="font-semibold">Stasfngqdfjndsfwehjrbgfdsgw</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">persiapan kelas</h4>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
              <li>Struktur Dokumen HTML</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 h-[97vh] sticky top-2 px-6 py-2 flex flex-col gap-5">
          <div className="w-full h-1/2 border-2 border-slate-200 rounded-lg p-4">
            <h3 className="text-2xl">detail kelas</h3>
            <div className="w-full h-[70px] bg-red-500"></div>
          </div>
          <div className="w-full h-full border-2 border-slate-200 rounded-lg">
            <div className="flex flex-col gap-2 px-4 py-2 border border-slate-200 rounded-lg h-full ">
              <h3 className="text-2xl font-semibold capitalize ">materi</h3>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                  <ul className="list-disc">
                    <li className="font-semibold">
                      Stasfngqdfjndsfwehjrbgfdsgw
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                  <ul className="list-disc">
                    <li className="font-semibold">
                      Stasfngqdfjndsfwehjrbgfdsgw
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                  <ul className="list-disc">
                    <li className="font-semibold">
                      Stasfngqdfjndsfwehjrbgfdsgw
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg">
                  <ul className="list-disc">
                    <li className="font-semibold">
                      Stasfngqdfjndsfwehjrbgfdsgw
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full px-16 py-14 flex flex-col gap-14">
        <h2 className="text-4xl font-bold capitalize">
          Recommendasi kelas untuk kamu
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </section>
    </main>
  );
};

export default DetailClasses;
