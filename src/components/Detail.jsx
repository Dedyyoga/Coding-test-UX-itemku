import React from "react";
import arrow from "../logo/arrow.png";
import share from "../logo/share.png";
import cart from "../logo/card.png";
import heart from "../logo/heart.png";
import heartp from "../logo/heartp.png";
import CardList from "./CardlistMl";
import CardListDiskonMl from "../components/CardlistDiskonMl";
import { Link } from "react-router-dom";
import Img from "../logo/990983.jpg";

import { useState } from "react";
const Detail = () => {
  const [imgs, setImgs] = useState(false);
  const [desk, setDesk] = useState(false);
  const [bottom, setBottom] = useState(false);
  console.log(bottom);
  console.log(desk);
  return (
    <div>
      <div>
        <div className="h-auto">
          <div className=" costumDiv h-60 w-full flex">
            <div className="pl-6 pt-4">
              <div className="w-9 h-9 bg-gray-800 rounded-md bg-opacity-25 flex items-center justify-center">
                {/* link bakal di arahkan ke home */}
                <Link to="/">
                  <img className="w-7  object-cover" src={arrow} alt="" />
                </Link>
              </div>
            </div>
            <div className="flex justify-end w-full pr-6">
              <div className="pt-4">
                <div className="w-9 h-9 bg-gray-800 rounded-md bg-opacity-25 flex items-center justify-center">
                  <button>
                    <img className="w-7  object-cover" src={share} alt="" />
                  </button>
                </div>
              </div>
              <div className="pl-4 pt-4">
                <div className="w-9 h-9 bg-gray-800 rounded-md bg-opacity-25 flex items-center justify-center">
                  <button>
                    <img className="w-7  object-cover" src={cart} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between px-5 pt-7">
              <div className="">
                <div>
                  <span className="font-bold text-xl">366 Diamonds</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray">
                    Mobile Mobile
                  </span>
                </div>
                <div>
                  <div className="mt-3">
                    <div className="flex">
                      <span className="font-bold text-primary text-xl">
                        Rp100.000
                      </span>
                      <div className="pl-3">
                        <span className="text-gray"> per 1 top up</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className=" w-3/12 h-6 bg-red-500 flex justify-center rounded-md pb-3">
                      <span className="text-white">50%</span>
                    </div>
                    <div className="ml-3">
                      <span className="text-gray line-through">Rp200.000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-9 h-9 rounded-md bg-opacity-25 flex items-center justify-center">
                  <button onClick={() => setImgs(!imgs)}>
                    {/* setiap klik bakal berubah img nya */}
                    <img
                      className="w-7  object-cover"
                      src={imgs === true ? heartp : heart}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-5 mt-7"></div>
        </div>
        <div className="px-5 pt-7">
          <div>
            <span className="font-bold text-xl">Deskripsi Produk</span>
          </div>
          <div className="mt-3">
            <span className=" font-medium">
              Deskripsi Produk Mobile Lejends dari toko UlalaShop yang paling
              {desk === true ? (
                <span className="font-medium">
                  termurah Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </span>
              ) : (
                <span> termurah...</span>
              )}
            </span>
          </div>
          <div className="flex justify-end">
            <div>
              <button onClick={() => setDesk(!desk)}>
                {/* jika di klik akan keluarkan desk nya */}
                {desk === false ? (
                  <span className="text-blue font-bold">Selengkapnya</span>
                ) : (
                  <span className="text-blue font-bold">Tutup</span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-5 mt-7"></div>
      </div>
      <div>
        <div className="mt-7 px-5">
          <div className="flex justify-between">
            <div>
              <span className="font-bold text-xl">Pengiriman Tercepat</span>
            </div>
            <div>
              <button>
                <span className="font-bold text-blue">Lihat Semua</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <span className="font-medium">
              Produk dari penjual-penjual yang memberi Garansi Pengiriman 10
              menit
            </span>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-x-6 px-5 pb-3">
          <CardList />
          <CardListDiskonMl />
          <CardList />
          <CardListDiskonMl />
        </div>
      </div>
      <div>
        <div className="bg-gray-200 h-px"></div>
        <div className="w-full h-20 flex justify-center items-center px-5">
          <div className="w-full flex justify-center">
            <button
              className=" color h-10 w-full rounded-md"
              onClick={() => setBottom(!bottom)}
            >
              {bottom === false ? (
                <span className="font-bold text-white">Tambahkan ke Troli</span>
              ) : (
                <span className="font-bold text-white">
                  Keluarkan dari Troli
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
