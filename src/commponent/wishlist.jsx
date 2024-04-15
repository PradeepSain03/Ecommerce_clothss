import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../store/cartSlice';;


export default function Wishlist(){
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
   

    const handleRemoveFromCart = (item) => {
        console.log(removeCart(item))
        dispatch(removeCart(item));
    };
    return (
        <>
         <div className='mt-[50px] mb-[50px]'>
            <h1 className='text-black font-bold text-[40px] text-center'>Our Fav Products</h1>
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 md:ms-[100px] md:me-[100px] ms-[50px] me-[50px] gap-10 '>
        {
           
           cartItems.map((item)=>(
                
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img class="rounded-t-lg" src={item.Productimage} alt="" />
  
    <div class="p-5">
       
            <div className='flex item-center justify-between'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-star text-yellow-500"></i> {item.rating}</h5>
            </div>
      
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Rs:-{item.price}</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         onClick={()=>handleRemoveFromCart(item.id)}
        >
            Remove
           
        </button>
        
    </div>
</div>

            ))
        }
        </div>
        </>
    )
}