import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// PLACEHOLDER DATA
// const cabin = {
//   id: 1,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

export async function generateMetadata({params}){
    const {cabinId} = await params;
    const {name} = await getCabin(cabinId);
    return {
        title: `Cabin ${name}`
    }
}

//Making dynamic pages static =: Pre-Render Pages
export async function generateStaticParams(){
  const cabins = await getCabins();

  const ids = cabins.map(cabin => ({
    cabinId: String(cabin.id)}));

  //console.log(ids); //Ids to pre-render

  return ids;
}

export default async function Page({params}) {
    const {cabinId} = await params;
    const cabin = await getCabin(cabinId);
  
    // A - Vai fazer cada consulta uma de uma vez -> vai demorar mais para carregar:  
    // const cabin = await getCabin(cabinId);
    // const settings = await getSettings();
    // const bookedDates = await getBookedDatesByCabinId(cabinId);

    // B - Carrega mais rápido: usando Promise.all
    // const [cabin, settings, bookedDates] = await Promise.all([
    //   getCabin(cabinId),
    //   getSettings(),
    //   getBookedDatesByCabinId(cabinId)
    // ])

    // C - Carrega mais rápido ainda: cada componente fetch os dados que precisa => Vai carregar em partes
    // _components/Reservation.js

    // const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;
    //console.log(await params); //{ cabinId: '1' } => nome da pasta

  return (
    <div className="max-w-6xl mx-auto mt-8">
      
      <Cabin cabin={cabin}/>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner/>}>
          <Reservation cabin={cabin}/>
        </Suspense>


      </div>
    </div>
  );
}
