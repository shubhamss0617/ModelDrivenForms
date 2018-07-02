import { Injectable } from '@angular/core';
import {
   FormGroup,
   FormControl,
   FormArray,
   NgForm,
   Validators,
   ValidationErrors,
   FormBuilder
} from '@angular/forms';

import { formGroupDefinations } from './form-group-definations';
@Injectable()
export class FormManagerService {
   forms;
   constructor(private fb: FormBuilder) {
   }

   setupFormControls(formName) {
      this.fb = new FormBuilder();
      this.forms = formGroupDefinations.formGroups;
      const formGroup = this.forms.find((form) => {
         return formName === form.formGroup;
      });
      const formGroupInstance = {};
      formGroup.formControls.forEach(controls => {
         formGroupInstance[controls.name] = [null, this.getFieldValidators(controls)];
      });
      return this.fb.group(formGroupInstance);
   }

   setTemplateValues(formGroupObj, data) {
      for (const key in data) {
         if (data.hasOwnProperty(key) && !!formGroupObj.controls[key]) {
            formGroupObj.controls[key].patchValue(data[key]);
         }
      }
      return formGroupObj;
   }

   getFieldValidators(field): Validators[] {
      const result = [];
      for (const validation of field.validations) {
         result.push(validation);
      }
      return (result.length > 0) ? [Validators.compose(result)] : [];
   }
}

