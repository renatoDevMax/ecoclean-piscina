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
    <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-light text-white mb-6 text-center">
        Resultados
      </h2>

      <div className="space-y-6">
        <div className="text-center">
          <p className="text-lg text-gray-300">Litragem total da piscina:</p>
          <p className="text-3xl font-medium text-blue-400 mt-2">
            {calcularLitragem()} Litros
          </p>
        </div>

        {parseFloat(formData.ph) < 7.2 ? (
          <div className="bg-blue-900/20 p-4 rounded-lg text-center">
            <p className="text-red-400 font-medium mb-2">
              ⚠️ Parece que o pH da sua piscina ainda não é o ideal
            </p>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Recomendamos adicionar:</p>
              <p className="text-xl font-medium text-blue-400">
                {calcularDosagem()}g
              </p>
              <p className="text-gray-400 text-sm">
                Cálculo baseado no pH + Barrilha Genco
              </p>
              <p className="text-xs text-gray-400 italic mt-4">
                Em alcalinidade de 100ppm (comum)
              </p>

              <p className="text-xs text-gray-400 italic mt-4">
                Faça o ajuste da sua alcalinidade antes de ajustar o pH, isso
                vai garantir maior durabilidade do ph e é crucial a alcalinidade
                correta para manutenção dos tratamentos
              </p>

              <p className="text-xs text-gray-400 italic mt-4">
                Após adicionar o produto, aguarde pelo menos 2 horas antes de
                continuar o tratamento
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-green-900/20 p-4 rounded-lg text-center">
            <p className="text-green-400 font-medium">
              ✔️ Seu pH já está controlado
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Nenhuma dosagem necessária
            </p>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={onManutencao}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium">Manutenção</span>
          </button>

          <button
            onClick={onAlcalinidade}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="text-sm font-medium">Alcalinidade</span>
          </button>

          <button
            onClick={onAguaVerde}
            className="p-4 bg-emerald-900/20 hover:bg-emerald-900/30 text-emerald-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">Água Verde</span>
          </button>

          <button
            onClick={onAguaTurva}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <span className="text-sm font-medium">Água Turva</span>
          </button>

          <button
            onClick={onOleosidade}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="text-sm font-medium">Oleosidade</span>
          </button>
        </div>

        {/* Botão Voltar */}
        <div className="flex flex-col items-center mt-8">
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
          <p className="mt-2 text-sm font-medium text-gray-300 text-center">
            Voltar
          </p>
        </div>
      </div>
    </div>
  );
}
