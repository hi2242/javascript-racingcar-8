import GameController from './controller/GameController.js'
import OutputView from './view/OutputView.js';

class App {
  async run() {
    try {
      const controller = new GameController();
      await controller.play();
    } catch (error) {
      OutputView.printError(error.message);
      throw error
    }

  }
}

export default App;
