"use client";
import { useState } from 'react';
import Resultado from '@/components/Resultado';
import AguaVerde from '@/components/AguaVerde';
import AguaTurva from '@/components/AguaTurva';
import Alcalinidade from '@/components/Alcalinidade';
import Oleosidade from '@/components/Oleosidade';
import Manutencao from '@/components/Manutencao';

// Definimos os possíveis estados da aplicação
type AppStep = 'formulario' | 'resultados' | 'aguaVerde' | 'aguaTurva' | 'alcalinidade' | 'oleosidade' | 'manutencao';

export default function Home() {
  const [step, setStep] = useState<AppStep>('formulario');
  const [formData, setFormData] = useState({
    comprimento: '',
    largura: '',
    ph: '',
    profundidades: [''] // Agora armazenamos um array de profundidades
  });

  const adicionarProfundidade = () => {
    setFormData({
      ...formData,
      profundidades: [...formData.profundidades, '']
    });
  };

  const removerProfundidade = (index: number) => {
    const novasProfundidades = [...formData.profundidades];
    novasProfundidades.splice(index, 1);
    setFormData({
      ...formData,
      profundidades: novasProfundidades
    });
  };

  const atualizarProfundidade = (index: number, valor: string) => {
    const novasProfundidades = [...formData.profundidades];
    novasProfundidades[index] = valor;
    setFormData({
      ...formData,
      profundidades: novasProfundidades
    });
  };

  const calcularLitragem = () => {
    const comp = parseFloat(formData.comprimento);
    const larg = parseFloat(formData.largura);
    
    // Calculamos o volume para cada seção da piscina com profundidade diferente
    let volumeTotal = 0;
    
    // Se tivermos apenas uma profundidade, calculamos normalmente
    if (formData.profundidades.length === 1) {
      const prof = parseFloat(formData.profundidades[0]);
      volumeTotal = comp * larg * prof;
    } else {
      // Se tivermos várias profundidades, calculamos o volume de cada seção
      // considerando que cada profundidade representa uma parte igual da piscina
      const areaPiscina = comp * larg;
      const tamanhoCadaSecao = areaPiscina / formData.profundidades.length;
      
      formData.profundidades.forEach(prof => {
        if (prof && !isNaN(parseFloat(prof))) {
          volumeTotal += tamanhoCadaSecao * parseFloat(prof);
        }
      });
    }
    
    return (volumeTotal * 1000).toFixed(2);
  };

  const calcularDosagem = () => {
    const phAtual = parseFloat(formData.ph);
    const litros = parseFloat(calcularLitragem());
    const diferenca = 7.2 - phAtual;
    
    if (diferenca <= 0) return '0';
    return ((litros / 1000) * (diferenca / 0.2) * 4.5).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('resultados');
  };

  const handleVoltar = () => {
    setStep('formulario');
  };

  const handleVoltarParaResultados = () => {
    setStep('resultados');
  };

  const handleAguaVerde = () => {
    setStep('aguaVerde');
  };

  const handleAguaTurva = () => {
    setStep('aguaTurva');
  };

  const handleAlcalinidade = () => {
    setStep('alcalinidade');
  };

  const handleOleosidade = () => {
    setStep('oleosidade');
  };

  const handleManutencao = () => {
    setStep('manutencao');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Vídeo de Fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/fundo.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay para melhorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/60 dark:bg-gray-900/70 -z-10"></div>
      
      {/* Painel do Formulário */}
      <div className={`w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-all duration-500 ${step === 'formulario' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 absolute'}`}>
        <div className="logoLoja">
          
        </div>
        
        <h1 className="text-2xl font-light text-gray-800 dark:text-white mb-8 text-center">
          EcoClean Descomplica Piscinas
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Comprimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Comprimento (metros)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Ex: 5.0"
              step="0.1"
              value={formData.comprimento}
              onChange={(e) => setFormData({ ...formData, comprimento: e.target.value })}
            />
          </div>

          {/* Campo Largura */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Largura (metros)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Ex: 3.0"
              step="0.1"
              value={formData.largura}
              onChange={(e) => setFormData({ ...formData, largura: e.target.value })}
            />
          </div>

          {/* Campos de Profundidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Profundidade (metros)
            </label>
            <div className="space-y-2">
              {formData.profundidades.map((profundidade, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="number"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Ex: 1.5"
                    step="0.1"
                    value={profundidade}
                    onChange={(e) => atualizarProfundidade(index, e.target.value)}
                  />
                  {index === 0 ? (
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                      onClick={adicionarProfundidade}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                      onClick={() => removerProfundidade(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Campo pH Atual - Versão Numérica */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              pH Atual
            </label>
            <input
              type="number"
              min="0"
              max="14"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Digite o valor entre 0 e 14"
              value={formData.ph}
              onChange={(e) => setFormData({ ...formData, ph: e.target.value })}
            />
            
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Caso precise de instruções para verificar o pH da piscina, acesse o link abaixo:
              </p>
              <a
                href="https://www.youtube.com/watch?v=S-X9bsjPWIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Como medir o pH da piscina ▶
              </a>
            </div>
          </div>

          {/* Botão Principal */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Próximo Passo
          </button>
        </form>
      </div>

      {/* Painel de Resultados */}
      <div className={`transition-all duration-500 ${step === 'resultados' ? 'translate-x-0 opacity-100' : step === 'formulario' ? 'translate-x-full opacity-0 absolute' : '-translate-x-full opacity-0 absolute'}`}>
        <Resultado
          formData={{
            comprimento: formData.comprimento,
            largura: formData.largura,
            profundidade: formData.profundidades[0], // Para manter compatibilidade
            ph: formData.ph
          }}
          calcularLitragem={calcularLitragem}
          calcularDosagem={calcularDosagem}
          onVoltar={handleVoltar}
          onAguaVerde={handleAguaVerde}
          onAguaTurva={handleAguaTurva}
          onAlcalinidade={handleAlcalinidade}
          onOleosidade={handleOleosidade}
          onManutencao={handleManutencao}
        />
      </div>

      {/* Painel de Água Verde */}
      <div className={`transition-all duration-500 ${step === 'aguaVerde' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
        <AguaVerde
          litragem={calcularLitragem()}
          onVoltar={handleVoltarParaResultados}
        />
      </div>

      {/* Painel de Água Turva */}
      <div className={`transition-all duration-500 ${step === 'aguaTurva' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
        <AguaTurva
          litragem={calcularLitragem()}
          onVoltar={handleVoltarParaResultados}
        />
      </div>

      {/* Painel de Alcalinidade */}
      <div className={`transition-all duration-500 ${step === 'alcalinidade' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
        <Alcalinidade
          litragem={calcularLitragem()}
          onVoltar={handleVoltarParaResultados}
        />
      </div>

      {/* Painel de Oleosidade */}
      <div className={`transition-all duration-500 ${step === 'oleosidade' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
        <Oleosidade
          litragem={calcularLitragem()}
          onVoltar={handleVoltarParaResultados}
        />
      </div>

      {/* Painel de Manutenção */}
      <div className={`transition-all duration-500 ${step === 'manutencao' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
        <Manutencao
          litragem={calcularLitragem()}
          onVoltar={handleVoltarParaResultados}
        />
      </div>
    </main>
  );
}
