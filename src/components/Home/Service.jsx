 
const Service = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 place-content-center justify-center items-center gap-6 my-5">
               { [,1,1,2].map((item,index)=><div className="p-5 text-center border" key={index}>
                 <div className="flex justify-center my-5">
                 <img src="vercel.svg" width="100px" height="100px"/> 
                 </div>
                 <h1 className="text-3xl">fresh food</h1>
                 <p className="my-5 text-lg">We try to keep our foods organic and fresh. Our aim is to deliver adulteration, additives & chemical-free fresh food.</p>
                </div>)}
            </div>
        </div>
    );
};

export default Service;