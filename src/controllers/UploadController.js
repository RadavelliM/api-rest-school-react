class UploadController {
  constructor() {}

  async create(req, res) {
    res.status(200).json(req.file);
  }
}

export default new UploadController();
