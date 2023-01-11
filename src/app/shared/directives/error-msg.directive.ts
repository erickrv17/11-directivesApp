import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color:string ='red';
  private _message:string ='required**';
  htmlElement: ElementRef<HTMLElement>;


  //@Input() color: string ='red'
  @Input() set color(value: string){
    //this.htmlElement.nativeElement.style.color=value;
    this._color=value;
    this.setColor();
  }
  //@Input() message: string ='Required**'
  @Input() set message(value: string){
    //this.htmlElement.nativeElement.innerText= value;
    this._message=value;
    this.setMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('directive constructor');
    //console.log(el);
    this.htmlElement=el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*if (changes['message']) {
      const message = changes['message'].currentValue;
      this.htmlElement.nativeElement.innerText= message;
    }
    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color= color;
    }
    
    console.log(changes);*/
  }

  ngOnInit(): void {
    //console.log('Directive OnInit');
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setClass(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage():void{
    this.htmlElement.nativeElement.innerText=this._message;
  }

}
