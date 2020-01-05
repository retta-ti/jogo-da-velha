import { Component, Input, OnInit } from '@angular/core';
import {Peca} from "../peca";

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.css']
})
export class PecaComponent implements OnInit {

  @Input()
  peca:Peca;

  constructor() { }

  ngOnInit() {

  }

}
