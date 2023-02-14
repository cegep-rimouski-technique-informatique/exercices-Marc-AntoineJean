console.log(palindrome("laval"));
compter();
console.log(fibonacci(14));
var liste = ["patate", "tomate", "carotte", "pimant", "concombre"];
console.log(decroissant(liste));

function palindrome(mot){
    let j = mot.length - 1;
    let i = 0;
    while(i < j){
        if(mot.charAt(i) != mot.charAt(j)){
            return "Le mot n'est pas un palindrome";
        }
        i++;
        j--;
    }
    return "Le mot est un palindrome";
}

function compter(){
    for(let i = 1; i <= 100; i++){
        if(((i/3) - (Math. floor(i/3))) === 0){
            if (((i/5) - (Math. floor(i/5))) === 0){
                console.log("FizzBuzz\n");
            }
            else{
                console.log("Fizz\n");
            }
        }
        else if(((i/5) - (Math. floor(i/5))) === 0){
            console.log("Buzz\n");
        }
        else{
            console.log(i);
        }
    }
}

function fibonacci(position){
    let x = 0;
    let y = 0;
    for (let i = 1; i <= position; i++){
        if (i == 2){
            y = 1;
        }
        else if (i > 2){
            let z = x;
            x = y;
            y = y + z;
        }
    }
    return y;
}

function decroissant(liste){
    var listeD;
    var temp;
    for (let i = 0; i<liste.length; i++)
    {
        for (let j = 0; j < liste.length; j++){
            if(listeD[0] == null || (temp < liste[j] && liste[j] > listeD[i - 1])){
                temp = liste[j];
            }
        }
        listeD[i] = temp;
    }

    let ligne;
    for (let i = 0; i < listeD.length; i++){
        ligne += listeD[i] + " ";
    }
    return ligne;
}