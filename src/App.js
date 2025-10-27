import GameController from './controller/GameController.js'

class App {
  async run() {
    const controller = new GameController();
    await controller.play();
  }
}

export default App;
