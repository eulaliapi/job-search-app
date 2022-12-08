import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Result, RootObject } from 'src/app/models/jobData.model';
import { JobService } from 'src/app/services/job.service';



@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private jobService: JobService) { }

  resetIndex: number = 0;
  requestForm!: FormGroup;
  totalItems!: RootObject["total"];
  results?: Result[];

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      category: '',
      location: '',
      level: '',
      page: this.resetIndex,
    })

    this.jobService.getParams(this.requestForm).subscribe(res => {
      this.totalItems = res.total;
      this.results = res.results;
    });
  }

  newFormRequest(e: FormGroup) {
    this.requestForm.patchValue({ category: e.value.category, location: e.value.location, level: e.value.level });
    this.jobService.raiseDataEmitterEvent();
    this.jobService.getParams(this.requestForm).subscribe(res => {
      this.results = res.results;
      this.totalItems = res.total;
    });
  }

  newPage(e: number) {

    this.requestForm.patchValue({ page: e });
    this.jobService.getParams(this.requestForm).subscribe(res => {
      this.results = res.results;
      this.totalItems = res.total;
    });

  }

}
