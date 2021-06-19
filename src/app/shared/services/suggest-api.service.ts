import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestAPIService {

  constructor() { }
  async getJSONRepos() {
    return await fetch('http://34.93.246.194/api/v1/suggest').then(response => response.json());
  }

}
