
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
 
const HTML_TEMPLATE = `
<div *ngIf="pode_fn()">
<ng-content></ng-content>
</div>
`;
 
const CSS_STYLE = `
.special-text {
    font-weight: 800;
    font-size: 15pt;
    text-align: center;
    color: #0000FF;
}
`;
 
@Component({
  selector: 'pode',
  template: HTML_TEMPLATE,
})
export class PodeComponent {
  private _text: string;
  private _rules: string;
  private _rules_arr: Array<string>;
  constructor() {
    // debugger
    // this.text = text;
    // this.rules = "administrador";
    // console.log('Hello PodeComponent Component');
    this._text = 'Hello World';
  }
  @Input()  title: string

  @Input('rules')
  get rules(): string {
    return this.rules;
  }
  set rules(rules: string) {
    this._rules = rules;
    this._rules_arr = this._rules.split(', ');
  }
  // pode_fn() {
  //   debugger
  //   return pode('teste', this._rules_arr);
  // }
  pode_fn() {
    return pode('teste', this._rules_arr);
  }
}



function pode(userId: string, rules: Array<string>): Boolean {
  const user = userList.filter(u => u._id === userId_x)[0];
  const permissoes = [];
  Object.keys(rolesGroup).forEach(r => {
    if (user.roles.some(_r => _r == r)) {
      rolesGroup[r].forEach(_r => {
        if (permissoes.every(p => _r != p))
          permissoes.push(_r)
      })
    };
  });
  return permissoes.some(p => rules.indexOf(p) >= 0)
}


const userId_x = "userMarcelloId";

const rolesGroup = {
  gerente: [
    "gerente",
    "recepcao"
  ],
  administrador: [
    "gerente",
    "financeiro",
    "administrador",
    "recepcao",
  ],
  recepcao: [
    "recepcao",
  ],
  financeiro: [
    "financeiro"
  ]
}


const userList = [
  {
    _id: 'userGislainyId',
    email: 'gislainycrisostomo@gmail.com',
    roles: ["gerente"]
  },
  {
    _id: 'userJoseId',
    email: 'joseneto.design@gmail.com',
    roles: ["administrador"]
  },
  {
    _id: 'userMarcelloId',
    email: 'marcellovcs@gmail.com',
    roles: ["recepcao"]
  },
  {
    _id: 'userRamonId',
    email: 'ramonhenrique@gmail.com',
    roles: ["gerente", "financeiro"]
  },
];

export {
  pode
}