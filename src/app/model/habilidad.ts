export class Habilidad {
    id: number;
    habilidad: string;
    progreso: number;
    logo: string;
    url: string;



constructor ( habilidad:string, progreso:number, logo:string, url:string) {
    this.habilidad = habilidad;
    this.progreso = progreso;
    this.logo = logo;
    this.url = url;
}
}
