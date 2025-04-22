"use client";
import Image from "next/image";

interface AguaVerdeProps {
  litragem: string;
  onVoltar: () => void;
}

export default function AguaVerde({ litragem, onVoltar }: AguaVerdeProps) {
  const calcularDosagemAlgicida = () => {
    // 5 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 5).toFixed(2);
  };

  const calcularDosagemManutencao = () => {
    // 4 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 4).toFixed(2);
  };

  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Tratamento para Água Verde
      </h2>

      <div className="space-y-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Hm... Parece que algumas algas encontraram sua piscina, dando esse aspecto verde na água
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Para resolver esse problema, vamos usar o <span className="font-semibold">Algicida Choque da Genco</span>
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Quantidade recomendada:
            </p>
            <p className="text-2xl font-medium text-blue-600 dark:text-blue-400">
              {calcularDosagemAlgicida()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de Algicida Choque da Genco
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            Para aplicar o produto na piscina, adicione um pouco de água da piscina em um balde, 
            coloque a quantidade recomendada dentro do balde, dilua e faça a aplicação 
            pelas laterais da piscina.
          </p>
        </div>

        {/* Recomendação de Manutenção */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Para evitar que a água fique verde, é recomendado o uso periódico do 
            <span className="font-semibold"> Algicida Manutenção da Genco</span>
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Dosagem semanal:
            </p>
            <p className="text-2xl font-medium text-blue-600 dark:text-blue-400">
              {calcularDosagemManutencao()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de Algicida Manutenção da Genco
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            O tratamento preventivo pode ser feito semanalmente para 
            manter a água da piscina sempre cristalina.
          </p>
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
          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Voltar
          </p>
        </div>
      </div>
    </div>
  );
} 