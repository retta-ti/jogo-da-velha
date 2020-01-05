import { Component, OnInit } from '@angular/core';
import {Peca} from "../peca";

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit {

  pecas: Peca[] = [
      { linha: 1, coluna: 1, valor: 'X' },
      { linha: 1, coluna: 2, valor: 'X' },
      { linha: 1, coluna: 3, valor: 'X' },
      { linha: 2, coluna: 1, valor: 'X' },
      { linha: 2, coluna: 2, valor: 'X' },
      { linha: 2, coluna: 3, valor: 'X' },
      { linha: 3, coluna: 1, valor: 'X' },
      { linha: 3, coluna: 2, valor: 'X' },
      { linha: 3, coluna: 3, valor: 'X' },
];

  constructor() { }

  ngOnInit() {
  }

}
