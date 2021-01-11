let dacia = {
    make: "Dacia",
    model: "1310",
    color: "verde",
    year: 1978,
    mileage: 525737,
    maxSpeed: 160,
    averageConsumption: 11.5, 
    batteryCapacity: 150,
    batteryCharge: 150,
    paint(color){
        this.color = color
    },
    travel(distance) {
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
    },
    recharge() {
        this.batteryCharge = this.batteryCapacity
    },

    distanceToEmpty() {
        return 100 * this.batteryCharge / this.averageConsumption
    }
}

let ferrari = {
    make: "Ferrari",
    model: "Dino",
    color: "rosu",
    year: 1978,
    mileage: 525737,
    maxSpeed: 160,
    paint: function(color){
        this.color = color
    }
}

dacia.paint("galben")
dacia.travel(100)
console.log(dacia.distanceToEmpty())
dacia.travel(100)
console.log(dacia.distanceToEmpty())
console.log(dacia)
console.log(ferrari)