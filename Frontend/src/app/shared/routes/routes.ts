export class routes {

  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  //Authentication
  public static get lockScreen(): string {
    return this.baseUrl + '/lock-screen';
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  //Basic Authentication
   public static get loginBasic(): string {
    return this.baseUrl + '/login-basic';
  }
   public static get registerBasic(): string {
    return this.baseUrl + '/register-basic';
  }
   public static get forgotPasswordBasic(): string {
    return this.baseUrl + '/forgot-password-basic';
  }
   public static get resetPasswordBasic(): string {
    return this.baseUrl + '/reset-password-basic';
  }
   public static get emailVerificationBasic(): string {
    return this.baseUrl + '/email-verification-basic';
  }
   public static get twoStepVerificationBasic(): string {
    return this.baseUrl + '/two-step-verification-basic';
  }
   public static get successBasic(): string {
    return this.baseUrl + '/success-basic';
  }
  //Cover Authentication
   public static get loginCover(): string {
    return this.baseUrl + '/login-cover';
  }
   public static get registerCover(): string {
    return this.baseUrl + '/register-cover';
  }
   public static get forgotPasswordCover(): string {
    return this.baseUrl + '/forgot-password-cover';
  }
   public static get resetPasswordCover(): string {
    return this.baseUrl + '/reset-password-cover';
  }
   public static get emailVerificationCover(): string {
    return this.baseUrl + '/email-verification-cover';
  }
   public static get twoStepVerificationCover(): string {
    return this.baseUrl + '/two-step-verification-cover';
  }
   public static get successCover(): string {
    return this.baseUrl + '/success-cover';
  }
  //Illustration Authentication
   public static get loginIllustration(): string {
    return this.baseUrl + '/login-illustration';
  }
   public static get registerIllustration(): string {
    return this.baseUrl + '/register-illustration';
  }
   public static get forgotPasswordIllustration(): string {
    return this.baseUrl + '/forgot-password-illustration';
  }
   public static get resetPasswordIllustration(): string {
    return this.baseUrl + '/reset-password-illustration';
  }
   public static get emailVerificationIllustration(): string {
    return this.baseUrl + '/email-verification-illustration';
  }
   public static get twoStepVerificationIllustration(): string {
    return this.baseUrl + '/two-step-verification-illustration';
  }
   public static get successIllustration(): string {
    return this.baseUrl + '/success-illustration';
  }







  public static get blogs(): string {
    return this.baseUrl + '/blogs';
  }
  public static get addBlog(): string {
    return this.blogs + '/add-blog';
  }
  public static get editBlog(): string {
    return this.blogs + '/edit-blog';
  }
  public static get blogList(): string {
    return this.blogs + '/blog';
  }
  public static get blogDetails(): string {
    return this.blogs + '/blog-details';
  }
  public static get blogCategory(): string {
    return this.blogs + '/blog-category';
  }
  public static get blogComments(): string {
    return this.blogs + '/blog-comments';
  }
  public static get testimonials(): string {
    return this.baseUrl + '/testimonials';
  }
  public static get faq(): string {
    return this.baseUrl + '/faq';
  }
  public static get location(): string {
    return this.baseUrl + '/locations';
  }
  public static get countries(): string {
    return this.location + '/countries';
  }
  public static get states(): string {
    return this.location + '/states';
  }
  public static get cities(): string {
    return this.location + '/cities';
  }
  public static get notifications(): string {
    return this.baseUrl + '/notifications';
  }




  public static get index(): string {
    return this.baseUrl + '/index';
  }
  public static get addDepartment(): string {
    return this.baseUrl + '/departments/add-department';
  }
  public static get departmentList(): string {
    return this.baseUrl + '/departments/department-list';
  }
  public static get editDepartment(): string {
    return this.baseUrl + '/departments/edit-department';
  }

  public static get doctorProfile(): string {
    return this.baseUrl + '/doctor/doctor-profile';
  }
  public static get doctorSetting(): string {
    return this.baseUrl + '/doctor/doctor-setting';
  }
  public static get doctorsList(): string {
    return this.baseUrl + '/doctor/doctors-list';
  }

  public static get addSchedule(): string {
    return this.baseUrl + '/doctor-schedule/add-schedule';
  }
  public static get editSchedule(): string {
    return this.baseUrl + '/doctor-schedule/edit-schedule';
  }
  public static get schedule(): string {
    return this.baseUrl + '/doctor-schedule/schedule';
  }

  public static get compose(): string {
    return this.baseUrl + '/email/compose';
  }
  public static get confirmMail(): string {
    return this.baseUrl + '/email/confirm-mail';
  }
  public static get inbox(): string {
    return this.baseUrl + '/email/inbox';
  }
  public static get mailView(): string {
    return this.baseUrl + '/email/mail-view';
  }

  public static get formBasicInputs(): string {
    return this.baseUrl + '/forms/form-basic-inputs';
  }
  public static get formHorizontal(): string {
    return this.baseUrl + '/forms/form-horizontal';
  }
  public static get formInputGroups(): string {
    return this.baseUrl + '/forms/form-input-groups';
  }
  public static get formVertical(): string {
    return this.baseUrl + '/forms/form-vertical';
  }
    public static get dataTables(): string {
    return this.baseUrl + '/tables/data-table';
  }



 
 

  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }

  //UI INterface
  public static get baseUi(): string {
    return this.baseUrl + '/base-ui';
  }
  public static get blankPage(): string {
    return this.baseUrl + '/blank-page';
  }
  public static get alert(): string {
    return this.baseUi + '/alert';
  }
  public static get accordions(): string {
    return this.baseUi + '/accordions';
  }
  public static get avatar(): string {
    return this.baseUi + '/avatar';
  }
  public static get badges(): string {
    return this.baseUi + '/badges';
  }
  public static get buttons(): string {
    return this.baseUi + '/buttons';
  }
  public static get buttonGroup(): string {
    return this.baseUi + '/button-group';
  }
  public static get breadcrumb(): string {
    return this.baseUi + '/breadcrumb';
  }
  public static get cards(): string {
    return this.baseUi + '/cards';
  }
  public static get carousel(): string {
    return this.baseUi + '/carousel';
  }
  public static get collapse(): string {
    return this.baseUi + '/collapse';
  }
  public static get dropDown(): string {
    return this.baseUi + '/drop-down';
  }
  public static get ratio(): string {
    return this.baseUi + '/ratio';
  }
  public static get links(): string {
    return this.baseUi + '/links';
  }
  public static get listGroup(): string {
    return this.baseUi + '/list-group';
  }
  public static get grid(): string {
    return this.baseUi + '/grid';
  }
  public static get images(): string {
    return this.baseUi + '/images';
  }
  public static get lightBox(): string {
    return this.advancedUi + '/light-box';
  }

  public static get modal(): string {
    return this.baseUi + '/modal';
  }
  public static get offcanvas(): string {
    return this.baseUi + '/offcanvas';
  }
  public static get pagination(): string {
    return this.baseUi + '/pagination';
  }
  public static get placeholder(): string {
    return this.baseUi + '/placeholder';
  }
  public static get popover(): string {
    return this.baseUi + '/popover';
  }
  public static get progressBars(): string {
    return this.baseUi + '/progress-bars';
  }
  public static get rangeSlider(): string {
    return this.advancedUi + '/range-slider';
  }
  public static get spinner(): string {
    return this.baseUi + '/spinner';
  }
  public static get tabs(): string {
    return this.baseUi + '/tabs';
  }
  public static get sweetAlert(): string {
    return this.baseUi + '/sweet-alerts';
  }
  public static get toasts(): string {
    return this.baseUi + '/toasts';
  }
  public static get tooltip(): string {
    return this.baseUi + '/tooltip';
  }
  public static get typography(): string {
    return this.baseUi + '/typography';
  }
  public static get utilities(): string {
    return this.baseUi + '/utilities';
  }
  public static get advancedUi(): string {
    return this.baseUrl + '/advanced-ui';
  }
  public static get ribbon(): string {
    return this.advancedUi + '/ribbon';
  }
  public static get clipboards(): string {
    return this.advancedUi + '/clipboards';
  }
  public static get dragDrop(): string {
    return this.advancedUi + '/drag-drop';
  }
  public static get rating(): string {
    return this.advancedUi + '/rating';
  }
  public static get textEditor(): string {
    return this.advancedUi + '/text-editor';
  }
  public static get counter(): string {
    return this.advancedUi + '/counter';
  }
  public static get scrollbar(): string {
    return this.advancedUi + '/scrollbar';
  }


  public static get table(): string {
    return this.baseUrl + '/tables';
  }
  public static get basicTable(): string {
    return this.table + '/basic';
  }
  public static get dataTable(): string {
    return this.table + '/data-table';
  }
  public static get icon(): string {
    return this.baseUrl + '/icon';
  }
  public static get fontawesome(): string {
    return this.icon + '/fontawesome';
  }
  public static get feather(): string {
    return this.icon + '/feather';
  }
  public static get ionic(): string {
    return this.icon + '/ionic';
  }
  public static get material(): string {
    return this.icon + '/material';
  }
  public static get pe7(): string {
    return this.icon + '/pe7';
  }
  public static get themify(): string {
    return this.icon + '/themify';
  }
  public static get typicon(): string {
    return this.icon + '/typicon';
  }
  public static get weather(): string {
    return this.icon + '/weather';
  }
  public static get simpleLine(): string {
    return this.icon + '/simple-line';
  }
  public static get flag(): string {
    return this.icon + '/flag';
  }
  public static get forms(): string {
    return this.baseUrl + '/forms';
  }
  public static get basicForm(): string {
    return this.forms + '/basic-inputs';
  }
  public static get checkboxRadios(): string {
    return this.forms + '/form-checkbox-radios';
  }
  public static get gridGutters(): string {
    return this.forms + '/form-grid-gutters';
  }

  public static get horizontalForm(): string {
    return this.forms + '/horizontal-form';
  }
  public static get verticalForm(): string {
    return this.forms + '/vertical-form';
  }
  public static get formMask(): string {
    return this.forms + '/form-mask';
  }
  public static get formValidation(): string {
    return this.forms + '/form-validation';
  }
  public static get inputGroups(): string {
    return this.forms + '/input-groups';
  }
  public static get fileUpload(): string {
    return this.forms + '/file-upload';
  }
  public static get chart(): string {
    return this.baseUrl + '/chart';
  }
  public static get apexChart(): string {
    return this.chart + '/apex-charts';
  }
  public static get ngTwoCharts(): string {
    return this.chart + '/ng2-charts';
  }
  public static get primeng(): string {
    return this.chart + '/prime-ng';
  }
    public static get formpickers(): string {
    return this.forms + '/form-pickers';
  }
//Application
  public static get application(): string {
    return this.baseUrl + '/application';
  }
  public static get chat(): string {
    return this.application + '/chat';
  }
  public static get calender(): string {
    return this.application + '/calendar';
  }
  public static get email(): string {
    return this.application + '/email';
  }
  public static get emailReply(): string {
    return this.application + '/email-reply';
  }
  public static get todo(): string {
    return this.application + '/todo';
  }
  public static get todoList(): string {
    return this.application + '/todo-list';
  }
  public static get notes(): string {
    return this.application + '/notes';
  }
  public static get socialFeed(): string {
    return this.application + '/social-feed';
  }
  public static get fileManager(): string {
    return this.application + '/file-manager';
  }
  public static get kanbanView(): string {
    return this.application + '/kanban-view';
  }
  public static get contacts(): string {
    return this.application + '/contacts';
  }
  public static get applicationInvoice(): string {
    return this.application + '/invoice';
  }
  public static get searchList(): string {
    return this.application + '/search-list';
  }
  public static get invoice(): string {
    return this.application + '/invoice';
  }
  public static get invoiceDetails(): string {
    return this.application + '/invoice-details';
  }
  public static get calls(): string {
    return this.application + '/calls';
  }
  public static get voiceCall(): string {
    return this.calls + '/voice-call';
  }
  public static get videoCall(): string {
    return this.calls + '/video-call';
  }
  public static get outgoingCall(): string {
    return this.calls + '/outgoing-call';
  }
  public static get incomingCall(): string {
    return this.calls + '/incoming-call';
  }
  public static get callHistory(): string {
    return this.calls + '/call-history';
  }

  //DOCTOR MODULE
  public static get doctors(): string {
    return this.baseUrl + '/doctors';
  }
    public static get doctorDashboard(): string {
    return this.doctors + '/dashboard';
  }
    public static get doctorAppointments(): string {
    return this.doctors + '/appointments';
  }
    public static get onlineConsultations(): string {
    return this.doctors + '/online-consultations';
  }
    public static get doctorSchedules(): string {
    return this.doctors + '/schedules';
  }
    public static get doctorPrescriptions(): string {
    return this.doctors + '/prescriptions';
  }
    public static get doctorPrescriptionDetails(): string {
    return this.doctors + '/prescription-details';
  }
    public static get doctorLeave(): string {
    return this.doctors + '/leaves';
  }
    public static get doctorReviews(): string {
    return this.doctors + '/reviews';
  }
    public static get doctorProfileSettings(): string {
    return this.doctors + '/profile-settings';
  }
    public static get doctorPasswordSettings(): string {
    return this.doctors + '/password-settings';
  }
    public static get doctorNotificationSettings(): string {
    return this.doctors + '/notification-settings';
  }
    public static get doctorPatientDetails(): string {
    return this.doctors + '/doctor-patient-details';
  }
    public static get doctorPatientAppointmentDetails(): string {
    return this.doctors + '/patient-appointment-details';
  }

    //PATIENT MODULE
  public static get patients(): string {
    return this.baseUrl + '/patients';
  }
    public static get patientDashboard(): string {
    return this.patients + '/dashboard';
  }
    public static get patientAppointments(): string {
    return this.patients + '/appointments';
  }
    public static get patientDoctorDetails(): string {
    return this.patients + '/patients-doctor-details';
  }
    public static get patientDoctors(): string {
    return this.patients + '/doctor';
  }
    public static get patientInvoices(): string {
    return this.patients + '/invoices';
  }
    public static get patientInvoiceDetails(): string {
    return this.patients + '/patient-invoice-details';
  }
    public static get patientPrescriptions(): string {
    return this.patients + '/prescriptions';
  }
      public static get patientProfileSettings(): string {
    return this.patients + '/profile-settings';
  }
    public static get patientPasswordSettings(): string {
    return this.patients + '/password-settings';
  }
    public static get patientNotificationSettings(): string {
    return this.patients + '/notification-settings';
  }
    public static get patientPrescriptionDetails(): string {
    return this.patients + '/patient-prescription-details';
  }
  
  // Finance
    public static get expenses(): string {
    return this.baseUrl + '/expenses';
  }
    public static get expenseList(): string {
    return this.expenses + '/expense-list';
  }
    public static get expenseCategory(): string {
    return this.expenses + '/expense-category';
  }
    public static get invoices(): string {
    return this.baseUrl + '/invoices';
  }
    public static get invoicesList(): string {
    return this.invoices + '/invoices-list';
  }
    public static get invoicesDetails(): string {
    return this.invoices + '/invoices-details';
  }
    public static get addInvoices(): string {
    return this.invoices + '/add-invoices';
  }
    public static get editInvoices(): string {
    return this.invoices + '/edit-invoices';
  }
    public static get income(): string {
    return this.baseUrl + '/income';
  }
    public static get financePayments(): string {
    return this.baseUrl + '/payments';
    }
    public static get financeTransactions(): string {
    return this.baseUrl + '/transactions';
  }

  // support
   public static get contactMessages(): string {
    return this.baseUrl + '/contact-messages';
  }
   public static get tickets(): string {
    return this.baseUrl + '/tickets';
  }
   public static get ticketDetails(): string {
    return this.baseUrl + '/ticket-details';
  }
   public static get announcements(): string {
    return this.baseUrl + '/announcements';
  }
   public static get newsLetters(): string {
    return this.baseUrl + '/newsletters';
  }

  // content 
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get editPage(): string {
    return this.baseUrl + '/edit-page';
  }
  public static get addPage(): string {
    return this.baseUrl + '/add-page';
  }

  //clinic
    public static get doctor(): string {
    return this.baseUrl + '/doctor';
  }
    public static get doctorGrid(): string {
    return this.doctor + '/doctor-grid';
  }
    public static get doctorList(): string {
    return this.doctor + '/doctor-list';
  }
    public static get doctorDetails(): string {
    return this.doctor + '/doctor-details';
  }
    public static get doctorSchedule(): string {
    return this.doctor + '/doctor-schedule';
  }
    public static get addDoctor(): string {
    return this.doctor + '/add-doctor';
  }
    public static get editDoctor(): string {
    return this.doctor + '/edit-doctor';
  }
    public static get patient(): string {
    return this.baseUrl + '/patient';
  }
    public static get patientGrid(): string {
    return this.patient + '/patient-grid';
  }
    public static get patientList(): string {
    return this.patient + '/patient-list';
  }
    public static get patientDetails(): string {
    return this.patient + '/patient-details';
  }
    public static get createPatient(): string {
    return this.patient + '/create-patient';
  }
    public static get editPatient(): string {
    return this.patient + '/edit-patient';
  }
    public static get appointment(): string {
    return this.baseUrl + '/appointment';
  }
    public static get appointmentList(): string {
    return this.appointment + '/appointment-list';
  }
    public static get newAppointment(): string {
    return this.appointment + '/new-appointment';
  }
    public static get appointmentCalendar(): string {
    return this.appointment + '/appointment-calendar';
  }
    public static get locations(): string {
    return this.baseUrl + '/locations';
  }
    public static get services(): string {
    return this.baseUrl + '/services';
  }
    public static get specializations(): string {
    return this.baseUrl + '/specializations';
  }
    public static get assets(): string {
    return this.baseUrl + '/assets';
  }
    public static get activities(): string {
    return this.baseUrl + '/activities';
  }
    public static get messages(): string {
    return this.baseUrl + '/messages';
  }
  //Settings
  public static get settings(): string {
    return this.baseUrl + '/settings';
  }

  //Account Settings
  public static get accountSettings(): string {
    return this.settings + '/account-settings';
  }
  public static get profileSettings(): string {
    return this.accountSettings + '/profile-settings';
  }
  public static get securitySettings(): string {
    return this.accountSettings + '/security-settings';
  }
  public static get notificationSettings(): string {
    return this.accountSettings + '/notifications-settings';
  }
  public static get integrationSettings(): string {
    return this.accountSettings + '/integrations-settings';
  }
  //website Settings
      public static get websiteSettings(): string {
    return this.settings + '/website-settings';
  }
      public static get organizationSettings(): string {
    return this.websiteSettings + '/organization-settings';
  }
      public static get localizationSettings(): string {
    return this.websiteSettings + '/localization-settings';
  }
      public static get prefixesSettings(): string {
    return this.websiteSettings + '/prefixes-settings';
  }
      public static get seoSetupSettings(): string {
    return this.websiteSettings + '/seo-setup-settings';
  }
      public static get languageSettings(): string {
    return this.websiteSettings + '/language-settings';
  }
      public static get languageSettings2(): string {
    return this.websiteSettings + '/language-settings-2';
  }
      public static get languageSettings3(): string {
    return this.websiteSettings + '/language-settings-3';
  }
      public static get maintenanceModeSettings(): string {
    return this.websiteSettings + '/maintenance-mode-settings';
  }
      public static get loginAndRegisterSettings(): string {
    return this.websiteSettings + '/login-and-register-settings';
  }
      public static get preferencesSettings(): string {
    return this.websiteSettings + '/preferences-settings';
  }
  //App Settings
      public static get appSettings(): string {
    return this.settings + '/app-settings';
  }
      public static get invoiceSettings(): string {
    return this.appSettings + '/invoice-settings';
  }
      public static get invoiceTemplatesSettings(): string {
    return this.appSettings + '/invoice-templates-settings';
  }
      public static get signaturesSettings(): string {
    return this.appSettings + '/signatures-settings';
  }
      public static get customFieldsSettings(): string {
    return this.appSettings + '/custom-fields-settings';
  }
  //clinic Settings
      public static get clinicSettings(): string {
    return this.settings + '/clinic-settings';
  }
      public static get appointmentSettings(): string {
    return this.clinicSettings + '/appointment-settings';
  }
      public static get workingHoursSettings(): string {
    return this.clinicSettings + '/working-hours-settings';
  }
      public static get cancellationReasonSettings(): string {
    return this.clinicSettings + '/cancellation-reason-settings';
  }
  //system Settings
      public static get systemSettings(): string {
    return this.settings + '/system-settings';
  }
      public static get emailSettings(): string {
    return this.systemSettings + '/email-settings';
  }
      public static get emailTemplatesSettings(): string {
    return this.systemSettings + '/email-templates-settings';
  }
      public static get smsGatewaysSettings(): string {
    return this.systemSettings + '/sms-gateways-settings';
  }
      public static get smsTemplatesSettings(): string {
    return this.systemSettings + '/sms-templates-settings';
  }
      public static get gdprCookiesSettings(): string {
    return this.systemSettings + '/gdpr-cookies-settings';
  }
  //other Settings
      public static get otherSettings(): string {
    return this.settings + '/other-settings';
  }
      public static get sitemapSettings(): string {
    return this.otherSettings + '/sitemap-settings';
  }
      public static get clearCacheSettings(): string {
    return this.otherSettings + '/clear-cache-settings';
  }
      public static get storageSettings(): string {
    return this.otherSettings + '/storage-settings';
  }
      public static get cronjobSettings(): string {
    return this.otherSettings + '/cronjob-settings';
  }
      public static get banIpAddressSettings(): string {
    return this.otherSettings + '/ban-ip-address-settings';
  }
      public static get systemBackupSettings(): string {
    return this.otherSettings + '/system-backup-settings';
  }
      public static get databaseBackupSettings(): string {
    return this.otherSettings + '/database-backup-settings';
  }
      public static get systemUpdateSettings(): string {
    return this.otherSettings + '/system-update';
  }
  //finance Settings
      public static get financeSettings(): string {
    return this.settings + '/finance-settings';
  }
      public static get paymentMethodsSettings(): string {
    return this.financeSettings + '/payment-methods-settings';
  }
      public static get bankAccountsSettings(): string {
    return this.financeSettings + '/bank-accounts-settings';
  }
      public static get taxRatesSettings(): string {
    return this.financeSettings + '/tax-rates-settings';
  }
      public static get currenciesSettings(): string {
    return this.financeSettings + '/currencies-settings';
  }
  //Reports
    public static get Reports(): string {
    return this.baseUrl + '/reports';
  }
    public static get incomeReport(): string {
    return this.Reports + '/income-report';
  }
    public static get expenseReport(): string {
    return this.Reports + '/expense-report';
  }
    public static get appointmentReport(): string {
    return this.Reports + '/appointment-report';
  }
    public static get patientReport(): string {
    return this.Reports + '/patient-report';
  }
  public static get profitAndLoss(): string {
  return this.Reports + '/profit-and-loss';
}
  public static get users(): string {
  return this.baseUrl + '/users';
}
  public static get rolesAndPermissions(): string {
  return this.users + '/roles-and-permissions';
}
  public static get permission(): string {
  return this.users + '/permission';
}
  public static get deleteAccountRequest(): string {
  return this.users + '/delete-account-request';
}
//pages
  public static get starter(): string {
  return this.baseUrl + '/starter';
}
  public static get profile(): string {
  return this.baseUrl + '/profile';
}
  public static get gallery(): string {
  return this.baseUrl + '/gallery';
}
  public static get timeline(): string {
  return this.baseUrl + '/timeline';
}
  public static get pricing(): string {
  return this.baseUrl + '/pricing';
}
  public static get comingSoon(): string {
  return this.baseUrl + '/coming-soon';
}
  public static get underMaintenance(): string {
  return this.baseUrl + '/under-maintenance';
}
  public static get privacyPolicy(): string {
  return this.baseUrl + '/privacy-policy';
}
public static get termsConditions(): string {
return this.baseUrl + '/terms-and-conditions';
}
//Hrm
public static get staffs(): string {
return this.baseUrl + '/staffs';
}
public static get departments(): string {
return this.baseUrl + '/departments';
}
public static get designation(): string {
return this.baseUrl + '/designation';
}
public static get attendance(): string {
return this.baseUrl + '/attendance';
}
public static get holidays(): string {
return this.baseUrl + '/holidays';
}
public static get payroll(): string {
return this.baseUrl + '/payroll';
}
public static get payroll2(): string {
return this.baseUrl + '/payroll-2';
}
public static get leaves(): string {
return this.baseUrl + '/leaves';
}
public static get leavesList(): string {
return this.leaves + '/leaves-list';
}
public static get leaveType(): string {
return this.leaves + '/leave-type';
}
  //Layout Pages
  public static get default(): string {
    return this.baseUrl + '/layout-default';
  }
  public static get mini(): string {
    return this.baseUrl + '/layout-mini';
  }
  public static get hoverView(): string {
    return this.baseUrl + '/layout-hover-view';
  }
  public static get hidden(): string {
    return this.baseUrl + '/layout-hidden';
  }

  public static get fullWidth(): string {
    return this.baseUrl + '/layout-full-width';
  }
  public static get RTL(): string {
    return this.baseUrl + '/layout-rtl';
  }

}

