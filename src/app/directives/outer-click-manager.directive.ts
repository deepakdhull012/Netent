import { Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

/**
 * Diretive To handle outer click for any element
 * @export
 * @class OuterClickManagerDirective
 * @implements { OnInit, OnDestroy }
 */
@Directive({
  selector: '[appOuterClickManager]'
})
export class OuterClickManagerDirective implements OnInit, OnDestroy {

  private listening: boolean;
  private documentCliks$;

  constructor(private _elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }

  @Output('clickOutside') clickOutside: EventEmitter<Object>;

  /**
   * This Method is called to start listening to click events on document
   * @memberof OuterClickManagerDirective
   */

  ngOnInit() {
    this.documentCliks$ = fromEvent(document, 'click').pipe(
      delay(1)).subscribe((e: Event) => {
        this.listening = true;
        this.onGlobalClick(e);
      });
  }

  /**
   * This Method is called on document click 
   * @memberof OuterClickManagerDirective
   */

  onGlobalClick(event: Event) {
    if (event instanceof MouseEvent && this.listening === true) {

      if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }


  /**
   * This Method is used to check whether a node is descendent of another node
   * @memberof OuterClickManagerDirective
   */

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

  /**
   * This Method is used to unsubscribe the Global Click Observable
   * @memberof OuterClickManagerDirective
   */

  ngOnDestroy() {
    this.documentCliks$.unsubscribe();
  }

}
