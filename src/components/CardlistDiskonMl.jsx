import Img3 from "../logo/ml.png"
const CardList = () => {
  return (
    <div className="mt-5">
      <div className="h-full w-full flex justify-evenly">
        <div className="bg-white h-auto w-52 filter drop-shadow-md overflow-hidden rounded-lg">
          <div className="">
            <img
              className="object-cover h-20 w-full"
              src={Img3}
              alt=""
            />
          </div>
          <div className="flex flex-col px-3 h-5/6 mt-3">
            <div className="h-5">
              <span className="font-bold h-5">366 Diamonds</span>
            </div>
            {/* <div>
              <span className="text-sm font-semibold text-gray">Mobile Mobile</span>
            </div> */}
            <div className="mt-2">
              <div className=" w-20 h-5 border-yellow-600 border flex justify-center rounded-md pb-3">
                <span className="text-red text-sm font-semibold">
                  Stok 500
                </span>
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
            <div className="flex flex-col justify-end h-16 pb-4">
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
