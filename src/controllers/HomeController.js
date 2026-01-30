class HomeController {
  constructor() {}

  index(req, res) {
    res.status(200).json({
      chamada: "correta"
    });
  }
}

export default new HomeController();
