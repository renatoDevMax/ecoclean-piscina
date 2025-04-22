"use client";
import { useState } from 'react';

interface AlcalinidadeProps {
  litragem: string;
  onVoltar: () => void;
}

export default function Alcalinidade({ litragem, onVoltar }: AlcalinidadeProps) {
  const [gotas, setGotas] = useState('3');

  const calcularDosagemPHCerto = () => {
    // Para cada gota faltante (até chegar em 10), 17g para cada 1000L
    const litros = parseFloat(litragem);
    const gotasNecessarias = 10 - parseInt(gotas);
    
    // Se o número de gotas é >= 10, não precisa de correção
    if (gotasNecessarias <= 0) return '0';
    
    return ((litros / 1000) * 17 * gotasNecessarias).toFixed(2);
  };

  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Tratamento de Alcalinidade
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A alcalinidade é um parâmetro importante para o controle da água. Atuando como um "tampão" 
            cuja função será a de estabilizar seu pH por mais tempo, impedindo variações bruscas, 
            reduzindo a necessidade de correções a todo momento do pH.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para estabilizar seu pH, recomendamos o uso do <span className="font-semibold">pH Certo, da Genco</span>.
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3 text-center">
            Como medir a alcalinidade
          </h3>
          
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Para medir sua alcalinidade atual, tenha um kit de teste de alcalinidade. Use o recipiente 
              do teste de alcalinidade, preenchendo com a água da piscina. Evite pegar a água da superfíce, 
              sempre preencha o recipiente com água a partir de uns 30 centímetros da superfície da piscina.
            </p>
            
            <p>
              Com o recipiente preenchido na devida marcação, adicione 3 gotas do AT1. (reagente 1)
            </p>

            <p>
              Posteriormente, use o AT2 (reagente 2), pingando de gota em gota, diluindo a gota no recipiente movendo 
              suavemente o recipiente. E conte quantas gotas são necessárias para trocar completamente a 
              cor do recipente de roxo, para amarelo (alguns testes podem variar a cor inicial e final, 
              mas sempre uma cor diferente no primeiro reagente, modificando para a segunda cor com o segundo reagente).
            </p>

            <p>
              Conte quantas gotas foram necessárias para a troca de cor, e informe o valor logo abaixo.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <label className="block text-gray-700 dark:text-gray-300 text-center mb-3">
            Número de gotas necessárias para mudança de cor:
          </label>
          
          <div className="flex justify-center mb-4">
            <input
              type="number"
              className="w-24 px-4 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white text-lg font-medium"
              value={gotas}
              onChange={(e) => setGotas(e.target.value)}
              min="1"
              max="20"
            />
          </div>

          {parseInt(gotas) < 10 ? (
            <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Quantidade de pH Certo da Genco necessária:
              </p>
              <p className="text-2xl font-medium text-purple-600 dark:text-purple-400">
                {calcularDosagemPHCerto()}g
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                para corrigir a alcalinidade da piscina
              </p>
            </div>
          ) : (
            <div className="text-center bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-green-600 dark:text-green-400 font-medium">
                ✔️ Sua alcalinidade já está ideal!
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Nenhuma correção necessária
              </p>
            </div>
          )}
        </div>

        {/* Link para tutorial de vídeo */}
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Ficou com dificuldade para identificar sua alcalinidade atual, acesse o link abaixo:
          </p>
          <a
            href="https://www.youtube.com/watch?v=z0z-XZMeraw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Como medir a alcalinidade da piscina ▶
          </a>
        </div>

        {/* Botão Circular para Voltar */}
        <div className="flex flex-col items-center mt-6">
          <button 
            onClick={onVoltar}
            className="w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
          </button>
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            Voltar
          </p>
        </div>
      </div>
    </div>
  );
} 