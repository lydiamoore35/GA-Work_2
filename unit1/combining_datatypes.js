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
console.log(bottle.cap.plastic)

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
        value: "30 dollars"
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

//come back too
const vendingMachine = {
    snacks = [{
        chips: "1 dollar",
        candy: "2 dollars",
        soda: "3 dollars"
    }],
    const vend = (num) => {
        return vendingMachine.snacks[num];
    }
}
console.log(vendingMachine.vend([2]))