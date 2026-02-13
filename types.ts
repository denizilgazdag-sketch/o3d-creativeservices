export interface ProjectQuote {
  name: string;
  email: string;
  orderType: string;
  projectName: string;
  description: string;
  material: string;
  finish: string;
  quantity: number;
  deliveryType: string;
  shippingAddress: string;
}

export interface AIResponse {
  analysis: string;
  complexity: 'Low' | 'Medium' | 'High';
  suggestedMaterials: string[];
}

export enum MaterialType {
  PLA = 'PLA (Bio-Plastic)',
  PETG = 'PETG (Durable)',
  Resin = 'Resin (High Detail)',
  ABS = 'ABS (Industrial)',
  TPU = 'TPU (Flexible)',
  Other = 'Help me choose / Other'
}