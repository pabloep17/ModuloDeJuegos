import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getChangelogById, getToolById, getTools } from '../../assets/functions';

@Component({
  selector: 'app-version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.css']
})
export class VersionDetailComponent {

  constructor(private route: ActivatedRoute) { }

  version:any = []
  tools:any = []

  ngOnInit() {
    this.route.params.subscribe(params => {
      getChangelogById(params['version']).then(data => {
        this.version = data
      })
    });
    getTools().then(data => {
      this.tools = data
    })
  }

  getToolById(id:string) {
    return this.tools.find((tool:any) => tool.id === id)
  }
}
