import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarden, KindergardenResponse } from './interfaces/Kindergarden';
import { StoreService } from './store.service';
import { Child, ChildResponse } from './interfaces/Child';
import { CHILDREN_PER_PAGE, KINDERGARTEN_PER_PAGE, KINDERGARTEN_PER_PAGE2 } from './constants';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getKindergardens() {
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
      this.storeService.kindergardens = data;
      this.storeService.isLoading = false;
    });
  }

  public getChildren(page: number) {
    this.http.get<ChildResponse[]>(`http://localhost:5000/childs?_expand=kindergarden&_page=${page}&_limit=${CHILDREN_PER_PAGE}`, { observe: 'response' }).subscribe(data => {
      this.storeService.children = data.body!;
      this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
      this.storeService.isLoading = false;
    });
    }

    public getKindergarden(page: number) {
      this.http.get<Kindergarden[]>(`http://localhost:5000/kindergardens?_expand=id&_page=${page}&_limit=${KINDERGARTEN_PER_PAGE}`, { observe: 'response' }).subscribe(data => {
        this.storeService.kindergardens = data.body!;
        this.storeService.kindergardenTotalCount = Number(data.headers.get('X-Total-Count'));
        this.storeService.isLoading = false;
      });
      }

      public getKindergarden2(page: number) {
        this.http.get<Kindergarden[]>(`http://localhost:5000/kindergardens?_expand=id&_page=${page}&_limit=${KINDERGARTEN_PER_PAGE2}`, { observe: 'response' }).subscribe(data => {
          this.storeService.kindergardens = data.body!;
          this.storeService.kindergardenTotalCount = Number(data.headers.get('X-Total-Count'));
          this.storeService.isLoading = false;
        });
        }

    public addChildData(child: Child, page:  number) {
      this.http.post('http://localhost:5000/childs', child).subscribe(_ => {
        this.getChildren(page);
      })
    }

    public addKindergardenData(kindergarden: Kindergarden, page: number, image?: File) {
      // Convert image file to base64 string if an image is provided
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          // Assign the base64 string to the kindergarden object
          kindergarden.uploadedPicture = reader.result as string;
          // Post the kindergarten data to your backend
          this.postKindergartenData(kindergarden, page);
        };
      } else {
        // If no image provided, post the kindergarten data without the image
        this.postKindergartenData(kindergarden, page);
      }
    }
    
  
    private postKindergartenData(kindergarden: Kindergarden, page: number) {
      this.http.post('http://localhost:5000/kindergardens', kindergarden).subscribe(_ => {
        this.getKindergarden(page);
      });
    }
  
    public deleteChildData(childId: string, page: number) {
      this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe(_=> {
        this.getChildren(page);
      })
    }

  }

