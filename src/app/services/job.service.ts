import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { RootObject } from '../models/jobData.model';
import { Observable, takeLast, tap } from 'rxjs';
import { RootObject2 } from '../models/jobDetails.model';
import { RootObject3 } from '../models/companyData.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  dataEmitter = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  getParams(form: FormGroup): Observable<RootObject> {
    let formValue = form.value;

    let httpParams = new HttpParams({
      fromObject: {
        page: form.value.page,
      }
    });

    for(let key in formValue){
      
      if(formValue[key] != '' && key != 'page'){

        if(key == 'category'){
          formValue[key] = this.formatCategory(formValue[key])
        }
        if(key == 'location'){
          formValue[key] = this.formatLocation(formValue[key]);
        }
        
        httpParams = httpParams.append(key, formValue[key]);
      }

    }

    let request = this.getJobsList(httpParams);
    return request;
  }

  getJobsList(httpParams: HttpParams): Observable<RootObject>{
    let jobApiCall = this.http.get<RootObject>('https://www.themuse.com/api/public/jobs', {params: httpParams}).pipe(
      tap(obj => console.log(obj.results, obj.total)),
    )
    return jobApiCall;
  }

  getJobDetails(id: number): Observable<RootObject2>{
    let jobDetsCall = this.http.get<RootObject2>(`https://www.themuse.com/api/public/jobs/${id}`).pipe(
      tap(obj => console.log(obj)),
    )

    return jobDetsCall;
  }

  getCompanyDetails(id: number): Observable<RootObject3>{
    let companyDetsCall = this.http.get<RootObject3>(`https://www.themuse.com/api/public/companies/${id}`).pipe(
      tap(obj => console.log(obj)),
    )

    return companyDetsCall;
  }

  formatCategory(str: string): string{
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase().concat(arr[i].substring(1).toLowerCase());
    }
    return arr.join(" ");
  }

  formatLocation(str: string) {
    let arr = str.replace(",", "").split(" ");
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase().concat(arr[i].substring(1).toLowerCase());
    }
    return arr.join(", ");
  }

  raiseDataEmitterEvent(){
    this.dataEmitter.emit(0);
  }

}
