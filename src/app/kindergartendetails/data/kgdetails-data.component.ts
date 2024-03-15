import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { KINDERGARTEN_PER_PAGE2 } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-kgdetails-data',
  templateUrl: './kgdetails-data.component.html',
  styleUrls: ['./kgdetails-data.component.scss']
})
export class KGDetailsDataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  public page: number = 0;

  ngOnInit(): void {
    this.backendService.getKindergarden2(this.currentPage);
  }

  selectPage(i: any) {
    let currentPage = i;
    this.selectPageEvent.emit(currentPage)
    this.backendService.getKindergarden2(currentPage);
  }

  public returnAllPages() {
    let res = [];
    const pageCount = Math.ceil(this.storeService.kindergardenTotalCount / KINDERGARTEN_PER_PAGE2);
    for (let i = 0; i < pageCount; i++) {
      res.push(i + 1);
    }
    return res;
  }

}