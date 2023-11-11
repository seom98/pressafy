module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080", // Spring boot의 주소 및 포트
        pathRewrite: { "^/": "" },
        changeOrigin: true,
      },
    },
  },
};
