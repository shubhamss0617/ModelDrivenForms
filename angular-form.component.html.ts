<div class="heading">
   <div class="title">Your personal details</div>
   <div class="page-description">Tell us a little more about yourself. We already have the following:</div>
</div>

<div class="form-content">
   <form [formGroup]="personalInformationForm" id="personal-information-form" novalidate>
      <div class="vertical-form">
         <div class="field">
            <span>Title</span>
            <input formControlName="title" type="text" id="title" name="title" />
         </div>

         <div class="field">
            <span>First Name</span>
            <input formControlName="firstName" type="text" id="firstName" name="firstName" />
         </div>

         <div class="field">
            <span>Surname</span>
            <input formControlName="surName" type="text" id="surName" name="surName" />
         </div>

         <div class="field">
            <span>Marital Status</span>
            <input formControlName="maritalStatus" type="text" id="maritalStatus" name="maritalStatus" />
         </div>

         <div class="field">
            <span>Email address</span>
            <input formControlName="emailAddress" type="text" id="emailAddress" name="emailAddress" />
         </div>

         <div class="field">
            <span>In which country were you born?</span>
            <input formControlName="birthCountry" type="text" id="birthCountry" name="birthCountry">
         </div>

         <button (click)="personalInfoSubmit()" type="submit" class="gd-primary-btn" id="personalInfoSubmitBtn">Submit</button>
      </div>
   </form>

</div>