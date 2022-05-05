function exo1() {
    let x = ["sysy", "liri", "sarah", "mounia", "nao", "enzo"]
    x.forEach(element => {
        console.log("bonjour" + " " + element);
    });
}
function exo2() {
    let x = ["sysy", "liri", "sarah", "mounia", "nao", "enzo"]
    x.forEach(element => {
        console.log(element)
    });
}
function exo3() {
    let multi = 5
    for (i = 0; i <= 9; i++) {
        console.log(i + "*" + 5 + "=" + i * 5);
        i++
    }
}
function exo4() {
    let x = ["sysy", "liri", "sarah", "mounia", "nao", "enzo"]
    for (let index = 0; index < x.length; index++) {
        console.log("bonjour" + x[index]);
    }
}
function exo5(){
    let x = Math.abs(prompt("entrer un nbr")) 
    for (let index = 0; index <= x; index++) {
        console.log(index);        
    }
}