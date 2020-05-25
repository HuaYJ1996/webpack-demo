const pluginName = 'TestPlugin';

class TestPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap(pluginName, (compilation, callback )=> {
        console.log('test');        
    });
  }
}
  
module.exports = TestPlugin;