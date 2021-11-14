import Img from "../logo/990983.jpg"
const CardList = () => {
  return (
    <div className="mt-5">
      <div className=" h-full w-full flex justify-evenly">
        <div className="bg-white h-auto w-52 filter drop-shadow-md overflow-hidden rounded-lg">
          <div className="">
            <img
              className="object-cover h-20 w-full"
              src={Img}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col px-3 h-5/6 mt-3">
            <div className="h-5">
              <span className="font-bold h-5">1000 Apex Coins</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray">Apex Lejend PC</span>
            </div>
            <div className="mt-2">
              <div className=" w-20 h-5 border-green-500 border flex justify-center rounded-md pb-3">
                <span className="text-secondary text-sm font-semibold">
                  Stok 999+
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="">
                <span className="font-bold text-primary text-xl">
                  Rp100.000
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className=" w-7/12 h-5 bg-green-500 bg-opacity-20 flex justify-center rounded-md pb-3">
                <span className="text-secondary text-sm font-semibold">
                  10 Menit Kirim
                </span>
              </div>
            </div>
            <div className="flex flex-col h-24 justify-end pb-2">
              <div>
                <span className="font-semibold text-gray text-md">
                  1000 produk terjual
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
