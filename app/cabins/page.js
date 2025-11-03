import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

export const metadata={
    title:"Cabins",
};

export default function Page(){

    return(
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Luxury Cabins</h1>
            <p className="text-primary-200 text-lg mb-10">Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending yout days exploring the dark forests around, or just relaxing in yout private hot tub under the stars. Enjoy nature&apos;s beauty in your own little home away from home. The perfect sport for a peaceful, calm vacation. Welcome to paradise.</p>

            {/* Suspense permite que apenas na parte de CabinList apareça o Spinner, em vez de ser na pagina toda (paragrafo + cabin list) */}
            {/* Para funcionar, a função async deverá está isolada => Componente (CabinList) */}
            <Suspense fallback={<Spinner/>}>
                <CabinList/>
            </Suspense>


        </div>
    )
}