"use client";

interface ManutencaoProps {
  litragem: string;
  onVoltar: () => void;
}

export default function Manutencao({ litragem, onVoltar }: ManutencaoProps) {
  const calcularDosagemCloro = () => {
    // 4g para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 4).toFixed(2);
  };

  const calcularDosagemClarificante = () => {
    // 1.5ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 1.5).toFixed(2);
  };

  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Manutenção Diária da Piscina
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            No dia a dia, as piscinas devem ter pelo menos dois parâmetros bem
            alinhados para evitar problemas futuros, para garantir que sua água
            fique cristalina pelo máximo de tempo possível, gastando o mínimo
            necessário.
          </p>
        </div>

        {/* Manutenção do pH */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            O primeiro parâmetro deve ser seu pH. O pH é crucial estar
            estabilizado em uma média de 7,2 a 7,8 para que todos os demais
            produtos utilizados funcionem corretamente. Tentar qualquer
            tratamento com o pH desregulado resulta em desperdício de produto,
            já que não terão eficácia.
          </p>
        </div>

        {/* Manutenção do Cloro */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Por fim, garantir que o cloro atenda os níveis necessários para que
            a piscina fique sempre limpa e desinfectada de quaisquer micro
            organismos ou substâncias terceiras. Recomendamos para o dia a dia,
            o uso do{" "}
            <span className="font-semibold">Cloro 3 em 1 da Genco</span>.
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 text-center">
              Dosagem de Cloro recomendada:
            </p>
            <p className="text-2xl font-medium text-emerald-600 dark:text-emerald-400">
              {calcularDosagemCloro()}g
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de Cloro 3 em 1 da Genco
            </p>
          </div>
        </div>

        {/* Clarificação */}
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Também é interessante periodicamente realizar uma clarificação e
            aspiração da piscina, usando o{" "}
            <span className="font-semibold">
              Clarificante e Auxiliar de Filtração Genco
            </span>
            . Isso pode ser feito sempre que notar pequenas sujeiras na
            superfície da piscina, que não saem fácil com a peneira.
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Dosagem de Clarificante recomendada:
            </p>
            <p className="text-2xl font-medium text-cyan-600 dark:text-cyan-400">
              {calcularDosagemClarificante()}ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de Clarificante e Auxiliar de Filtração Genco
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm text-center italic">
            Após aplicar e aguardar por pelo menos 12 horas, faça a aspiração da
            piscina com a bomba na posição Filtrar.
          </p>
        </div>

        {/* Botão Circular para Voltar */}
        <div className="flex flex-col items-center mt-6">
          <button
            onClick={onVoltar}
            className="w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-500 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
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
