var hour = new Date().getHours()
hour = 1

if (hour != 19) {
    document.write("bine ai venit la curs")
}

//Folosim un input din html in JS
document.getElementById('year').value

if (hour <= 12 && hour > 1) {
    document.write("Buna dimineata!")
} else if (hour < 18) {
    document.write("Buna ziua!")
} else if (hour < 23) {
    document.write("Buna seara!")
} else {
    document.write("Somn usor!")
}



// if(hour <2){
//     document.write("Somn usor!")
// } else if (hour<12){
//     document.write("Buna dimineata!")
// } else if(hour<18){
//     document.write("Buna ziua!")
// } else {
//     document.write("Buna seara!")
// }
