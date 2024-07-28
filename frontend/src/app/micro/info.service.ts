import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private info: string;

  constructor() { }

  getInfo(): string {
    return this.info;
  }

  setInfo(newInfo: string) {
    this.info = newInfo;
  }
}
