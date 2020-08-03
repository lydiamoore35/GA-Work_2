////SECTION 2 COMBINING DATATYPES////

const crayonBox = {
    crayons: ["red" , "orange" , "yellow" , "green" , "blue" , "purple"]

}
console.log(crayonBox.crayons[2])

const bottle = {
    cap: {
        metal: "green",
        plastic: "pink",
        wood: "brown"
    }
}
console.log(bottle.cap.plastic);

const receipt = [{
    purchased: {
        shirt: "20 dollars",
        pants: "40 dollars",
        dress: "80 dollars"
    }
}]
console.log(receipt[0].purchased.shirt)

const apartmentBuilding = [
    names = ["Sarah" , "John" , "Tim" , "Andrew"]
]
console.log(apartmentBuilding[0][1]);

////COMBINE OBJECTS, ARRAYS, AND FUNCTIONS MORE THAN ONE LEVEL DEEP////

const knit = () => {
    return {
        item: "scarf",
        size: "6 feet",
        price: "30 dollars"
    }
}
console.log(knit().item);

const crayonSelector = () => {
    return {
        crayons: ["red" , "orange" , "yellow" , "green" , "blue" , "purple"]
    }
}
console.log(crayonSelector().crayons[2]);


const powerButton = () => {
    return options() 
}
const options = () => {
    console.log("select a song")
}
powerButton()


const vendingMachine = {
    snacks: [{
        option: "chips",
        cost: 2,
    },{
        option: "candy",
        cost: 3,
    },{
        option: "soda",
        cost: 5,
    }],
        vend (input){
        console.log(vendingMachine.snacks[input]);
    }    
}
vendingMachine.vend(2);