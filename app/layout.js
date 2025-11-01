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
            <body className={`${josefin.className} 
            bg-primary-950 text-primary-100 min-h-screen`}>
                <header>
                    <Logo/>
                </header>
                <Navigation />
                <main>
                    {children}
                </main>
                <footer> Copyright by The Wild Oasis</footer>
            </body>
        </html>
    )
}