import { Component } from '@angular/core';

interface Frase {
    mensaje: string;
    autor: string;
}

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    frase: Frase = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    mostrar = false;
    personajes: string[] = ['Spiderman', 'Venom', 'Dr Octopus'];

    mostrarOcultarFrase = () => {
        this.mostrar = !this.mostrar;
    }

    

}