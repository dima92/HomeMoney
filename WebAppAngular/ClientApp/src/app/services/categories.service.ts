import { Http,Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Category } from "../models/category.model";

@Injectable()
export class CategoriesService  {
  constructor(public http: Http) {
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post('categories', category)
      .pipe
        (map((response: Response) => response.json())
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('categories')
      .pipe
        (map((response: Response) => response.json())
      );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put(`categories/${category.id}`, category)
      .pipe
        (map((response: Response) => response.json())
      );
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get(`categories/${id}`)
      .pipe
        (map((response: Response) => response.json())
      );
  }
}
