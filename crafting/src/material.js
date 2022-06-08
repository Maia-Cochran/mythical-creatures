class Material {
  constructor(name, price, amount, units){
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(){
    if(this.amount >= 1){
    this.units - this.amount;
      return `You now have 1 yards of fabric left.`
    }
  }
}

module.exports = Material;
