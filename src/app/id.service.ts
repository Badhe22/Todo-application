import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
    
  constructor() { }

  private currentId = 1;

  getNextId(): number {
    return this.currentId++;
  }
}
