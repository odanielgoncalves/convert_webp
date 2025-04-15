# Conversor de JPG para WebP com Node.js e Sharp

Este script Node.js converte imagens `.jpg` em `.webp` usando a poderosa biblioteca 
[Sharp](https://sharp.pixelplumbing.com/). Ideal para otimizar imagens em massa, 
especialmente para aplicações web que exigem desempenho, como animações baseadas em scroll ou 
carregamento rápido de galerias.

---

## 🚀 Funcionalidades

- 📁 Converte todos os arquivos `.jpg` de uma pasta para `.webp`
- 🎯 Redimensiona automaticamente para 1920px de largura (opcional)
- ⚙️ Qualidade ajustável (padrão: 50%)
- 📦 Salva as imagens otimizadas em uma nova pasta
- 💬 Mensagens claras de sucesso e erro no terminal

---

## 🛠️ Pré-requisitos

- Node.js instalado
- Dependência `sharp`

```bash
npm install sharp
