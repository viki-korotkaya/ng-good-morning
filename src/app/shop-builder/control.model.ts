export class Control {
  public label: string;
  public type: string;
  public cost: number;

  constructor(label: string, type: string, cost: number) {
    this.label = label;
    this.type = type;
    this.cost = cost;
  }
}
