import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/jobData.model';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  @Input() results?: Result[];

  constructor() { }

  ngOnInit(): void {
  }

}
