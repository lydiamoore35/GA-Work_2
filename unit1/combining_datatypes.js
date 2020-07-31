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