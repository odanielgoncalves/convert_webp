const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Creates a sharp instance from an image
//@param input — Buffer containing JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF or raw pixel image data, or String containing the path to an JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image file.
//@param options — Object with optional attributes.
//@throws — {Error} Invalid parameters
//@returns — A sharp instance that can be used to chain operations


// Entrada e saida das imagens (pastas)
const inputFolder = './frames-original';
const outputFolder = './frames-webp';


if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  files
    .filter((file) => file.endsWith('.jpg'))
    .forEach(async (file) => {
      const inputPath = path.join(inputFolder, file);
      const outputPath = path.join(outputFolder, file.replace('.jpg', '.webp'));

      try {
        await sharp(inputPath)
          .resize(1920) // opcional: redimensiona se quiser
          .webp({ quality: 50 }) // ajuste a qualidade como preferir em 50 eu consegui um resultado para manipular 300 imagens com uma time-line react. ficou excelente.
          .toFile(outputPath);
        console.log(`✅ Convertido: ${file} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`❌ Erro ao converter ${file}:`, error);
      }
    });
});
