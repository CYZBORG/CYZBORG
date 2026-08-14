const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function processImage() {
  try {
    console.log("Downloading and reading image...");
    const image = await Jimp.read('https://helmet-with-logo.netlify.app/silhouettes.png');
    const w = image.bitmap.width / 4;
    const h = image.bitmap.height / 2;
    console.log(`Image dimensions: ${image.bitmap.width}x${image.bitmap.height}, Cell: ${w}x${h}`);

    const names = [
      'Squat', 'Running', 'Deadlift', 'Sprint',
      'Pullup', 'TireFlip', 'Hiking', 'JumpRope'
    ];

    for (let i = 0; i < 8; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      
      const clone = image.clone();
      clone.crop(col * w, row * h, w, h);
      clone.invert(); // Potrace traces black on white

      const buffer = await clone.getBufferAsync(Jimp.MIME_PNG);
      
      await new Promise((resolve, reject) => {
        potrace.trace(buffer, { 
          threshold: 128, 
          optTolerance: 0.4,
          turdSize: 100, // remove small artifacts
          turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY
        }, (err, svg) => {
          if (err) return reject(err);
          const match = svg.match(/<path[^>]*d="([^"]*)"/);
          if (match) {
            fs.writeFileSync(`${names[i]}.txt`, match[1]);
            console.log(`Saved path for ${names[i]}`);
          } else {
            console.log(`No path found for ${names[i]}`);
          }
          resolve();
        });
      });
    }
    console.log("Done!");
  } catch (e) {
    console.error(e);
  }
}
processImage();
