const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach(image => {
  // mengubah ukuran gambar hero dengan lebar 1400px tinggi 950px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(1400, 950)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));

  // mengubah ukuran gambar hero dengan lebar 700px tinggi 475px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(700, 475)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-small.jpg`));
});
