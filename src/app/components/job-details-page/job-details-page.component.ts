import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RootObject3 } from 'src/app/models/companyData.model';
import { RootObject2 } from 'src/app/models/jobDetails.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  jobDetails?: RootObject2;
  companyDetails?: RootObject3;

  routeParams = this.route.snapshot.paramMap;
  jobIdFromRoute : number = Number(this.routeParams.get('jobId'))

  constructor(private route: ActivatedRoute, private jobService: JobService, private location: Location) { }

  ngOnInit(): void {
    this.showJobDetails()
  }

  showJobDetails(){
    this.jobService.getJobDetails(this.jobIdFromRoute).subscribe( res => {
      this.jobDetails = res; this.showCompanyDetails(res)}
      );
  }

  showCompanyDetails(res: RootObject2){
    this.jobService.getCompanyDetails(res.company.id).subscribe( res => this.companyDetails = res);
  }

  goBack(){
    this.location.back();
  }

}
