import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-verification-child',
  templateUrl: './verification-child.component.html',
  styleUrls: ['./verification-child.component.css']
})
export class VerificationChildComponent implements OnChanges {

  constructor() { }

 
  @Input() verifyForm: any;	
  @Input() mobile: string;	
  
  otp:number;
  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
	  
	for (let propName in changes) {  
    console.log('Rahul Patil')
		let change = changes[propName];
    console.log(change)
    
	/*	let curVal  = JSON.stringify(change.currentValue);
		let prevVal = JSON.stringify(change.previousValue);
		let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
    
    console.log(changeLog)
		if (propName === 'mobile') {
		   this.allMsgChangeLogs.push(changeLog);
		} else if (propName === 'verifyForm') {
		   this.allEmployeeChangeLogs.push(changeLog);
		}
        }
  */    
  }
  }
}
