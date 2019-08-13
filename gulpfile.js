const { src, dest } = require("gulp");
const PaintingsLoader = require("./paintingsLoader.js");

async function createPreviews(cb) {
  return src("images.json")
    .pipe(new PaintingsLoader({quality: 25, width: 200}))
    .pipe(dest("dist"));
}

exports.createPreviews = createPreviews;
