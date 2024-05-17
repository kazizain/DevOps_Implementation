import React from "react";

function Project()
{

    return(

    <>
    
    <form class="flex flex-col md:flex-row gap-3 mt-20">
    <div class="flex">
        <input type="text" placeholder="Search for Projects"
			class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			/>
        <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    <select id="pricingType" name="pricingType"
		class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">C++</option>
		<option value="Freemium">Java</option>
		<option value="Free">Go Lang</option>
		<option value="Paid">.Net Core</option>
	</select>
</form>
    
    
    </>

    )

}

export default Project