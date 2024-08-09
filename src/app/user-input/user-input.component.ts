import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<investmentInput>();

  enteredInitialInvestmens: string = '0';
  enteredAnnualInvestments: string = '0';
  enteredExpectedReturn: string = '5';
  enteredDuration: string = '10';

  constructor(private investmenService: InvestmentService) {}

  onSubmit() {
    this.investmenService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestmens,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestments,
    });
  }
}
