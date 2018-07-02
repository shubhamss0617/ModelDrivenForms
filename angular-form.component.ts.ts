// core services
import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services';
import {FormManagerService} from '../../form-manager.service';

@Component({
    selector: 'app-angular-form',
    templateUrl: './app-angular-form.component.html',
    styleUrls: ['./app-angular-form.component.scss']
})
export class AppAngularFormComponent implements OnInit {
    // Component's Form Group Instance 
    personalInformationForm: FormGroup;
    
	// import form Manager Service
    constructor(private formManager: FormManagerService,private _apiService:ApiService) {
        
    }

    ngOnInit() {
        this.initializeForm();
    }
	
    initializeForm() {
		// pass respective formName defined in form-group-definitions.ts
        this.personalInformationForm = this.formManager.setupFormControls('personalInfo');
    }

    getPersonalInfoData() {
        // Retrive form Data api call
		this._apiService.getFormData().toPromise().then(personalInfoData => {
			if (saveResponse.result.ResultCode === ResponseStatusCodes.SUCCESS) {
				// set data into Form 
				this.personalInformationForm = this.formManager.setTemplateValues(this.personalInformationForm, personalInfoData);
			}
		}
    }
	
	personalInfoSubmit() {
        if (this.personalInformationForm.valid) {
            this._apiService.saveFormData(this.personalInformationForm.value).toPromise().then(saveResponse => {
                    if (saveResponse.result.ResultCode === ResponseStatusCodes.SUCCESS) {
                        this.personalInformationForm.reset();
                    }
            });
        }
	}
}
