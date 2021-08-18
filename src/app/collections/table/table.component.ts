import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/data';
import { Headers } from 'src/app/headers';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 // const data = <Data>
 @Input('class') classNames = ''
  @Input() data: Data[] = [];
  @Input() headers: Headers[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
