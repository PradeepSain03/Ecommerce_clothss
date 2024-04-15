import React from 'react';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <>
      <div  className='bg-black flex justify-between items-center'>
        
        <div class=" md:mb-0 p-2 ms-[20px]">
            
            <img src="https://t4.ftcdn.net/jpg/03/98/50/21/360_F_398502103_D5W66p1vXwdKmLslqswopS5Dvz0JtAjx.jpg" class="rounded-[200px] me-3 w-[100px]" alt=" Logo" />
          
        
    </div>
          <div className="ms-auto flex gap-2 p-2 text-center">
          <div className='w-[50px] h-[50px] bg-white rounded-[50px] me-[20px]'>
          <Link to="/" ><i class="fa-solid fa-house text-xl font-bold mt-[8px] "></i></Link>
          </div>
         
          <div className='w-[50px] h-[50px] bg-white rounded-[50px] me-[20px]'>
          <Link to="/wishlist" ><i class="fa-regular fa-heart text-xl font-bold mt-[9px]"></i></Link>
          </div>
            
          </div>
        
      </div>
  

   
    
    </>
  );
}

export default Navbar1;
