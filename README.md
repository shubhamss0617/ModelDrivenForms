# ModelDrivenForms
Dynamic FormService Angular 2/4 to reduce redundant and repeating code

Step 1 - Declare Form Controls in separate file with respective validators.  

Step 2 - Create FormManager service for creating FormInstance and setting value - (use setValue and patchValue accordingly)

Step 3 - Create form instances using FormManager service in components.

  Form Creation - this.formInstance = this.formManager.setupFormControls('formName');
  
  
  Set FormValues - this.formManager.setTemplateValues(this.formInstance,Data);
  
  
