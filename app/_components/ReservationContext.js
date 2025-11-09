"use client";

import { createContext, useContext, useState } from "react";

// --- Definições e Conceitos ---
// Context: 
// Ele permite que um componente no topo (o provedor) transmita uma informação (dados/funções) para qualquer componente aninhado, não importa a profundidade (número de componentes intermediários), que pode "sintonizar" e receber essa informação diretamente.

// O Context resolve o "Prop Drilling" permitindo que um componente pai (o Provedor) disponibilize uma informação para qualquer componente abaixo dele na árvore (o Consumidor),sem a necessidade de passar essa informação explicitamente através de props.
// ---




// 1) Criar o Context
// Cria o objeto Context. Este é o "túnel" de dados. 
// Ele não recebe argumentos aqui, mas você poderia passar um valor padrão (default value).
const ReservationContext = createContext();

// Define o estado inicial da reserva (intervalo de datas 'from' e 'to').
const initialState = { from: undefined, to: undefined }

// 2) Provedor (Provider)
// É um componente que "fornece" o valor do Context para os componentes filhos.
function ReservationProvider({children}){
    const [range, setRange] = useState(initialState);

    const resetRange = ()=>setRange(initialState);

    // O .Provider é a parte do Context que define o valor que será compartilhado.
    // A prop 'value' contém os dados (range) e as funções (setRange, resetRange) que qualquer consumidor do Context poderá acessar.
    return (<ReservationContext.Provider value={{range, setRange, resetRange}}>
        {children}
    </ReservationContext.Provider>);

}


// 3) Hook Customizado para Consumo (Consumidor) 🎣
// Este é um padrão comum. Ele encapsula o Hook useContext para tornar o uso mais simples e seguro.
function useReservation(){
    const context = useContext(ReservationContext);

    // Verificação de segurança: se o 'context' for undefined, significa que o Hook foi chamado fora de um <ReservationProvider>, o que é um erro.
    if(context === undefined) {
        throw new Error('Context was used outside provider')
    };

    return context;
}

export {ReservationProvider, useReservation}