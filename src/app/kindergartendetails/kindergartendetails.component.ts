import { Component } from '@angular/core';

@Component({
  selector: 'app-kindergartendetails',
  templateUrl: './kindergartendetails.component.html',
  styleUrls: ['./kindergartendetails.component.scss']
})
export class KindergartendetailsComponent {
  public currentPage: number = 1;
  public showAddData = true;

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

}
