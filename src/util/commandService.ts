import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommandService {
  
  private commandSubject = new Subject<string>();

  sendCommand(command: string) {
    this.commandSubject.next(command);
  }

  getCommandObservable() {
    return this.commandSubject.asObservable();
  }
}
