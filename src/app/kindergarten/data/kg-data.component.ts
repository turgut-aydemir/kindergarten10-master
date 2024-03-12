import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { CHILDREN_PER_PAGE } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-kg-data',
  templateUrl: './kg-data.component.html',
  styleUrls: ['./kg-data.component.scss']
})
export class KGDataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  public page: number = 0;

  ngOnInit(): void {
    this.backendService.getKindergardens();
  }

  public cancelRegistration(childId: number) {
  ///  this.backendService.deleteChildData(childId, this.currentPage);
  }
}


