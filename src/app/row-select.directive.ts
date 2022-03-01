import { Directive, Input } from '@angular/core';
// 👇👇👇 if this line breaks when updating Clarity - it's possible Selection is exported as something other than `ɵco` from '@clr/angular/clr-angular.d.ts' - update and we're good
import { ɵco as Selection } from '@clr/angular';
// This is needed since there is really no way that clr-datagrid exposes to explicitly disable selection.
// So it makes sense to couple with Clarity version.

// for the Test's sake
export { Selection };

/**
 * Use this inside a clr data grid to disable selection programmatically. It takes the Selection from the ClrDataGrid providers that's why it won't work if placed out of it.
 *
 * @example
 *
 * <clr-datagrid [(clrDgSelected)]="selected">
 *  <vss-row-selection [disable]="entityIsNative"> </vss-row-selection>
 * ...
 * </clr-datagrid>
 */
@Directive({
  selector: 'row-selection',
})
export class DisableRowSelectionDirective {
  private changedFrom: number | null = null;

  @Input()
  set disable(v: boolean) {
    // if (v) {
    //   if (this.changedFrom == null) {
    //     this.changedFrom = this.hostGridSelection.selectionType;
    //   }
    //   this.hostGridSelection.selectionType = 0; // None
    // } else if (this.changedFrom != null) {
    //   this.hostGridSelection.selectionType = this.changedFrom;
    //   this.changedFrom = null;
    // }
  }

  constructor(private readonly hostGridSelection: Selection) {}
}
