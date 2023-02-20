export class Persona {
id:number;
nombre:string;
apellido: string;
edad: any;
titulo: string;
acercademi: string;
imagen: string;
email:String;
password:String;

constructor(nombre:string, apellido:string, edad:any, titulo:string, acercademi:string, imagen:string, email:string, password:string) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.titulo=titulo;
    this.acercademi=acercademi;
    this.imagen=imagen;
    this.email=email;
    this.password=password;
}
}

