import { Available1 } from "../svg/Available1";
import { Available2 } from "../svg/Available2";
import { Image } from "./Image";

function Available({availableData}) {
return (
  <div className="p-4 bg-white rounded-lg border border-gray-600/10">
  <img
    src={availableData.image}
    alt={availableData.alt}/>

  <div className="p-6">
    <h4 className="text-2xl font-bold cursor-pointer">{availableData.name}</h4>
    <div className="mt-2">
      <span className="text-xl font-extrabold text-blue-600">${availableData.price}</span>
    </div>

  </div>
  <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
    <div className="flex items-center">
      <Available1 />
      <p><span className="font-bold text-gray-900">3</span> {availableData.button1}</p>
    </div>
    <div className="flex items-center">
      <Available2 />
      <p><span className="font-bold text-gray-900">2</span> {availableData.button2}</p>
    </div>
  </div>
</div>

);
}

export default function AvailableSection(){
    return (
        <section>
    <div className="container">
      <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Properties
        </span>
        <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          Grab your Dream Property
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Available availableData={{
          image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
          alt: "property",
          name: "Modern Design villa",
          price: "1,500",
          button1: "View Details",
          button2: "Book Now"
        }} />


        <Available availableData={{
          image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
          alt: "property",
          name: "Modern Design villa",
          price: "1,500",
          button1: "View Details",
          button2: "Book Now"
        }} />

<Available availableData={{
          image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
          alt: "property",
          name: "Modern Design villa",
          price: "1,500",
          button1: "View Details",
          button2: "Book Now"
        }} />
        <Available availableData={{
          image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
          alt: "property",
          name: "Modern Design villa",
          price: "1,500",
          button1: "View Details",
          button2: "Book Now"
        }} />


<Available availableData={{
          image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
          alt: "property",
          name: "Modern Design villa",
          price: "1,500",
          button1: "View Details",
          button2: "Book Now"
        }} />
      </div>
    </div>

  </section>
    );
}