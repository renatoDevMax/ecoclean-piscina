"use client";

interface OleosidadeProps {
  litragem: string;
  onVoltar: () => void;
}

export default function Oleosidade({ litragem, onVoltar }: OleosidadeProps) {
  const calcularDosagemIntensiva = () => {
    // 14 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 14).toFixed(2);
  };

  const calcularDosagemManutencao = () => {
    // 7 ml para cada 1000 litros
    const litros = parseFloat(litragem);
    return ((litros / 1000) * 7).toFixed(2);
  };

  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Tratamento para Piscina Oleosa
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Parece que sua piscina está sendo vítima de protetores solar, ou bronzeadores, que comumente causam esse problema. Não se preocupe, vamos lhe ajudar a resolver.
          </p>
        </div>

        {/* Tratamento Intensivo */}
        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Caso seja a primeira vez da aplicação, ou sua piscina está sendo muito utilizada pelos banhistas, use a quantidade recomendada abaixo do <span className="font-semibold">HTH Elimina Oleosidade</span>
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Dosagem para primeira aplicação ou uso intensivo:
            </p>
            <p className="text-2xl font-medium text-amber-600 dark:text-amber-400">
              {calcularDosagemIntensiva()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de HTH Elimina Oleosidade
            </p>
          </div>
        </div>

        {/* Tratamento de Manutenção */}
        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Caso seja apenas uma manutenção periódica (Uma vez por semana) com baixo fluxo de banhistas, use a quantidade recomendada abaixo
          </p>

          <div className="text-center bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              Dosagem para manutenção semanal:
            </p>
            <p className="text-2xl font-medium text-teal-600 dark:text-teal-400">
              {calcularDosagemManutencao()} ml
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              de HTH Elimina Oleosidade
            </p>
          </div>
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