export class Product {
  id: number;
  name: string;
  company: string;
  price: number;
  isShow: boolean;
  createDate: Date;
  modifyDate: Date | undefined;

  constructor(id: number, name: string, company: string, price: number, isShow: boolean, createDate: Date, modifyDate: Date | undefined) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.price = price;
    this.isShow = isShow;
    this.createDate = createDate;
    this.modifyDate = modifyDate;
  }
  setDisplay(isShow: boolean) {
    this.isShow = isShow;
  }
}
