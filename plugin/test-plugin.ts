import { Compiler, compilation } from "webpack"

const pluginName = 'TestPlugin'
class TestPlugin {
  apply(compiler: Compiler) {
    
  }
}
  
module.exports = TestPlugin