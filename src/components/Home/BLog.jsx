 
const BLog = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6">
                {
                    [1,23,4].map((item,index)=><div className="relative" >
                    <img src="/am.jpg" className="w-full h-96" alt="loading..." />
                    <p className="absolute top-2 left-2 bg-white border px-1 py-2 ">
                      <span className="block">25</span>
                      <span>may</span>
                    </p>
                    <div className="absolute   bottom-12 px-5 text-white text-2xl">
                       <p>জি আই পণ্য হিসেবে স্বীকৃতি পেল চাঁপাইনবাবগঞ্জ  ও রাজশাহীর ফজলি আম</p>
                    </div>
                  </div>)
                }
            </div>
          <div className="text-center my-5">
          <button className="uppercase  border-2 py-2 px-3 text-2xl">load product</button>
          </div>
        </div>
    );
};

export default BLog;