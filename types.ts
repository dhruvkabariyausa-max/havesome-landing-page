export interface ProductUsage {
  id: string;
  title: string;
  description: string;
  iconName: string; 
}

export interface InquiryFormState {
  name: string;
  businessName: string;
  city: string;
  phone: string;
  whatsapp: string;
  gst?: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface Nutrient {
  name: string;
  value: number;
  unit: string;
  fill?: string;
}