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
            <div 
              className="w-[100%] h-[70px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/manutencao.jpg)' }}
            ></div>
            <span className="text-sm font-medium">Manutenção</span>
          </button>

          <button
            onClick={onAlcalinidade}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <div 
              className="w-[100%] h-[70px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/alcalinidade.jpg)' }}
            ></div>
            <span className="text-sm font-medium">Alcalinidade</span>
          </button>

          <button
            onClick={onAguaVerde}
            className="p-4 bg-emerald-900/20 hover:bg-emerald-900/30 text-emerald-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <div 
              className="w-[100%] h-[70px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/aguaverde.jpg)' }}
            ></div>
            <span className="text-sm font-medium">Água Verde</span>
          </button>

          <button
            onClick={onAguaTurva}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <div 
              className="w-[100%] h-[70px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/aguabranca.jpg)' }}
            ></div>
            <span className="text-sm font-medium">Água Turva</span>
          </button>

          <button
            onClick={onOleosidade}
            className="p-4 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 rounded-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
          >
            <div 
              className="w-[100%] h-[70px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/oleosidade.jpg)' }}
            ></div>
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
