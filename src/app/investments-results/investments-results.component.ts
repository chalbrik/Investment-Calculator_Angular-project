import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private investmentService = inject(InvestmentService); //drugi sposób zamiast użycia konstruktora do wstrzyknięcia zależności (w tym przypadku serwisu, który obsługuje kalkulację danych wpisanych do formularzy)

  get results() {
    return this.investmentService.resultsData;
  }
}
