export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  category: 'laptop' | 'hardware' | 'software' | 'data' | 'business';
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  whatWeRepair: string[];
  estimatedTime: string;
  warranty: string;
  isFeatured?: boolean;
}

export interface ProblemOption {
  id: string;
  title: string;
  iconName: string;
  explanation: string;
  relevantService: string;
  serviceId: string;
}

export interface BrandItem {
  name: string;
  tagline: string;
  description: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  serviceCategory: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface RepairTrackingInfo {
  repairId: string;
  customerName: string;
  device: string;
  issue: string;
  receivedDate: string;
  estimatedCompletion: string;
  currentStepIndex: number; // 0 to 5
  statusNotes: string;
}

export interface WarrantyInfo {
  refId: string;
  customerName: string;
  device: string;
  serviceProvided: string;
  serviceDate: string;
  warrantyUntil: string;
  isValid: boolean;
  notes: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  serviceOrProblem: string;
  contactMethod: 'Phone' | 'WhatsApp' | 'Email';
  notes?: string;
}
