import React from 'react';
function TailTemplate() {
return(
<>
<div class="text-white mt-0 border border-blue-800 py-0 w-full h-full">
    <section class="bg-red-900 sm:py-32 py-16">
        <div class="container mx-auto sm:flex-row flex-col flex ">
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-1.jpg" class="rounded-full w-24 h-24 mx-auto mb-2"/>
                <p class="italic text-gray-500 text-center my-3">I just finished my trial period and was so amazed with the support and results that I purchased this template.</p>
                <p class="font-bold  text-gray-400 text-center text-xl">Sandy Grain - Designer</p>
            </div>
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-2.jpg" class="rounded-full w-24 h-24 mx-auto mb-2"/>
                <p class="italic text-gray-500 text-center my-3">Searching for a great marketing automation app was difficult but thankfully I found this template.</p>
                <p class="font-bold  text-gray-400 text-center text-xl">Bruce Cashman - Developer</p>
            </div>
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-3.jpg" class="rounded-full w-24 h-24 mx-auto mb-2"/>
                <p class="italic text-gray-500 text-center my-3">Who would have thought that this template can provide such amazing results in just a few weeks of use.</p>
                <p class="font-bold  text-gray-400 text-center text-xl">Amanda Savage - Administrator</p>
            </div>
        </div>
    </section>
    <section class="bg-green-800 py-32">
        <div class="container mx-auto">
            <h1 class="text-5xl font-bold uppercase text-center text-gray-300">Features</h1>
            <div class="flex justify-center">
                <p class="w-1/2 text-center text-gray-300">This template was designed based on input from personal development coaches and popular trainers so it offers all</p>
            </div>
        </div>
    </section>
</div>
</>
)
}
export default TailTemplate;