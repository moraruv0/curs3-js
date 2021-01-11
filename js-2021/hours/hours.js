var hour = 1

// while (hour<=24) {
//     if (hour<=12) {
//         document.writeln(hour," AM")
//         document.writeln("<br>")
//     } else {
//         document.writeln(hour-12," PM")
//         document.writeln("<br>")
//     }
//     hour++
// }

for (var hour = 1; hour <=24; hour++) {
    const element = array[hour];
    if (hour<=12) {
        document.writeln(hour," AM")
        document.writeln("<br>")
    } else {
        document.writeln(hour-12," PM")
        document.writeln("<br>")
    }
}



// while (money > chocolatePrice) {
//     chocolates++;
//     money -= chocolatePrice;
// }
// do {
//     chocolates++;
//     money -= chocolatePrice;
// } while (money > chocolatePrice)

//exercitiu de la 0 la 127 sa se afiseze numaru cu caracterul sau langa el (cod ascii)