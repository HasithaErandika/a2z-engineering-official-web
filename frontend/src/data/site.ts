export const site = {
  name: 'A2Z Engineering',
  legalName: 'A2Z Engineering (Pvt) Ltd',
  tagline: 'Engineering services for solar PV, electrical systems, HVAC, and supporting infrastructure.',
  phone: '+94 112 995 998',
  phoneHref: 'tel:+94112995998',
  whatsapp: '+94 77 149 9544',
  whatsappHref: 'https://wa.me/94771499544',
  email: 'info@a2zengineering.lk',
  emailCc: 'indika@a2zengineering.lk',
  inquiryRecipients: ['info@a2zengineering.lk', 'indika@a2zengineering.lk'] as const,
  address: {
    line1: '158/C/1, Ingiriya Rd,',
    line2: 'Meepe Junction, Padukka',
    mapsUrl:
      'https://www.google.com/maps/place/A2Z+Engineering+(Pvt)+Ltd/@6.8584842,80.0869738,1139m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3ad561c57f781:0xcd4de2842c93df62!8m2!3d6.8584842!4d80.0918447!16s%2Fg%2F11vr956rqf?entry=ttu',
  },
  hours: {
    weekday: '08:00 AM - 05:00 PM',
    saturday: '09:00 AM - 03:00 PM',
    sunday: 'Closed',
  },
} as const;

export const companyStats = {
  yearsExperience: '15+',
  projectsCompleted: '391',
  installedCapacityKw: '3,772.69',
  connectedInfrastructure: '1.63 MW+',
} as const;

/** Central image paths — replace SVG placeholders with production WebP/PNG when ready */
export const images = {
  heroSolar: '/images/hero-solar.png',
  buildingOffice: '/images/building-office.png',
  facilityPreview: '/images/facility-preview.png',
  solarPanelProduct: '/images/solar-panel-product.png',
  inverterProduct: '/images/inverter-product.png',
  solarArray: '/images/solar_array.png',
  maintenanceField: '/images/Maintanance.png',
  industrialRoof: '/images/Industrial_roof.png',
  solarInstall: '/images/solar.png',
  panelClean: '/images/panel_clean.png',
  productsShowcase: '/images/products.png',
  hvacService: '/images/HVAC.png',
  telecomService: '/images/telecommunication.png',
  professionalWorkflow: '/images/professional_workflow.png',
  civilWork: '/images/CivilWork.png',
  cctv: '/images/CCTV.png',
} as const;

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solar', href: '/solar' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'News', href: '/news' },
] as const;

export const footerQuickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Solar Solutions', href: '/solar' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'News', href: '/news' },
] as const;

export const footerServices = [
  'Solar PV systems',
  'Electrical installation',
  'HVAC maintenance',
  'Civil installation',
] as const;
