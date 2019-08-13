const { Transform, Writable } = require("stream");
const http = require("http");
const sharp = require("sharp");

function loadImage(
  url,
  { quality = 50, reductionEffort = 6, width = 100 } = {}
) {
  return new Promise((resolve, reject) => {
    http
      .get(url, res => {
        let data;
        const imagePipeline = sharp();
        const endPoint = new Writable({
          write(chunk, encoding, callback) {
            if (chunk) {
              if (!data) {
                data = chunk;
              } else {
                Buffer.concat([data, chunk], data.length + chunk.length);
              }
            }
            callback();
          }
        });
        imagePipeline
          .resize(width)
          .webp({ quality, reductionEffort })
          .pipe(endPoint);
        res.pipe(imagePipeline);
        endPoint.on("finish", _ => resolve(Buffer.from(data)));
      })
      .on("error", reject);
  });
}

module.exports = class PaintingsLoader extends Transform {
  constructor({ quality = 50, reductionEffort = 6, width = 100 } = {}) {
    super({ objectMode: true });
    this.quality = quality;
    this.width = width;
    this.reductionEffort = reductionEffort;
  }
  async _transform(data, encoding, callback) {
    const paintings = JSON.parse(data.contents);
    const paintingPromises = Object.keys(paintings).map(async paintingId => {
      const painting = paintings[paintingId];
      const previewBuffer = await loadImage(painting.imgSrc, {
        quality: this.quality,
        reductionEffort: this.reductionEffort,
        width: this.width
      });
      painting.previewImg =
      "data:image/webp;base64," + previewBuffer.toString("base64");
    });
    try{
      await Promise.all(paintingPromises)
      console.log(`✔ Loaded ${paintingPromises.length} images`);
    } catch(e){
      console.log(`❌ Loading images failed`);
    }
    data.contents = Buffer.from(JSON.stringify(paintings));
    callback(null, data);
  }
};
