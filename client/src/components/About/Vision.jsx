import React from "react";
import vision1 from "../../assets/about/vision1.jpg";
import vision2 from "../../assets/about/vision2.jpg";
import vision3 from "../../assets/about/vision3.jpg";

const Vision = () => {
  return (
    <section className="w-auto h-[633px] pt-[20px] pb-[80px]  bg-white ">
      <div className="mx-24 flex  gap-[82px] ">
        <div className="w-[50%] h-[565px] relative ">
          <div className="w-[441px] h-[291px]  ">
            <img src={vision1} className="object-cover rounded-[8px]" alt="" />
          </div>
          <div className="w-[397px] h-[265px] mt-1  ">
            <img src={vision3} className="object-cover rounded-[8px]" alt="" />
          </div>
          <div className="w-[279px] h-[419px]  absolute top-10 left-[280px] ">
            <img src={vision2} className="object-cover rounded-[8px]" alt="" />
          </div>
        </div>
        <div className="w-[50%] h-[565px]  flex items-end  justify-end pl-12 ">
          <div className="w-[604px] h-[398px]  ">
            <div>
              <div className="text-black h-[75px] font-semibold text-[80px]">
                Our
              </div>
              <div className="text-[#5FA016]  h-[75px] font-semibold text-[80px]">
                Vision
              </div>
            </div>
            <div className="mt-12">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                vitae provident quaerat! Hic nisi praesentium facere, tempore
                illum enim inventore pariatur laboriosam ea animi fugiat atque
                ex in sequi placeat. Consequatur nihil distinctio ut commodi
                molestias iste eius delectus sed cum inventore fugiat totam
                ullam possimus, magni soluta maxime facere! Ipsum earum non
                rerum aperiam quae autem laudantium beatae animi. Dicta,
                excepturi obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
