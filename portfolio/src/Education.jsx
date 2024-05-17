import React from "react";

function Education ()
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
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">My Education</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Software Engineer <span class="text-indigo-600">At Fast Nuces Karachi</span>
            </h2>
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Skills</span>

            
<ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
        Web Developer
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Frontend skills having (Html,css,javascript,react js, tailwind)</li>
            <li>Backend skills having (SpringBoot,php/laravel,node js)</li>
            <li>DataBase skills having (Mysql,MongoDB)</li>
        </ol>
    </li>
    <li>
        DevOps Enginer
        <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Skills in Azure cloud and its services</li>
            <li>Skills on Azure DevOps and git as a source Control</li>
            <li>Having Skills in CI/CD and release pipline , in deployment ring method</li>
        </ul>
    </li>

</ul>

            
        </div>
    </div>
</div>


</>

    )
}

export default Education