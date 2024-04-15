import React from "react";


export default function Footer(){
    return (
        <>
        <footer class="mt-[20px] bg-black dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class=" md:mb-0">
            
                  <img src="https://t4.ftcdn.net/jpg/03/98/50/21/360_F_398502103_D5W66p1vXwdKmLslqswopS5Dvz0JtAjx.jpg" class="rounded-[200px] me-3 w-[150px]" alt=" Logo" />
                
              
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6  uppercase text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline">PS</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 uppercase text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6  uppercase text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      
    
    </div>
</footer>
        </>
    )
}