class HomeController {
  constructor() {}

  index(req, res) {
    res.status(200).json("Home");
  }
}

export default new HomeController();
