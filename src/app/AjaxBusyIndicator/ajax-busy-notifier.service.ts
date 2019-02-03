import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AjaxBusyNotifierService {

 busy:BehaviorSubject<boolean>;

  constructor() {
    this.busy = new BehaviorSubject<boolean>(false);
    this.busy.next(false);
   }
}
