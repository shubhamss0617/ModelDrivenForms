import { Validators } from '@angular/forms';

export const formGroupDefinations = {
   formGroups: [{
      formName: 'personalInfo',
      formControls : [
         {
            name: 'title',
            validations: [
               Validators.required,
            ]
         },
         {
            name: 'firstName',
            validations: [
               Validators.required,
               Validators.minLength(2),
               Validators.maxLength(55),
            ]
         },
         {
            name: 'surName',
            validations : [
               Validators.required,
               Validators.minLength(2),
               Validators.maxLength(55)
            ]
         },
         {
            name: 'maritalStatus',
            validations : [
               Validators.required
            ]
         },
         {
            name: 'emailAddress',
            validations : [
               Validators.required,
               Validators.email
            ]
         },
         {
            name: 'birthCountry',
            validations : [
               Validators.required,
            ]
         }
      ]
   }]
}