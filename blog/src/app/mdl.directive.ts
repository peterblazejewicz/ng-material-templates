import { Directive, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[blog-mdl]'
})
export class MdlDirective implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
