import CardList from "../components/Cardlist";

const Home = () => {
  return (
    <div>
      <div className="pl-6 flex justify-start">
        <span className="font-bold text-lg">Termurah di Seluruh Indonesia</span>
      </div>
      <div className="overflow-x-scroll flex gap-x-6 ">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
    </div>
  );
};

export default Home;
