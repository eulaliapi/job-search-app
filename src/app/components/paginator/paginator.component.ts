import { Component, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { JobService } from 'src/app/services/job.service';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
 
  @Output() newPageIndex = new EventEmitter<number>();

  pageIndex: number = 0;
  @Input() length: number = 100;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.dataEmitter.subscribe((val) =>this.paginator.firstPage());
  }

  getPage(pageIndex: number){
    this.newPageIndex.emit(pageIndex);
  }

}
