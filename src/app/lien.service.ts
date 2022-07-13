import { Injectable } from '@angular/core';
import { Lien } from './lien';
import { Category } from './category.enum';
import { from } from 'rxjs';
import { customOp } from './custom-operator';

import * as module0Data from './data/module0.json';
import * as module1Data from './data/module1.json';
import * as module2Data from './data/module2.json';

@Injectable()
export class LienService {
  liens: Lien[] = [];
  module_00: Lien[] = [];
  module_01: Lien[] = [];
  module_02: Lien[] = [];

  constructor() {
    this.importModule0();
    this.importModule1();
    this.importModule2();

    this.liens = [...this.module_00, ...this.module_01, ...this.module_02];
  }

  importModule0() {
    this.module_00 = (module0Data as any).default as Lien[];
    this.module_00.forEach((lien) => (lien.category = Category.MODULE_00));
  }

  importModule1() {
    this.module_01 = (module1Data as any).default as Lien[];
    this.module_01.forEach((lien) => (lien.category = Category.MODULE_1));
  }

  importModule2() {
    this.module_02 = (module2Data as any).default as Lien[];
    this.module_02.forEach((lien) => (lien.category = Category.MODULE_2));
  }

  get list() {
    return from(this.liens).pipe(customOp());
  }
}
