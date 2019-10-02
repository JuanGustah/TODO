import { Component } from '@angular/core';
import {Model,TodoItem} from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model();

  getName= () => this.model.user;
  getItensOrdenados(){
    return this.model.items.sort((a,b)=>{
      return <any>new Date(b.data)-<any>new Date(a.data);
    });
  }
  getTodoItens=()=> this.getItensOrdenados().filter(item=>!item.done);
  getPriAlta=()=>this.getTodoItens().filter(atem=>atem.prioridade==="alta")
  getPriMedia=()=>this.getTodoItens().filter(mtem=>mtem.prioridade==="media")
  getPriBaixa=()=>this.model.items.filter(btem=>btem.prioridade==="baixa")
  getItensFeitos=()=> this.model.items.filter(item=>item.done);

  addItem(newItem,prioridade,data){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem,false,prioridade,data));
    }
  }
  corrigirTarefa(itemErrado){
    itemErrado.done="";
  }

}
