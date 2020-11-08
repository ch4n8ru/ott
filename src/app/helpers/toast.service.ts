import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(body:string){
    this.show(body ,  { classname: 'bg-success text-light', delay: 10000 })
  }

  showFailure(body){
    this.show( body , { classname: 'bg-danger text-light', delay: 10000 })
  }
 
}
