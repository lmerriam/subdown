module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'subdown',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
