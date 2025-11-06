"use client";
import { useState } from 'react'; // client component

// children: texto longo completo passado para o componente.(tudo que está dentro de <TextExpander>...</TextExpander>)

/*
Se isExpanded for true: A variável displayText recebe o texto completo (children).

Se isExpanded for false: O texto é limitado. A lógica faz:
- children.split(' '): Transforma a string de texto em uma lista (array) de palavras.
- slice(0, 40): Seleciona apenas as primeiras 40 palavras.
- join(' '): Junta as 40 palavras novamente em uma única string, com espaços.
- '...': Adiciona reticências para indicar que o texto foi cortado.
*/

function TextExpander({ children }) { 
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
