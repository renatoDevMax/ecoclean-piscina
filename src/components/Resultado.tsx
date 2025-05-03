"use client";
import Image from "next/image";

interface ResultadoProps {
  formData: {
    comprimento: string;
    largura: string;
    profundidade: string;
    ph: string;
  };
  calcularLitragem: () => string;
  calcularDosagem: () => string;
  onVoltar: () => void;
  onAguaVerde: () => void;
  onAguaTurva: () => void;
  onAlcalinidade: () => void;
  onOleosidade: () => void;
  onManutencao: () => void;
}

export default function Resultado({
  formData,
  calcularLitragem,
  calcularDosagem,
  onVoltar,
  onAguaVerde,
  onAguaTurva,
  onAlcalinidade,
  onOleosidade,
  onManutencao,
}: ResultadoProps) {
  return (
    <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-6 text-center">
        Resultados
      </h2>

      <div className="space-y-6">
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Litragem total da piscina:
          </p>
          <p className="text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2">
            {calcularLitragem()} Litros
          </p>
        </div>

        {parseFloat(formData.ph) < 7.2 ? (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <p className="text-red-600 dark:text-red-400 font-medium mb-2">
              ⚠️ Parece que o pH da sua piscina ainda não é o ideal
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Recomendamos adicionar:
              </p>
              <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
                {calcularDosagem()}g
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Cálculo baseado no pH + Barrilha Genco
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-4">
                Em alcalinidade de 100ppm (comum)
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-4">
                Após adicionar o produto, aguarde pelo menos 2 horas antes de
                continuar o tratamento
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <p className="text-green-600 dark:text-green-400 font-medium">
              ✔️ Seu pH já está controlado
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Nenhuma dosagem necessária
            </p>
          </div>
        )}

        {/* Botões Circulares */}
        <div className="mt-8">
          <h3 className="text-lg font-light text-gray-700 dark:text-gray-300 mb-4 text-center">
            Tratamentos Disponíveis
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {/* Botão Manutenção Comum */}
            <div className="flex flex-col items-center">
              <button
                onClick={onManutencao}
                className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/manutencao.jpg"
                    alt="Manutenção Comum"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </button>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                Manutenção Comum
              </p>
            </div>

            {/* Botão Água Verde */}
            <div className="flex flex-col items-center">
              <button
                onClick={onAguaVerde}
                className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/aguaverde.jpg"
                    alt="Água Verde"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </button>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                Água Verde
              </p>
            </div>

            {/* Botão Água Turva */}
            <div className="flex flex-col items-center">
              <button
                onClick={onAguaTurva}
                className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/aguabranca.jpg"
                    alt="Água Turva"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </button>
              <p className="mt-2 text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                Água Turva
                <br />
                (esbranquiçada)
              </p>
            </div>

            {/* Botão Alcalinidade */}
            <div className="flex flex-col items-center">
              <button
                onClick={onAlcalinidade}
                className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/alcalinidade.jpg"
                    alt="Alcalinidade"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </button>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                Alcalinidade
              </p>
            </div>

            {/* Botão Piscina Oleosa */}
            <div className="flex flex-col items-center">
              <button
                onClick={onOleosidade}
                className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 shadow-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/oleosidade.jpg"
                    alt="Piscina Oleosa"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </button>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                Piscina Oleosa
              </p>
            </div>

            {/* Botão Voltar */}
            <div className="flex flex-col items-center">
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
      </div>
    </div>
  );
}
