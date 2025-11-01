import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
            <body className="bg-primary-950 text-primary-100 min-h-screen">
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