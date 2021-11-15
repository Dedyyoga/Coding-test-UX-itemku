import React from "react";
import CardList from "../components/Cardlist";
import CardListDiskon from "../components/CardlistDiskon";
import CardListDiskonMl from "../components/CardlistDiskonMl";
import CardListMl from "../components/CardlistMl";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// disini untuk kumpulin component yang di perlukan untuk page nya
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-full flex flex-col">
        <div className="pl-6 flex justify-start">
          <span className="font-bold text-lg">
            Termurah di Seluruh Indonesia
          </span>
        </div>
        <div className="">
          {/* disini untuk mengatur scroll nya */}
          <div className="overflow-x-scroll flex gap-x-6 h-full pb-3 pl-8">
            <CardList />
            <CardListDiskon />
            <CardList />
            <CardListDiskon />
            <CardList />
            <CardListDiskon />
            <CardList />
            <CardListDiskon />
          </div>
        </div>
        <div className="pl-6 flex justify-start">
          <span className="font-bold text-lg">
            Produk Mobile Lejends Terpopuler
          </span>
        </div>
        <div className="">
          <div className=" h-full ">
            <Link to="/detail" className="overflow-x-scroll flex gap-x-6 h-full pb-3 pl-8 ">
              <CardListMl />
              <CardListDiskonMl />
              <CardListMl />
              <CardListDiskonMl />
              <CardListMl />
              <CardListDiskonMl />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
