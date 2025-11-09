import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata={
    title:"Cabins",
};

//export const revalidate = 3600;// static page

export default async function Page({searchParams}){

    const resolvedSearchParams = await searchParams; // dinamic page
    console.log(resolvedSearchParams);

    const filter = resolvedSearchParams?.capacity ?? "all";

    return(
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Luxury Cabins</h1>
            <p className="text-primary-200 text-lg mb-10">Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending yout days exploring the dark forests around, or just relaxing in yout private hot tub under the stars. Enjoy nature&apos;s beauty in your own little home away from home. The perfect sport for a peaceful, calm vacation. Welcome to paradise.</p>
            <div className="flex justify-end mb-8">
                <Filter/>
            </div>
            

            {/* Suspense permite que apenas na parte de CabinList apareça o Spinner, em vez de ser na pagina toda (paragrafo + cabin list) */}
            {/* Para funcionar, a função async deverá está isolada => Componente (CabinList) */}
            {/*key vai permitir visualizar o spinner durante a filtragem, toda vez que o valor de filter mudar*/}
            <Suspense fallback={<Spinner/>} key={filter}>
                <ReservationReminder/>
                <CabinList filter={filter}/>
            </Suspense>


        </div>
    )
}