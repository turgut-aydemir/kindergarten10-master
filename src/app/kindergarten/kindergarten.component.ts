import { Component } from '@angular/core';

@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.scss']
})
export class KindergartenComponent {
  public currentPage: number = 1;
  public showAddData = true;

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData = showAddData;
  }

}
