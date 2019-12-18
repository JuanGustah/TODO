export class Model{
    user;
    items;

    constructor(){
        this.user= "Erik"
        this.items=[]
    }
}
export class TodoItem{
    action;
    done;
    prioridade;
    data;
    constructor(action,done,prioridade,data){
        this.action=action;
        this.done=done;
        this.prioridade=prioridade;
        this.data=data;
    }
}