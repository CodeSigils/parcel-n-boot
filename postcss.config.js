module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-purgecss')({
      content: ['./dist/*.html'],
    }),
  ],
}
