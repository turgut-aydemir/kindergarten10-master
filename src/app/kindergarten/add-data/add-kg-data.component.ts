import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-add-kg-data',
  templateUrl: './add-kg-data.component.html',
  styleUrls: ['./add-kg-data.component.scss']
})



export class AddKGDataComponent implements OnInit{
  
  constructor(private formbuilder: FormBuilder, public storeService: StoreService, public backendService: BackendService) {
  }
  public addKindergartenForm: any;
  @Input() currentPage!: number;
  selectedFile: File | undefined;

  ngOnInit(): void {
    this.addKindergartenForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      address: ['', Validators.required],
      availablePlaces: [, Validators.required]
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if(this.addKindergartenForm.valid) {
      console.log(this.currentPage);
      this.backendService.addKindergardenData(this.addKindergartenForm.value, this.currentPage, this.selectedFile);
    }
  }
}
