import { Injectable } from '@angular/core';
import { Lien } from './lien';
import { Category } from './category.enum';
import { from } from 'rxjs';
import { customOp } from './custom-operator';

import * as module0Data from './data/module0.json';
import * as module1Data from './data/module1.json';
import * as module2Data from './data/module2.json';
import * as module3Data from './data/module3.json';
import * as module4Data from './data/module4.json';
import * as module5Data from './data/module5.json';
import * as module6Data from './data/module6.json';
import * as module7Data from './data/module7.json';
import * as module8Data from './data/module8.json';
import * as module9Data from './data/module9.json';
import * as module10Data from './data/module10.json';
import * as module11Data from './data/module11.json';
import * as module12Data from './data/module12.json';
import * as module13Data from './data/module13.json';

@Injectable()
export class LienService {
  liens: Lien[] = [];
  module_00: Lien[] = [];
  module_01: Lien[] = [];
  module_02: Lien[] = [];
  module_03: Lien[] = [];
  module_04: Lien[] = [];
  module_05: Lien[] = [];
  module_06: Lien[] = [];
  module_07: Lien[] = [];
  module_08: Lien[] = [];
  module_09: Lien[] = [];
  module_10: Lien[] = [];
  module_11: Lien[] = [];
  module_12: Lien[] = [];
  module_13: Lien[] = [];

  constructor() {
    this.importModule0();
    this.importModule1();
    this.importModule2();
    this.importModule3();
    this.importModule4();
    this.importModule5();
    this.importModule6();
    this.importModule7();
    this.importModule8();
    this.importModule9();
    this.importModule10();
    this.importModule11();
    this.importModule12();
    this.importModule13();

    this.liens = [
      ...this.module_00,
      ...this.module_01,
      ...this.module_02,
      ...this.module_03,
      ...this.module_04,
      ...this.module_05,
      ...this.module_06,
      ...this.module_07,
      ...this.module_08,
      ...this.module_09,
      ...this.module_10,
      ...this.module_11,
      ...this.module_12,
      ...this.module_13,
    ];
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

  importModule3() {
    this.module_03 = (module3Data as any).default as Lien[];
    this.module_03.forEach((lien) => (lien.category = Category.MODULE_3));
  }

  importModule4() {
    this.module_04 = (module4Data as any).default as Lien[];
    this.module_04.forEach((lien) => (lien.category = Category.MODULE_4));
  }

  importModule5() {
    this.module_05 = (module5Data as any).default as Lien[];
    this.module_05.forEach((lien) => (lien.category = Category.MODULE_5));
  }

  importModule6() {
    this.module_06 = (module6Data as any).default as Lien[];
    this.module_06.forEach((lien) => (lien.category = Category.MODULE_6));
  }

  importModule7() {
    this.module_07 = (module7Data as any).default as Lien[];
    this.module_07.forEach((lien) => (lien.category = Category.MODULE_7));
  }
  importModule8() {
    this.module_08 = (module8Data as any).default as Lien[];
    this.module_08.forEach((lien) => (lien.category = Category.MODULE_8));
  }
  importModule9() {
    this.module_09 = (module9Data as any).default as Lien[];
    this.module_09.forEach((lien) => (lien.category = Category.MODULE_9));
  }
  importModule10() {
    this.module_10 = (module10Data as any).default as Lien[];
    this.module_10.forEach((lien) => (lien.category = Category.MODULE_10));
  }
  importModule11() {
    this.module_11 = (module11Data as any).default as Lien[];
    this.module_11.forEach((lien) => (lien.category = Category.MODULE_11));
  }
  importModule12() {
    this.module_12 = (module7Data as any).default as Lien[];
    this.module_12.forEach((lien) => (lien.category = Category.MODULE_12));
  }

  importModule13() {
    this.module_13 = (module13Data as any).default as Lien[];
    this.module_13.forEach((lien) => (lien.category = Category.MODULE_13));
  }

  get list() {
    return from(this.liens).pipe(customOp());
  }
}
