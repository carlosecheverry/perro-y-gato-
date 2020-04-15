class persona {
    constructor(nombre, edad, identidad, género, peso, altura){
        this.name = nombre;
        this.age = edad;
        this.RFC = identidad;
        this.gender = género;
        this.weigth = peso;
        this.heigth = altura;
        }   

        calcular(IMC) {
            return `${this.peso/((this.altura)^2)}`;
            console.log(calcular);
          }

        
    }

    const Carlos = new persona(
        "Carlos"
        32
        1020728738
        "masculino"
        70
        170
    );