import { Component } from '@angular/core';
import {Model,TodoItem} from './model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model();
  dataAtual=new Date()
  Item=new TodoItem("","","","")
  

  getName= () => this.model.user;
  getItensOrdenados(){
    return this.model.items.sort((a,b)=>{
      return <any>new Date(a.data)-<any>new Date(b.data);
    });
  }
  getItensUrgentes(){
    return this.getItensOrdenados().filter(item=>new Date(item.data)<this.dataAtual)
  }
  getTodoItens=()=> this.getItensOrdenados().filter(item=>!item.done);
  getPriAlta=()=>this.getTodoItens().filter(atem=>atem.prioridade==="alta" && new Date(atem.data)>this.dataAtual)
  getPriMedia=()=>this.getTodoItens().filter(mtem=>mtem.prioridade==="media" && new Date(mtem.data)>this.dataAtual)
  getPriBaixa=()=>this.getTodoItens().filter(btem=>btem.prioridade==="baixa" && new Date(btem.data)>this.dataAtual)
  getItensFeitos=()=> this.model.items.filter(item=>item.done);

  addItem(){
    if(this.Item.action!=""&&this.Item.data!=""&&this.Item.prioridade!=""){
      if(this.model.items==""){
        this.model.items.push(this.Item);
        this.Item=new TodoItem("","","","")
      }
      else{
        let variable= this.getTodoItens().filter(a=>a.action==this.Item.action)
        if(variable==""){
          this.model.items.push(this.Item);
          this.Item=new TodoItem("","","","")
        }
      }
      
    }
  }
  corrigirTarefa(itemErrado){
    itemErrado.done="";
  }
  removerTarefa(itemParaRemover){
    this.model.items.splice(this.model.items.indexOf(itemParaRemover),1)
  }
  editarTarefa(itemParaEditar){
    this.model.items.splice(this.model.items.indexOf(itemParaEditar),1)
    this.Item.action=itemParaEditar.action
    this.Item.prioridade=itemParaEditar.prioridade
    this.Item.data=itemParaEditar.data
  }

}
