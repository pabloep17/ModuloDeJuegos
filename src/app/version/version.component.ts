import { Component } from '@angular/core';
import { changelog } from '../../assets/config';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  changelog:any = changelog
}
