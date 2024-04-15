import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setSearchResults } from '../store/searchSlice';
import { Link } from 'react-router-dom';
export default function Header() {
    const data = useSelector((state) => state.data.data);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const searchResults = useSelector((state) => state.search.searchResults);
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            dispatch(setSearchResults([])); 
        } else {
            const results = data.filter(item =>
                item.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            dispatch(setSearchResults(results));
        }
    };

    const handleInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
        if (e.target.value.trim() === '') {
            dispatch(setSearchResults([])); 
        }
    };
    return (
        <>
            <div className="md:flex justify-between md:ms-[30px] md:me-[30px] mt-[20px] items-center">
                <div class="custom-select" >
                    <h1 className="text-[#c8c8c8]">Location</h1>
                    <select className=" border-0 border-gray-300 font-bold text-gray-900 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option className="text-black font-bold">New york,USA</option>
                        <option className="text-black font-bold">Dehli,india</option>
                        <option className="text-black font-bold">Kolkata,India</option>

                    </select>
                </div>
                <div className="mt-[10px]  mb-[30px]  ms-[50px] float-end">
                    <input type="text" className=" w-[250px] md:w-[300px] lg-w-[300px] rounded-[50px]" placeholder="Search"
                        onChange={handleInputChange}/>
                         <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass font-bold text-2xl ms-[5px]"></i></button>
                </div>
            </div>


            <div className='mt-[50px] mb-[50px]'>
           
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 md:ms-[100px] md:me-[100px] ms-[50px] gap-10 '>
        {
           
           searchResults.map((item)=>(

              
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
                    <img class="rounded-t-lg" src={item.Productimage} alt="" />
              
                <div class="p-5">
                   
                        <div className='flex item-center justify-between'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><i class="fa-solid fa-star text-yellow-500"></i> {item.rating}</h5>
                        </div>
                  
                    <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Rs:-{item.price}</p>
                    <Link to={`/product/${item.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        See more
                       
                    </Link>
                </div>
            </div>
                
           )
                
            

            )
        }
        </div>
            


        </>
    )
}