import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private url: string ='http://localhost:8080/conge/employes';

  private httpHeaders: HttpHeaders;



  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: 'Basic ' + sessionStorage.getItem('tokenId'),
    });

   }

   public allEmployer(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url, { headers: this.httpHeaders });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id, {
      headers: this.httpHeaders,
    });
  }

  public update(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.url}/${utilisateur.id}`, utilisateur, {
      headers: this.httpHeaders,
    });
  }

  public insert(utilisateur: Utilisateur): Observable<Utilisateur> {
    const o = {
      id: utilisateur.id,   //id needed?
      mail: utilisateur.mail,
      password: utilisateur.mail,
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
     // role: utilisateur.role,
      id_manager: utilisateur.id_manager,
      
    };
    return this.http.post<Utilisateur>(this.url, o, { headers: this.httpHeaders });
  }
}
