"use client";
import Image from "next/image";

interface AguaTurvaProps {
  litragem: string;
  onVoltar: () => void;
}

export default function AguaTurva({ litragem, onVoltar }: AguaTurvaProps) {
  const calcularDosagemClarificante = () => {
    // 6 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 6).toFixed(2);
  };

  const calcularDosagemHTH = () => {
    // 20 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 20).toFixed(2);
  };

  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Tratamento para Água Turva
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Ixi... parece que sua piscina está com algum produto em excesso, ou com alguma reação química inesperada na água. Não se preocupe, vamos resolver.
          </p>
          
          <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Esse problema pode ser causado por alguns fatores... entre eles estão o seguinte:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Desequilíbrio do pH</li>
              <li>Excesso de resíduos orgânicos e outras sujeiras</li>
              <li>Areia do filtro saturada</li>
              <li>Excesso de Ácido Cianúrico</li>
            </ul>
          </div>
        </div>

        {/* Tratamento para Água Moderadamente Turva */}
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Para resolver, primeiramente é necessário saber o quão turva a água está. Caso consiga ver o fundo da piscina, será necessário o uso do <span className="font-semibold">Clarificante Genco</span>.
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Quantidade recomendada:
            </p>
            <p className="text-2xl font-medium text-blue-600 dark:text-blue-400">
              {calcularDosagemClarificante()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de Clarificante Genco
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Depois de aplicar o produto, mantenha o filtro na posição RECIRCULAR, deixando o produto agir por 5 a 10 minutos.
            </p>
            <p>
              Em seguida, desligue a bomba, e deixe a piscina em repouso por aproximadamente 12 horas.
            </p>
            <p>
              Após isso, faça a aspiração da sujeira depositada no fundo da piscina, usando o filtro na posição de DRENAR.
            </p>
            <p>
              Ao concluir a drenagem, reponha a água drenada da piscina.
            </p>
          </div>
        </div>

        {/* Tratamento para Água Muito Turva */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Caso não seja possível ver o fundo da piscina, é recomendado usar o <span className="font-semibold">HTH Solução Água Turva</span>.
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Quantidade recomendada:
            </p>
            <p className="text-2xl font-medium text-blue-600 dark:text-blue-400">
              {calcularDosagemHTH()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de HTH Solução Água Turva
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Aplique este produto seguindo os mesmos passos do Clarificante Genco.
          </p>
        </div>

        {/* Observação sobre pH elevado */}
        <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            Caso sua piscina esteja com pH elevado, ou seja, igual ou acima de 8, com o passar de algum tempo ela deve voltar ao normal naturalmente, ou pode optar por usar um redutor de pH, como o Redutor de pH Líquido da Genco.
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