import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  public itens: Array<any>=[
    //{etiqueta:"NTB123", descricao:"Notebook Dell i5", dataAquisicao:"2018-02-22 13:10:23.781"},
    //{etiqueta:"MOU321", descricao:"Mouse Sem Fi da Clone", dataAquisicao:"2018-02-22 13:10:23.797"}
  ]

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.itemService.listar().subscribe(dados => {
      this.itens = dados;
    });
  }

  adiconar(frm: FormControl){
    console.log(frm.value);
    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }


}
