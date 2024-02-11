import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getChangelog } from '../../assets/functions';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  changelog:any = []

  constructor(private route: ActivatedRoute) { }

  v:string = ""
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.v = params['version']
    });
    getChangelog().then(data => {
      this.changelog = data
    });
  }

}
