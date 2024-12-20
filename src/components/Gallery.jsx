import React , {useEffect}from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Gallery() {

    useEffect(()=>{
        Aos.init({duration:2000});
    
       },[])

  return (
    

<div class="grid grid-cols-2 md:grid-cols-4 bg-white gap-4 pt-10 pb-10">
    <div class="grid gap-4">
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ksamill-1.jpg/800px-Ksamill-1.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://alpventurer.com/wp-content/uploads/2015/11/Valbone-Valley-National-Park-22.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://northernalbania.com/wp-content/uploads/2023/07/Lumi-i-Shales-Bee-Eco-Guest-House.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://pohcdn.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/live_banner/sofia-1.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://www.europaweekend.se/wp-content/uploads/2015/09/att-gora-i-barcelona-europaweekend.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSXhHRbMXcJiVNM4N-ou4EACb33dalhgYrGbIymJDB7aJELjTAvLYM-pbdB9buKjYcKaSuzsmUevm2s3lMIne70VfuYEn-xRXFiM3Y6Qw" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://cdn.mos.cms.futurecdn.net/HgDjfQuhdcoBKL7BDLSyW5-1200-80.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://media.cntraveler.com/photos/661541f774d4d384aa33df01/16:9/w_1280,c_limit/dolomites-GettyImages-155382713.jpeg" alt=""/>
        </div>
        <div data-aos="fade-up">
            <img class="h-auto max-w-full shadow-lg rounded-lg" src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" alt=""/>
        </div>
    </div>
</div>

  )
}

export default Gallery
