export class Listing {
  constructor(
    public id: number,
    public path: string,
    public depth: number,
    public numchild: number,
    public name: string,
    public description: string,
    public image: string,
    public slug: string){}
}
