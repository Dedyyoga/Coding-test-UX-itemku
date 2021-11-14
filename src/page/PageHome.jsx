import CardList from "../components/Cardlist";
import CardListDiskon from "../components/CardlistDiskon";

// disini untuk kumpulin component yang di perlukan untuk page nya
const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="pl-6 flex justify-start">
        <span className="font-bold text-lg">Termurah di Seluruh Indonesia</span>
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
        <div className="overflow-x-scroll flex gap-x-6 h-full pb-3 pl-8 ">
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
    </div>
  );
};

export default Home;
