## webpack 新特性 以及改变

```
 1. 启动服务直接修改为了<webpack serve>
 2. 去除webpack4版本的resolveLoader, 直接使用了resolve参数
 3. 增加cache功能，用来提高构建速度。 可以使用cache参数 && 指定缓存路径
 4. 针对图片/ico等静态资源，使用内部asset模块来进行解析
 5. moduleIds & chunkIds的优化
  1. 在webpack5之前, 没有从entry打包的chunk文件，都都是以1,2,3...的文件命名方式输出，删除某些某些文件可能会导致缓存失败，在生产模式下，默认开启功能chunkIds: "deterministic", moduleIds: "deterministic"，
    此算法采用确定性的方式将短数字 ID(3 或 4 个字符)短hash值分配给 modules 和 chunks
 6. 移除了Node.js的polyfill
```
