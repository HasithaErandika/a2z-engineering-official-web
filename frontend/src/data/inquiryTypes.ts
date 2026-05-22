import type { LucideIcon } from 'lucide-react';
import {
  Sun,
  Wrench,
  Package,
  Building2,
  ClipboardList,
  Newspaper,
  MessageSquare,
} from 'lucide-react';

export interface InquiryType {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: LucideIcon;
  messagePlaceholder: string;
  responseNote: string;
}

export const inquiryTypes: InquiryType[] = [
  {
    id: 'solar-site-visit',
    label: 'Solar site visit & estimate',
    shortLabel: 'Solar / PV',
    description: 'Rooftop assessment, load profiling, Net-Accounting or BESS sizing.',
    icon: Sun,
    messagePlaceholder:
      'Share your monthly electricity bill (LKR), site address, roof type, and whether you need grid-tied or hybrid backup…',
    responseNote: 'Technical team schedules site visits within 2–3 business days.',
  },
  {
    id: 'services-epc',
    label: 'Engineering & EPC services',
    shortLabel: 'EPC / Services',
    description: 'HVAC, electrical, telecom infrastructure, or civil scope.',
    icon: Wrench,
    messagePlaceholder:
      'Describe the facility type, approximate capacity, timeline, and any existing drawings or load data…',
    responseNote: 'Feasibility review typically returned within 24–48 hours.',
  },
  {
    id: 'product-spec',
    label: 'Product & component inquiry',
    shortLabel: 'Products',
    description: 'Tier-1 panels, inverters, hybrids, or battery storage specifications.',
    icon: Package,
    messagePlaceholder:
      'Include brand/model interest, system size (kW), and whether for new install or retrofit…',
    responseNote: 'Our procurement desk confirms availability and compatibility.',
  },
  {
    id: 'project-consultation',
    label: 'Project consultation',
    shortLabel: 'Projects',
    description: 'Commercial, industrial, or residential turnkey delivery.',
    icon: Building2,
    messagePlaceholder:
      'Outline project location, estimated capacity, grid connection status, and target commissioning date…',
    responseNote: 'Senior engineers review scope before proposal issuance.',
  },
  {
    id: 'portfolio-reference',
    label: 'Portfolio & references',
    shortLabel: 'Portfolio',
    description: 'Similar completed work, case studies, or reference visits.',
    icon: ClipboardList,
    messagePlaceholder:
      'Tell us your sector (factory, hospital, residential estate) and capacity range you want to compare…',
    responseNote: 'We share relevant reference projects for your sector.',
  },
  {
    id: 'media-press',
    label: 'Media & press',
    shortLabel: 'Media',
    description: 'Press assets, statements, or executive interview requests.',
    icon: Newspaper,
    messagePlaceholder:
      'Publication name, deadline, and whether you need logos, imagery, or a spokesperson quote…',
    responseNote: 'Media desk responds during weekday business hours.',
  },
  {
    id: 'general',
    label: 'General inquiry',
    shortLabel: 'General',
    description: 'Any other question for our engineering or admin team.',
    icon: MessageSquare,
    messagePlaceholder: 'How can we help you today?',
    responseNote: 'We aim to reply within one business day.',
  },
];

export const inquiryTypeMap = Object.fromEntries(
  inquiryTypes.map((t) => [t.id, t])
) as Record<string, InquiryType>;

export const preferredContactMethods = [
  {
    value: 'email',
    label: 'Email',
    description: 'We reply to your email address',
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    description: 'We message you on WhatsApp',
  },
  {
    value: 'phone',
    label: 'Phone call',
    description: 'We call your mobile number',
  },
  {
    value: 'other',
    label: 'Other',
    description: 'Specify another channel below',
  },
] as const;

export type PreferredContactMethod = (typeof preferredContactMethods)[number]['value'];

export const projectSectors = [
  { value: '', label: 'Select sector (optional)' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'institutional', label: 'Institutional / Hospital' },
  { value: 'other', label: 'Other' },
] as const;
