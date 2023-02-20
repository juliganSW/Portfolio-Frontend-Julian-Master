export class Experiencia {
    id:number 
    empresa:string;
    puesto:string
    tareas:string
    inicio:string;
    fin:string;
    logo:string;

    constructor(empresa:string, puesto:string, tareas:string, inicio:string, fin:string, logo:string){
        this.empresa=empresa;
        this.puesto=puesto;
        this.tareas=tareas;
        this.inicio=inicio;
        this.fin=fin;
        this.logo=logo;
    }

}
