//Crear clase dado
class Dado {
    lanzar() {
        const lanzar = Math.ceil(Math.random() * 100)
            return lanzar;

    }
}

// Instanciar Dado
const miDado = new Dado();

class Corredor {
    constructor(animal) {
        this.animal = animal;
        this.posicion = 0;
        this.dado = new Dado();
    }

    correr() {

        let cara = this.dado.lanzar();
        if(this.animal === 'tortuga') {

            if(cara <= 50) {
                this.posicion += 3;
            } else if (cara <= 70 && cara > 50 ) {
                this.posicion -= 6;
            } else {
                this.posicion += 1;
            }

        }

        if (this.animal === 'liebre') {

            if(cara <= 20) {
                this.posicion += 9;
            } else if (cara <= 30 && cara > 20 ) {
                this.posicion -= 12;
            } else if (cara <= 65 && cara > 30 ) {
                this.posicion += 1;
            } else if (cara <= 80 && cara > 65 ) {
                this.posicion -= 2;
            } else {
                this.posicion += 0;
            }

        }

        return this.posicion
    }

    status() {
        return `El animal ${this.animal} esta en la posicion ${this.posicion}`
    }



}

const liebre = new Corredor('liebre')
const tortuga = new Corredor('tortuga')



function iniciarCarrera(corredor1, corredor2, limitePasos) {
    do {
        corredor1.correr()
        console.log(corredor1.status())
        corredor2.correr()
        console.log(corredor2.status())

        if(corredor1.posicion === limitePasos && corredor2.posicion === limitePasos){
            console.log('Empate')
            break;
        }

        if(corredor1.posicion >= limitePasos) {
            console.log(`El ${corredor1.animal} en la posicion ${corredor1.posicion} gano`)
            break;
        } else if(corredor2.posicion >= limitePasos) {
            console.log(`El ${corredor2.animal} en la posicion ${corredor2.posicion} gano`)
            break;
        }

    } while (corredor1.posicion < limitePasos && corredor2.posicion < limitePasos)
}

console.log(iniciarCarrera(tortuga, liebre, 100))
