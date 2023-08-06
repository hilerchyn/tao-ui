import json from '@rollup/plugin-json';     // 导入json插件, 可解析根目录下：package.json 文件
import terser from '@rollup/plugin-terser'; // 输出插件，压缩输出的内容

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            name: 'version', // 指定IIFE函数的名字
            plugins: [
                terser()
            ]
        }
    ],
    plugins: [
        json() // 调用json插件，NOTE: 此插件机制是如何运行的？
    ]
};

