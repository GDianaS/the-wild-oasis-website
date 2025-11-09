import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

// IMPORTANDO FONTE
// 1) Importar Nome
import {Josefin_Sans} from "next/font/google";
// 2) Configurando Fontes
const josefin = Josefin_Sans({
    subsets:['latin'],
    display: "swap",
});
//console.log(josefin)

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

// metadata quando em uma página específica, sobreescreve o metadata do layout
export const metadata={
    //title:"The Wild Oasis", //título aba navegador
    title:{
        template:"%s / The Wild Oasis", //%s placeholder
        default: "Welcome / The Wild Oasis"
    },
    description: "Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful montains and dark forests."
};

export default function RootLayout({children}){
    return(
        <html>
            <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
                
                <Header/>

                <div className="flex-1 px-8 py-12 grid">
                    <main className="max-w-7xl mx-auto w-full">
                        <ReservationProvider>
                            {children}
                        </ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    )
}

//Quando você coloca o Provedor no RootLayout, você está dizendo ao React que o Context (ReservationContext) deve estar acessível para toda a sub-árvore de componentes que ele envolve.
//Isso significa que, a partir de agora, qualquer componente dentro de qualquer página que chame o Hook useReservation() terá acesso imediato aos dados de reserva (range) e às funções para alterá-los (setRange, resetRange).