export interface SignUpFormData {
  // Step 1
  atmAccountNo?: string;
  atmPin?: string;
  jai?: string;
  enableFundTransfer?: boolean;

  // Step 2
  firstName?: string;
  middleName?: string;
  lastName?: string;
  motherMaidenName?: string;
  spouseFullName?: string;
  birthDate?: string;
  gender?: string;
  civilStatus?: string;
  tin?: string;
  country?: string;
  street?: string;
  barangay?: string;
  city?: string;
  province?: string;
  zipCode?: string;
  homeTelNo?: string;
  officeTelNo?: string;
  faxNo?: string;
  mobileCountryCode?: string;
  mobileNo?: string;
  email?: string;
  altEmail?: string;
  businessName?: string;
  businessAddress?: string;

  // Step 3
  secQuestion1?: string;
  secAnswer1?: string;
  confirmAnswer1?: string;
  secQuestion2?: string;
  secAnswer2?: string;
  confirmAnswer2?: string;
  secQuestion3?: string;
  secAnswer3?: string;
  confirmAnswer3?: string;

  // Step 4
  preferredId?: string;
  password?: string;
  confirmPassword?: string;
  captchaVerified?: boolean;
}
