export class Model{
    user;
    items;

    constructor(){
        this.user= "Juan"
        this.items=[new TodoItem("Preparar aula",false,"alta","2019-08-15"),
                    new TodoItem("Falar com o Trump",false,"media","2019-09-15"),
                    new TodoItem("Caminhar 10km",false,"baixa","2019-10-15"),
                    new TodoItem("Dominar o mundo",false,"baixa","2018-11-15")
    ]
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