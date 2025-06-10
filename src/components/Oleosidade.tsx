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
    <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-white mb-6 text-center">
        Tratamento para Piscina Oleosa
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            Parece que sua piscina está sendo vítima de protetores solar, ou
            bronzeadores, que comumente causam esse problema. Não se preocupe,
            vamos lhe ajudar a resolver.
          </p>
        </div>

        {/* Tratamento Intensivo */}
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            Para resolver esse problema, vamos usar o{" "}
            <span className="font-semibold">
              Clarificante Intensivo da Genco
            </span>
          </p>

          <div className="text-center bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm mb-2">
              Quantidade recomendada:
            </p>
            <p className="text-2xl font-medium text-blue-400">
              {calcularDosagemIntensiva()} ml
            </p>
            <p className="text-gray-400 text-sm mt-1">
              de Clarificante Intensivo da Genco
            </p>
          </div>

          <p className="text-gray-400 text-sm text-center">
            Para aplicar o produto na piscina, adicione um pouco de água da
            piscina em um balde, coloque a quantidade recomendada dentro do
            balde, dilua e faça a aplicação pelas laterais da piscina.
          </p>
        </div>

        {/* Recomendação de Manutenção */}
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            Para evitar que a água fique oleosa, é recomendado o uso periódico
            do
            <span className="font-semibold">
              {" "}
              Clarificante Manutenção da Genco
            </span>
          </p>

          <div className="text-center bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm mb-2">Dosagem semanal:</p>
            <p className="text-2xl font-medium text-blue-400">
              {calcularDosagemManutencao()} ml
            </p>
            <p className="text-gray-400 text-sm mt-1">
              de Clarificante Manutenção da Genco
            </p>
          </div>

          <p className="text-gray-400 text-sm text-center">
            O tratamento preventivo pode ser feito semanalmente para manter a
            água da piscina sempre cristalina.
          </p>
        </div>

        {/* Botão Circular para Voltar */}
        <div className="flex justify-center">
          <button
            onClick={onVoltar}
            className="w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-700 border-2 border-blue-900 hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-400"
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
        </div>
      </div>
    </div>
  );
}
