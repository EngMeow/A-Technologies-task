import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resource-availability',
  templateUrl: './resource-availability.component.html',
  styleUrls: ['./resource-availability.component.css']
})
export class ResourceAvailabilityComponent {
  constructor(private translateService: TranslateService) {}

  isChecked: boolean = false;

  toggleLanguage(event: any) {
    const selectedLanguage = event.target.checked ? 'ar' : 'en';
    this.translateService.use(selectedLanguage);
  }

  changeLanguage(event: any) {
    const selectedLanguage = event.target.value;
    this.translateService.use(selectedLanguage);
  }

  DurationradioValues = ['Service time', 'Fixed time'];
  selectedDuration: string | null = null; // Initialize it at the declaration

  BookingRadioValues = ['Book for one person', 'Book for multi-persons'];
  selectedBooking: string | null = null; // Initialize it at the declaration

  counter: number = 0;

  incrementCounter() {
    if (this.selectedDuration === 'Fixed time') {
      this.counter++;
    }
  }

  decrementCounter() {
    if (this.selectedDuration === 'Fixed time' && this.counter > 0) {
      this.counter--;
    }
  }
}
