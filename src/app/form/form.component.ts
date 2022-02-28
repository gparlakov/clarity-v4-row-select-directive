import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export enum MakerCode {
  FORD = 'FORD_MOTOR',
  BENZ = 'MERCEDES_BENZ',
}

interface OptionModel {
  code: MakerCode;
  displayText: string;
}

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form = this._fb.group({
    seller: this._fb.group({
      identifier: ['', Validators.required],
    }),
  });

  readonly cars: OptionModel[] = [
    { code: MakerCode.FORD, displayText: 'Ford Motor Company' },
    { code: MakerCode.BENZ, displayText: 'Mercedes Benz Auto' },
  ];

  constructor(private _fb: FormBuilder) {}
}
