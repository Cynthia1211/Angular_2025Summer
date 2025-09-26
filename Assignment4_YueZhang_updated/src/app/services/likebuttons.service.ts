import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikebuttonsService {

  likeCard(data: any) { 
    document.getElementById(data)!.style.color = "crimson";
  }
}
