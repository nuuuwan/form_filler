export default class Form {
  constructor(name) {
    this.name = name;
  }

  get pdfFilePath() {
    return this.name.replaceAll(' ', '-').toLowerCase() + '.pdf';
  }

  get pdfURL() {
    return process.env.PUBLIC_URL + '/data/forms/' + this.pdfFilePath;
  }

  static list() {
    return [
      new Form(
        "CMC Public Library Membership",
  
      ),
    ];
  }
}
