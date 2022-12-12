import React, { useEffect, useState } from "react";
import axios from "axios";
function Card() {

  const [data, setData] = useState();

  //fetching data dari api
  let fetchdata = async () => {
    console.log("halo");
    try {
      let res = await axios.get(
        "https://hammerhead-app-zfi4g.ondigitalocean.app/katalog"
      );
      console.log(res);
//simpan data hasil fetching api ke state
      setData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //saat render pertama kali akan memanggil function fetchdata
  useEffect(() => {
    fetchdata();
  }, []);

  //akan berjalan saat data pada state berubah
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
    <div className="text-center my-20 font-bold text-xl ">Katalog</div>
    <div className="grid grid-cols-3 gap-5 p-2">
    
      {//menamoilkan data menggunakan function map
        data != null &&
        data.map((res, index) => {
          return (
            <>
              <div className="flex flex-col items-center justify-center gap-2 bg-slate-100 p-4 m-2">
                <img src={res.image} className="w-32 h-32 object-cover" alt="gambarkatlog" />
                <div className="bg-slate-200 p-5 rounded-lg">{res.name}</div>
              </div>
            </>
          );
        })}</div>
    </>
  );
}

export default Card;
