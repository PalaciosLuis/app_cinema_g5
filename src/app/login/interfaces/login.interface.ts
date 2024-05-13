export interface LoginRespone{
    code:string,
    error:string,
    token:string,
    user:Usuario
}

export interface Usuario {
    id_usuario?:number,
    user:string,
    password:string,
    nombre?:string,
    apellido?:string,
    email?:string,
    is_active?:number,
    compra?: Compra[]
}

export interface Compra {
    id_compra:number,
    fecha_compra:string,
    is_active:number,
    entrada: Entrada[]
}

export interface Entrada{
    id_entrada:number,
    funcion: Funcion,
    is_active:number
}

export interface Funcion{
    id_funcion:number,
    pelicula:Pelicula,
    fecha_funcion: string,
    stock: number,
    sala: number,
    precio: number,
    is_active:number
}

export interface Pelicula {
    id_pelicula: number,
    titulo: string,
    sinopsis: string,
    director: string,
    duracion: number,
    puntuacion: number,
    is_estreno: number,
    is_active:number
}