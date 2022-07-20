class Fairy {
    constructor() {
        this.name = `Maia`;
        this.dust = 10;
        this.clothes = { 
            dresses: ['Iris']
        }
    }
    receiveBelief(){
        this.dust ++
    }
    believe(){
        this.dust += 10
    }
    makeDresses([flowers]){
        let newFairy = new Fairy();
        for (var i = 0; i < newFairy.clothes.length; i++){
            console.log(newFairy.clothes.dresses)
            newFairy.clothes[i].dresses.push(flowers)
        }
        return
        // const newFairy = new Fairy({name: `Peggy`, dresses: []});
        // this.clothes.dresses.includes([flowers])
    }
}





module.exports = Fairy;