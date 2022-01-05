import { Component } from '@angular/core';
import { versionInfo } from 'src/git-version/version-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-qv-devops';

  public version: string;

  constructor(){
    this.version = versionInfo.tag == null ? versionInfo.hash : versionInfo.tag
  }
}
