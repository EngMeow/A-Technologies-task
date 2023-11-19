import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent {
  constructor(private translateService:TranslateService){}
  isChecked: boolean = false;
  
  toggleLanguage(event: any) {
    const selectedLanguage = event.target.checked ? 'ar' : 'en';
    this.translateService.use(selectedLanguage);
  }
  
    changeLanguage(event: any) {
      const selectedLanguage = event.target.value;
      this.translateService.use(selectedLanguage);
    }

    translate(event:any)
    {
      this.translateService.use(event.target.value)
    }
    
    activeButton: number | null = null;

    setActiveButton(buttonNumber: number): void {
      this.activeButton = buttonNumber;
    }

    daysOfWeek = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    checkboxStates: { [key: string]: boolean } = {};

    toggleCheckbox(day: string): void {
      this.checkboxStates[day] = !this.checkboxStates[day];
    }

    forms: any[] = [];

    addAction(dayOfWeek: string) {
      this.forms.push({ dayOfWeek: dayOfWeek });
    }

    removeAction(index: number) {
      this.forms.splice(index, 1);
    }
}
