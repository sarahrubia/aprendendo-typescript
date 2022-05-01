//  Estruturas de decisão

//  If, else

function verifyLegalAge(age:number):boolean{
    if (age >= 18) {
        return true;
    } else {
        return false;
    }

}

let isLegalAge:boolean = verifyLegalAge(18)
console.log(isLegalAge)

// Switch

function candidates(candidate:number):string {
    switch(candidate){
        case 40:
            return 'JHC';
            break;
        case 22:
            return 'Dorinha';
            break;
        case 10:
            return 'Ronaldinho';
            break;
        case 51:
            return 'Cana Brava';
            break;
        default:
            return 'Voto nulo';
            break;
    }
}

// console.log(candidates(40));
// console.log(candidates(10));
// console.log(candidates(22));
// console.log(candidates(51));
// console.log(candidates(0));
// console.log(candidates(15));


// Loops

var languages:Array<string> = [
    'C#', 
    'JavaScript', 
    'Java', 
    'PHP', 
    'Python', 
    'TypeScript', 
    'Dart'
];

// Loop For

for (let i=0; i < languages.length; i++) {
    console.log(languages[i])
}

// Loop While

let count = 0;

while (count < languages.length) {
    console.log(languages[count])
    count++;
}

// ForEach

languages.forEach(item => {
    if (item == 'TypeScript') {
        return console.log('Encontrou!')
    }
    console.log(item);
});
