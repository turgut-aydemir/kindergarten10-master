import { Injectable } from '@angular/core';
import { Kindergarden, KindergardenResponse } from './interfaces/Kindergarden';
import { Child, ChildResponse } from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public kindergardens: Kindergarden[] = [];
  public kindergarden: KindergardenResponse[] = [];
  public children: ChildResponse[] = []
  public childrenTotalCount: number = 0;
  public kindergardenTotalCount: number = 0;
  public isLoading = true;
}
