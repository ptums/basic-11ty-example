module.exports = function(config) {

  config.addPassthroughCopy("src/js")
  config.addPassthroughCopy("src/css");
  // config.setBrowserSyncConfig({
  //   files: './dist/css/tailwind.css',
  // });
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};