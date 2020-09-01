export class videoTextItemModel {
  private _Title: string;
  private _description: string;
  private _Date: string;

  constructor(Title: string, description: string, Date: string) {
    this._Title = Title;
    this._description = description;
    this._Date = Date;
  }

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get Date(): string {
    return this._Date;
  }

  set Date(value: string) {
    this._Date = value;
  }
}
