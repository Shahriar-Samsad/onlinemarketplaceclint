 import {AiFillStar} from 'react-icons/ai'
const FeedBack = () => {
    return (
        <div className="container mx-auto bg-green-200 py-3 px-5 rounded-md">
            <h1 className="text-3xl capitalize border-b-4 border-indigo-500 my-5"> Customer feedback</h1>
            <div className="grid grid-cols-3 ">
             { [1,2,3].map((item,index)=><div className='flex justify-center flex-col items-center p-5' key={index}>
             <div className='flex'>
             {
                [1,2,3,4,5].map((item,index)=><AiFillStar className='text-yellow-500' key={index}/>)
             }
             </div>
                
                <p className='my-5'>Mango is my favoutire food so never try it eat so happy</p> 
                <p className='my-3'><span className='text-black font-extrabold'>ABCD </span>- Usb Bank</p>  
             </div>)}
            </div>
        </div>
    );
};

export default FeedBack;