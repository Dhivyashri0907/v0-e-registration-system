'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface RegistrationFormData {
  // Step 1: Bank Details
  accountNumber?: string;
  ifscCode?: string;
  bankName?: string;
  branch?: string;
  accountType?: string;
  mobileNo?: string;
  micrCode?: string;
  accountHolderName?: string;

  // Step 2: OTP & Mobile
  otp?: string;

  // Step 3: Personal Information
  fullName?: string;
  email?: string;
  fatherMotherName?: string;
  dateOfBirth?: string;
  age?: string;
  gender?: string;
  currentAddress?: string;
  permanentAddress?: string;
  taluk?: string;
  district?: string;
  state?: string;
  pinCode?: string;

  // Step 4: ID Verification
  panCardFile?: File | null;
  aadhaarCardFile?: File | null;
  accountNumberFile?: File | null;
  incomeCertificateFile?: File | null;
  birthCertificateFile?: File | null;
  communityCertificateFile?: File | null;

  // Step 5: Property Details
  propertyType?: string;
  plotNumber?: string;
  totalArea?: string;
  buildUpArea?: string;
  village?: string;
  taluk2?: string;
  northSide?: string;
  southSide?: string;
  eastSide?: string;
  westSide?: string;
  pincode2?: string;
  district2?: string;

  // Step 6: Party Details (Buyer/Seller)
  sellerFullName?: string;
  sellerAddress?: string;
  sellerIdProofType?: string;
  sellerIdNumber?: string;
  sellerIdProofFile?: File | null;

  buyerFullName?: string;
  buyerAddress?: string;
  buyerIdProofType?: string;
  buyerIdNumber?: string;
  buyerIdProofFile?: File | null;

  // Step 7: Document Details
  documentType?: string;
  stampFee?: string;
  registrationFee?: string;
  serviceCharge?: string;
  totalAmount?: string;

  // Step 8: Witness Details
  witness1Name?: string;
  witness1FatherName?: string;
  witness1Mobile?: string;
  witness1Email?: string;
  witness1Gender?: string;
  witness1State?: string;
  witness1District?: string;
  witness1Taluk?: string;
  witness1Pincode?: string;

  // Step 9: Digital Signatures
  buyerSignature?: string;
  sellerSignature?: string;

  // Step 10: Payment
  stampAmount?: string;
  stampPlacementPreview?: string;
  bondPaperType?: string;
  bondPages?: string;
  bondPlacementPreview?: string;
  paymentMethod?: string;

  // Success
  applicationNumber?: string;
  submissionDateTime?: string;
}

interface RegistrationContextType {
  formData: RegistrationFormData;
  updateFormData: (data: Partial<RegistrationFormData>) => void;
  resetForm: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<RegistrationFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <RegistrationContext.Provider value={{ formData, updateFormData, resetForm, currentStep, setCurrentStep }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within RegistrationProvider');
  }
  return context;
};
