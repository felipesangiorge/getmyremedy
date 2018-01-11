import { Component, OnInit, Input, ContentChild, AfterContentInit,forwardRef, Output, EventEmitter} from '@angular/core';
import{NgModel,NG_VALUE_ACCESSOR, ControlValueAccessor}from'@angular/forms'

@Component({
  selector: 'gmr-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit, ControlValueAccessor {

@Input()  label:string
@Input()  errorMessage:string

  input: any
  onChange:any

  @ContentChild(NgModel) model:NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse component precisa ser usado com uma diretiva NgModel')
    }
  }

  hasSuccess():boolean{
    return this.input.valid && (this.input.dirty|| this.input.touched)
  }
  hasError():boolean{
    return this.input.invalid && (this.input.dirty|| this.input.touched)
  }
  setValue(value:any){
    this.input = value
    this.onChange(this.input)
  }

  writeValue(obj:any):void{
    this.input = obj

  }
  registerOnChange(fn: any):void{
    this.onChange = fn
  }
  registerOnTouched(fn:any):void{}
  setDisabledState?(isDisabled:boolean):void{}


}
