import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.css'],
})
export class NavigationComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
