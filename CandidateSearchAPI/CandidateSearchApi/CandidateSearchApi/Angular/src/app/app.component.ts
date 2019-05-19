import { Component, OnInit } from '@angular/core';
import { CandidateServicesService } from './candidate-services.service';
import { Candidate } from './core/models/Candidate.mode';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  candidate: string[];
  policies: any = [
    { id: 0, name: "policy001" },
    { id: 2, name: "policy002" },
    { id: 3, name: "policy003" },
    { id: 4, name: "policy004" },
    { id: 5, name: "policy005" },
  ];

  text: string = "Juhi";
  constructor(private service: CandidateServicesService) { }
  search():void {
    console.log(this.text);
     this.service.getCandidateByPosId(101)
      .subscribe((data) => {
        
        this.candidate = data;
      });

    //console.log(this.candidate);
  }
}



//constructor(private _candidateService: CandidateServicesService) { }
//title = 'BestCandidateSearchApp';
//posId: string = "101";

////bestCandidate = {
////  "CandidateId": 1,
////  "Name": "John Smith",
////  "Phone": "0987654321",
////  "DOB": "12/11/1990",
////  "Email": "j@screen.com",
////  "Skills": "Sql, .Net, MVC"
////}
//bestCandidate: Candidate;
////searchBestCandidate() {

////  this._candidateService.getCandidateByPosId(101).subscribe(data => {
////    this.bestCandidate = data;
////  });
////  alert("test2");
////  //alert(this.bestCandidate.Email);

////}
//str: string[];
//n: number;
////searchBestCandidate() {

////  this._candidateService.getCandidateByPosId().subscribe((res : any[])=> {
////    console.log(res);
////    this.str = res;
////  });
////  //alert(this.str[0]);
////  console.log(this.str);
////  alert("strTEE");
////  //alert(this.bestCandidate.Email);

////}

//searchBestCandidate() {

//  this._candidateService.getCandidateByPosId().subscribe((res) => {
//    console.log(res.body);
//  });
//  //alert(this.str[0]);

//  //alert(this.bestCandidate.Email);

//}
