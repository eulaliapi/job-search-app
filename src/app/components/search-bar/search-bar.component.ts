import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() newRequest = new EventEmitter<FormGroup>();
  @Output() resetPage = new EventEmitter<number>();

  level_options: string[] = ['', 'Internship', 'Entry Level', 'Mid Level', 'Senior Level', 'management'];

  jobSearchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jobSearchForm = this.fb.group({
      category: '',
      location: '',
      level: this.level_options[0],
    })

  }

  onSubmit(form: FormGroup){
    this.newRequest.emit(form);
  }

}
