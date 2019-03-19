import { Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { delay,tap } from 'rxjs/operators';


@Directive({
  selector: '[appOuterClickManager]'
})
export class OuterClickManagerDirective implements OnInit, OnDestroy{

  constructor(private _elRef:ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
   }
  private listening:boolean;
  private globalClick$;

  @Output('clickOutside') clickOutside:EventEmitter<Object>;


  ngOnInit() {
    this.globalClick$ = fromEvent(document, 'click').pipe(
      delay(1)).subscribe((e:Event)=>{
        this.listening = true;
        this.onGlobalClick(e);
    });


  }


  onGlobalClick(event:Event) {
    if (event instanceof MouseEvent && this.listening === true) {
      
      if(this.isDescendant(this._elRef.nativeElement, event.target) === true) {
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

  ngOnDestroy() {
    this.globalClick$.unsubscribe();
  }

}
