import CardList from "../components/Cardlist";
import CardListDiskon from "../components/CardlistDiskon"

const Home = () => {
  return (
    <div className="h-96">
      <div className="pl-6 flex justify-start">
        <span className="font-bold text-lg">Termurah di Seluruh Indonesia</span>
      </div>
      <div className="overflow-x-scroll flex gap-x-6 h-full pb-3 ">
        <CardList />
        <CardListDiskon/>
        <CardList />
        <CardListDiskon/>
        <CardList />
        <CardListDiskon/>
        <CardList />
        <CardListDiskon/>
      </div>
    </div>
  );
};

export default Home;
