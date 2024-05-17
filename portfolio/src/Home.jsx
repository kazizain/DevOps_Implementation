import React from "react";

function Home()
{
return(

    <>
    
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About me</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Qazi Zain <span class="text-indigo-600">Software Engineer & DevOps Practioner</span>
            </h2>
            <p class="text-gray-700">
                A passoinate Web Developer works on React js as a frontend,
                And for Backend i implemented Java springboot, Php.
                Also A devOps Practioner and learning geek.
                currently Studying in 8th Semster and done some virtual interns on remote.
            </p>
        </div>
    </div>
</div>
    
    </>

)
}

export default Home