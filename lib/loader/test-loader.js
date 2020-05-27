/**
 * 一个简单的loader，在代码中注入特定代码
 * @param {*} source
 */
function loader(source) {
    return 'console.log("WTF")\n' + source;
}
module.exports = loader;
//# sourceMappingURL=test-loader.js.map