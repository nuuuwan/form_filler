class Box {
  constructor([x1, y1], [x2, y2]) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
}
class DataField {
  constructor(name, boxList) {
    this.name = name;
    this.boxList = boxList;
  }
}
export default class Form {
  constructor(name, dataFieldList) {
    this.name = name;
    this.dataFieldList = dataFieldList;
  }

  get pdfFilePath() {
    return this.name.replaceAll(" ", "-").toLowerCase() + ".pdf";
  }

  get pdfURL() {
    return process.env.PUBLIC_URL + "/data/forms/" + this.pdfFilePath;
  }

  static list() {
    return [
      new Form("CMC Public Library Membership", [
        new DataField("full-name", [new Box([168, 409], [560, 429])]),
        new DataField("address", [new Box([174, 449], [363, 496])]),
        new DataField("age", [new Box([464, 447], [554, 474])]),
        new DataField("occupation", [new Box([176, 507], [359, 525])]),
        new DataField("telephone-no", [new Box([475, 497], [558, 521])]),
        new DataField("business-address-or-school", [
          new Box([226, 543], [560, 565]),
        ]),
        new DataField("email", [new Box([228, 580], [556, 610])]),
        new DataField("nic-no", [new Box([229, 627], [373, 657])]),
        new DataField("date", [new Box([474, 672], [558, 702])]),
      ]),
    ];
  }
}
