import Img4 from "../logo/itemku.png";
const Navbar = () => {
  return (
    <nav className="h-auto pb-5">
      <div className="h-auto flex justify-between flex-col">
        <div className="w-64 flex justify-start">
          <div className="relative right-5">
            <img className=" object-cover" src={Img4} alt="" srcset="" />
          </div>
        </div>
        <div className="bg-gray-200 h-px"></div>
      </div>
    </nav>
  );
};

export default Navbar;
