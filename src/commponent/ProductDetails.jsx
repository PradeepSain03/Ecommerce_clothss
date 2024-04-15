import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Size from './Size';
import { addToCart } from '../store/cartSlice';

export default function ProductDetails() {
    const data1 = useSelector((state) => state.data.data);
    const dispatch = useDispatch();
   
    const cartItems = useSelector(state => state.cart.items);
    const { id } = useParams()

    const handleAddToCart = (item) => {
        dispatch(addToCart(item)); 
        alert("data added successfully")
    };
    console.log(cartItems)

    return (
        <>
            <div className='grid md:grid-cols-2 gap-10 mt-[10px] me-[20px] ms-[20px]'>


                {

                    data1.map((item) => {
                        if (item.id == id) {
                            return (
                                <>
                                    <div >
                                      <div className='grid grid-cols-2'>
                                      <img src={item.Productimage} alt=""  className='me-[10px] mb-[10px]' />
                                        <img src={item.Detailimage1} alt=""  className=' mb-[10px]'/>
                                      </div>
                                        <img src={item.Detailimage2} alt=""  className=' ms-[50px] h-[50%] mb-[10px]'/>
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-3xl mb-[5px]'>{item.title}</h1>
                                        <h1 className='font-bold text-3xl mb-[5px] text-[#848691]'>{item.description}</h1>
                                        <h1 className='font-bold text-3xl mb-[5px] '>Rs.{item.price}</h1>
                                        <h1 className='font-bold text-xl mb-[5px] text-[#41bfd3]'>Inclusive Of All Taxes</h1>
                                        <div className='mb-[10px]'>
                                            {
                                                item.category == 'Jeans' ? <Size small='28' large="32" m='30' exLarge="36" /> : <Size small='S' large="L" m='M' exLarge="XL" />
                                            }
                                        </div>
                                        <button class="bg-[#ff3e6c] mb-[10px] hover:bg-blue-700 text-white font-bold py-3 px-20 border border-blue-700 rounded text-xl"
                                        onClick={() => handleAddToCart(item)}
                                        >
                                        <i class="fa-solid fa-heart  font-bold"></i>  WishList
                                        </button>

                                        <p>{item.productDetails}</p>

                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}
