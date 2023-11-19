import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resourse-nav',
  templateUrl: './resourse-nav.component.html',
  styleUrls: ['./resourse-nav.component.css']
})
export class ResourseNavComponent {
  constructor(private translateService:TranslateService){}
  isChecked: boolean = false;
  
  toggleLanguage(event: any) {
    const selectedLanguage = event.target.checked ? 'ar' : 'en';
    this.translateService.use(selectedLanguage);
  }
}
