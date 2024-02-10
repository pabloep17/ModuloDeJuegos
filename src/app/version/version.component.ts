import { Component } from '@angular/core';
import { getChangelog } from '../../assets/config';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  changelog:any = []
  
  ngOnInit() {
    getChangelog().then(data => {
      this.changelog = data
    });
  }

}
