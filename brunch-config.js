exports.config = {
  npm: {
    enabled: true
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app\/styles/
      }
    }
  },

  plugins: {
    digest: {
      prependHost: {
        production: '/deck-bespoke.js'
      },
      referenceFiles: /\.(css|html|js)$/
    },

    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              join (context, block) {
                return context.join(block.hash.delimiter)
              },
              updated_time () {
                return new Date().toISOString()
              }
            }
          }
        })
      ]
    }
  }
}
