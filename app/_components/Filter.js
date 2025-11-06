"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter(){
    const searchParams = useSearchParams(); // 1. Lê os parâmetros atuais (ex: ?capacity=small)
    const router = useRouter(); // 2. Objeto para navegar/mudar a URL
    const pathname = usePathname(); // 3. O caminho atual da URL (ex: /cabins)

    const activeFilter = searchParams.get('capacity') ?? "all";

    function handleFilter(filter){
        //console.log(filter); // all, small, medium, large
        const params = new URLSearchParams(searchParams);

        //SET : modificar um parâmetro de consulta (query parameter) na URL sem recarregar a página.
        // ex: params.set("capacity", "small") 
        //?capacity=small
        params.set("capacity", filter); // modifica o parametro "capacity" com o valor de filter
        router.replace(`${pathname}?${params.toString()}`, {scroll: false}); // atualiza a URL
    }

    return(
        <div className="border border-primary-800 flex">

            <Button
                filter="all"
                handleFilter={handleFilter}
                activeFilter={activeFilter}>
                All Cabins
            </Button>

            <Button
                filter="small"
                handleFilter={handleFilter}
                activeFilter={activeFilter}>
                1&mdash;3 guests
            </Button>

            <Button
                filter="medium"
                handleFilter={handleFilter}
                activeFilter={activeFilter}>
                4&mdash;7 guests
            </Button>
            
            <Button
                filter="large"
                handleFilter={handleFilter}
                activeFilter={activeFilter}>
                8&mdash;12 guests
            </Button>

        </div>
    )
}

function Button({filter, handleFilter, activeFilter, children}){
    return(
        <button className={`px-5 py-2 hover:bg-primary-700 
        ${filter === activeFilter ?'bg-primary-700 text-primary-50':''}`}
            onClick={() => handleFilter(filter)}>
                {children}
        </button>
    )
    
}

export default Filter;
