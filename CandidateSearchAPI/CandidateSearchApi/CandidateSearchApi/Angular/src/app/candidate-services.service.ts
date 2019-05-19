import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './core/models/Candidate.mode';
@Injectable({
  providedIn: 'root'
})
export class CandidateServicesService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:44370/api/Candidate';

  //getCandidateByPosId(posId: number): Observable<Candidate> {
  //  alert("test");
  //  return this.httpClient.get<Candidate>(this.baseUrl + "/" + posId);
    
  //}

  //getCandidateByPosId(): Observable<string[]> {
  //  alert("test");
  //  return this.httpClient.get<string[]>(this.baseUrl);

  //}

  //getCandidateByPosId(id: number) {
  //  return this._http.get<string[]>(this.baseUrl);
  //}

  public getCandidateByPosId(id:number): Observable<string[]>{
    return this.httpClient.get<string[]>("https://localhost:44370/api/Candidate/105");
  }
}
