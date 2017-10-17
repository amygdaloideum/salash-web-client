const { FuseBox, BabelPlugin, WebIndexPlugin, Sparky, QuantumPlugin, SassPlugin, CSSPlugin } = require("fuse-box");
const { cp, rm, mkdir } = require('shelljs');
const path = require('path');
const proxy = require('http-proxy-middleware');
const express = require('express');


const BUILD_PATH = 'build/';
const DEV_PATH = 'dev/';
let production = false;

const plugins = isprod => [
  WebIndexPlugin({ template: 'src/index.html' }),
  BabelPlugin({
    config: {
      sourceMaps: !isprod,
      presets: ["es2015"],
      plugins: [
        ["transform-react-jsx"],
        ["transform-class-properties"],
        ["transform-object-rest-spread"],
      ],
    },
  }),
  [SassPlugin({importer : true}), CSSPlugin()],
  isprod && QuantumPlugin({uglify : true}),
];

Sparky.task('build-prod', () => {
  rm('-rf', BUILD_PATH);
  mkdir('-p', BUILD_PATH);
  cp('-rf', 'src/assets/*', BUILD_PATH);
  const fuse = FuseBox.init({
    homeDir: "src",
    output: "build/$name.js",
    sourceMaps: false,
    target: 'browser',
    cache: false,
    plugins: plugins(true),
  });
  fuse.bundle("app").instructions(`>index.js`);
  fuse.run();
});

Sparky.task("default", () => {
  rm('-rf', DEV_PATH);
  mkdir('-p', DEV_PATH);
  cp('-rf', 'src/assets/*', DEV_PATH);
  const fuse = FuseBox.init({
    homeDir: "src",
    output: "dev/$name.js",
    sourceMaps: true,
    target: 'browser',
    cache: true,
    plugins: plugins(false),
  });

  fuse.dev({
    port: 3001,
    root: false,
  }, server => {
    const dist = path.resolve("./dev");
    const app = server.httpServer.app;
    app.use(express.static(dist));
    app.use('/api', proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/api/v1'
      }
    }));
    app.get("*", function(req, res) {
        res.sendFile(path.join(dist, "index.html"));
    });
  })

  fuse.bundle("app")
    .instructions(`>index.js`).watch().hmr();

  fuse.run();
});

Sparky.task("clean", () => {
  rm('-rf', BUILD_PATH);
  mkdir('-p', BUILD_PATH);
});

Sparky.task('copy-assets', () => {
  cp('-rf', 'src/assets/*', BUILD_PATH);
});