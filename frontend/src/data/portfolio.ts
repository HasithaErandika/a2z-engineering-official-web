import { images } from './site';

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  capacity: string;
  impact: string;
  image: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'deraniyagala-80kw',
    title: '80kW Industrial Net-Accounting Array',
    location: 'Nuriya Road, Deraniyagala',
    capacity: '80 kW',
    impact:
      'Optimizes daily operations by delivering 80 kW of clean, self-generated industrial power, reducing reliance on grid energy.',
    image: images.facilityPreview,
  },
  {
    id: 'polonnaruwa-100kw',
    title: '100kW Commercial Rooftop PV',
    location: 'Hospital Junction, Polonnaruwa',
    capacity: '100 kW',
    impact:
      'Engineered a high-capacity 100 kW grid-connected net-metered system to offset peak commercial demand cycles.',
    image: images.buildingOffice,
  },
  {
    id: 'nawala-40kw',
    title: '40kW Premium Residential Grid-Tied',
    location: 'Narahenpita Road, Nawala',
    capacity: '40 kW',
    impact:
      'Deploys a robust 40 kW rooftop solar array, maximizing long-term energy yield for high-load residential consumers.',
    image: images.solarPanelProduct,
  },
];
