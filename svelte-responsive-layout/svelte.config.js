module.exports = {
    preprocess: {
       style: async ({attributes}) => {
          if (attributes.type !== 'text/postcss') return;

          return new Promise(resolve => {
             resolve({code: '', map: ''});
          });
       },
    },
 };
 