export class Utilisateur {

    private _id: number;
    private _mail: string;
    private _password:string;
    private _nom:string;
    private _prenom:string;
    //private Role role;
    
    // private _ServiceU service;
    private _id_manager: number;
    
    
    
    constructor(nom: string ='', prenom: string ='', mail: string ='', password: string ='', id: number, id_manager: number ) {
    this._id = id;
    this._mail = mail;
    this._password = password;
    this._nom = nom;
    this._prenom = prenom;
    this._id_manager = id_manager;
    
    }
    
    
    
    
    /**
    * Getter id
    * @return {number}
    */
    public get id(): number {
    return this._id;
    }
    
    /**
    * Getter mail
    * @return {string}
    */
    public get mail(): string {
    return this._mail;
    }
    
    /**
    * Getter password
    * @return {string}
    */
    public get password(): string {
    return this._password;
    }
    
    /**
    * Getter nom
    * @return {string}
    */
    public get nom(): string {
    return this._nom;
    }
    
    /**
    * Getter prenom
    * @return {string}
    */
    public get prenom(): string {
    return this._prenom;
    }
    
    /**
    * Getter id_manager
    * @return {number}
    */
    public get id_manager(): number {
    return this._id_manager;
    }
    
    /**
    * Setter id
    * @param {number} value
    */
    public set id(value: number) {
    this._id = value;
    }
    
    /**
    * Setter mail
    * @param {string} value
    */
    public set mail(value: string) {
    this._mail = value;
    }
    
    /**
    * Setter password
    * @param {string} value
    */
    public set password(value: string) {
    this._password = value;
    }
    
    /**
    * Setter nom
    * @param {string} value
    */
    public set nom(value: string) {
    this._nom = value;
    }
    
    /**
    * Setter prenom
    * @param {string} value
    */
    public set prenom(value: string) {
    this._prenom = value;
    }
    
    /**
    * Setter id_manager
    * @param {number} value
    */
    public set id_manager(value: number) {
    this._id_manager = value;
    }
    
    
    }