const baseConfig = require('../config/postcss.config.base');

module.exports = {
  ...baseConfig,
  // plugins: {
  //   'postcss-import': {
  //     resolve(id, basedir, importOptions) {
  //       console.log(
  //         '%c [ id, basedir, importOptions ]-8',
  //         'font-size:13px; background:pink; color:#bf2c9f;',
  //         id,
  //         basedir,
  //         importOptions,
  //       );
  //       return `${basedir}/${id}`;
  //     },
  //   },
  //   'tailwindcss/nesting': {},
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },
};
