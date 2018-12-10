import { Component, OnInit , EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-amount-control',
  templateUrl: './amount-control.component.html',
  styleUrls: ['./amount-control.component.scss']
})
export class AmountControlComponent implements OnInit {
 @Output() amountChanged = new EventEmitter<number>();
@Input() amount:number;
  constructor() { }

  ngOnInit() {
  }
  onChange= () => this.amountChanged.emit(this.amount);
  onIncremenet= () =>{
    this.amount ++;
    this.amountChanged.emit(this.amount);
  }
  onDecremenet = () => {
    if (this.amount  > 1){
    this.amount --;
    this.amountChanged.emit(this.amount);
    }
  }
}
