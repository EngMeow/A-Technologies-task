import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {
  constructor(private translateService:TranslateService){}
  isChecked: boolean = false;
  imageUrl: string = 'assets/img/profile.png';

  toggleLanguage(event: any) {
    const selectedLanguage = event.target.checked ? 'ar' : 'en';
    this.translateService.use(selectedLanguage);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }else {
      // If no file selected, reset to the default image
      this.imageUrl;
    }
  }

  radioValues = ['Book through day', 'Book duration ( more than day )'];
  selectedResourceOptions: string | null = null; // Initialize it at the declaration
    
} 
