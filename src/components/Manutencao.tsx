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
    <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-white mb-6 text-center">
        Manutenção Diária da Piscina
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            No dia a dia, as piscinas devem ter pelo menos dois parâmetros bem
            alinhados para evitar problemas futuros, para garantir que sua água
            fique cristalina pelo máximo de tempo possível, gastando o mínimo
            necessário.
          </p>
        </div>

        {/* Alcalinidade */}
        <div className="bg-indigo-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            1. Alcalinidade A alcalinidade total mede a capacidade da água em
            neutralizar ácidos e, assim, estabilizar o pH. Manter esse parâmetro
            dentro da faixa ideal, geralmente entre 80 e 120 ppm, é crucial para
            evitar tanto a corrosão de equipamentos e superfícies quando baixa,
            quanto a formação de incrustações quando excessiva. Em essência, a
            alcalinidade é o pilar que garante que o pH não oscile com os
            lançamentos de produtos químicos ou variações ambientais, protegendo
            a integridade da piscina e maximizando o desempenho dos
            desinfetantes.
          </p>
        </div>

        {/* pH */}
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            2. pH Com a alcalinidade bem ajustada, é hora de assegurar que o pH
            se mantenha estável entre 7,2 e 7,8. Essa faixa é indispensável para
            que os desinfetantes, como o cloro, atuem com eficiência, evitando
            desperdício e garantindo que os tratamentos não se percam com um pH
            desregulado. Além disso, um pH adequado reduz o risco de irritações
            em pele e olhos, proporcionando conforto durante o uso da piscina.
          </p>
        </div>

        {/* Manutenção do Cloro */}
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            Por fim, garantir que o cloro atenda os níveis necessários para que
            a piscina fique sempre limpa e desinfectada de quaisquer micro
            organismos ou substâncias terceiras. Recomendamos para o dia a dia,
            o uso do{" "}
            <span className="font-semibold">Cloro 3 em 1 da Genco</span>.
          </p>

          <div className="text-center bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm mb-2 text-center">
              Dosagem de Cloro recomendada:
            </p>
            <p className="text-2xl font-medium text-emerald-400">
              {calcularDosagemCloro()}g
            </p>
            <p className="text-gray-400 text-sm mt-1">
              de Cloro 3 em 1 da Genco
            </p>
          </div>
        </div>

        {/* Clarificação */}
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="text-gray-300 mb-4 text-center">
            Para manter a água sempre cristalina, recomendamos o uso do{" "}
            <span className="font-semibold">Clarificante da Genco</span>.
          </p>

          <div className="text-center bg-gray-800/50 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm mb-2 text-center">
              Dosagem de Clarificante recomendada:
            </p>
            <p className="text-2xl font-medium text-emerald-400">
              {calcularDosagemClarificante()} ml
            </p>
            <p className="text-gray-400 text-sm mt-1">
              de Clarificante da Genco
            </p>
          </div>
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
