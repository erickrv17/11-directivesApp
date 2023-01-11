import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string ='red'
  @Input() message: string ='Requiered**'

  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('directive constructor');
    //console.log(el);
    this.htmlElement=el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      const message = changes['message'].currentValue;
      this.htmlElement.nativeElement.innerText= message;
    }
    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color= color;
    }
    
    console.log(changes);
  }

  ngOnInit(): void {
    //console.log('Directive OnInit');
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this.color;
    this.htmlElement.nativeElement.className='form-text';
  }

  setClass(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage():void{
    this.htmlElement.nativeElement.innerText=this.message;
  }

}