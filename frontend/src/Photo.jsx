import React from "react";



function Photo() {
    const images = [
        { url: "/car.webp", name: "Ferrari Challenge" },
        { url: "/women.webp", name: "Ferrari " },
        { url: "/3rd.webp", name: "Women" },
        { url: "/4th.webp", name: "Skit Pravah" },
        { url: "/5th.webp", name: "Ferrari Challenge" },
        { url: "/6th.webp", name: "Ferrari Challenge" },
        { url: "/car.webp", name: "Ferrari Challenge" },
        { url: "/6th.webp", name: "Ferrari Challenge" },
        { url: "/4th.webp", name: "Ferrari Challenge" }
    ];
    
    return (
        <div className="w-full  lg:flex lg:justify-center lg:flex-wrap lg:gap-8">
            {images.map((image, index) => (
               <img className=" object-center lg:h-[90vh]  " key={index} src={image.url} alt={image.name} />
            ))}
        </div>
    );
}

export default Photo;
