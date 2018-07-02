# ModelDrivenForms
Angular 2/4 large size form Handling

Step 1 - Declare Form Controls in separate file with respective validators as -  

Step 2 - Create FormManager service for creating FormInstance and setting value - (use setValue and patchValue accordingly)

Step 3 - Create form instances using FormManager service in components.

  Form Creating - this.formInstance = this.formManager.setupFormControls('formName');
  Set Value - this.formManager.setTemplateValues(this.formInstance,Data);
  
  
