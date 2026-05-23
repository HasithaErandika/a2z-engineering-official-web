export type SolarSystemFlowType = 'on-grid' | 'off-grid' | 'hybrid' | 'battery-backup';

export type SolarSystemType = {
  id: SolarSystemFlowType;
  title: string;
  tagline: string;
  summary: string;
  description: string[];
  idealFor: string[];
  highlights: string[];
  accent: 'green' | 'blue' | 'amber' | 'violet';
};

export const solarSystemTypes: SolarSystemType[] = [
  {
    id: 'on-grid',
    title: 'On-Grid',
    tagline: 'Grid-tied solar with net accounting',
    summary:
      'Export surplus generation to the CEB/LECO network and offset your electricity bill through official net-accounting or net-metering schemes.',
    description: [
      'On-grid systems connect your solar array directly to the national utility through a certified grid-tied inverter and bi-directional meter. During daylight, PV generation powers your loads first; any excess energy is exported and credited under CEB-approved export rates.',
      'When solar production is lower than demand—at night or during heavy cloud cover—your premises draw seamlessly from the grid. There is no battery requirement, which keeps capital cost lower while maximizing bill reduction for properties with stable grid supply.',
      'A2Z Engineering manages feasibility studies, single-line diagrams, utility applications, and commissioning so your installation remains fully compliant with Sri Lankan grid interconnection standards.',
    ],
    idealFor: [
      'Homes and offices with reliable daytime grid supply',
      'Clients prioritizing maximum ROI through bill offset and export credits',
      'Rooftops with good irradiance and minimal shading',
    ],
    highlights: [
      'CEB & LECO net-accounting application support',
      'Bi-directional utility metering and export settlement',
      'No battery replacement cycle—lower lifetime OPEX',
      'Scalable from 3 kW residential to MW-scale commercial',
    ],
    accent: 'green',
  },
  {
    id: 'off-grid',
    title: 'Off-Grid',
    tagline: 'Independent power without utility connection',
    summary:
      'Operate entirely off the utility network with solar generation, battery storage, and backup generation sized for your critical load profile.',
    description: [
      'Off-grid systems are engineered for sites where grid extension is unavailable, uneconomical, or intentionally avoided. Solar panels charge a battery bank through a dedicated off-grid inverter/charge controller, and stored energy supplies your loads around the clock.',
      'System sizing balances daily consumption, seasonal irradiance variation, and autonomy days—the number of cloudy days you want to ride through without sun. A2Z designs conservative arrays and battery banks so critical circuits remain energized through Sri Lanka’s monsoon periods.',
      'Optional generator or grid-start inputs can be integrated for extended backup during prolonged low-generation weeks, with intelligent prioritization of solar recharge when conditions improve.',
    ],
    idealFor: [
      'Remote agricultural, estate, and telecom sites',
      'New developments awaiting permanent grid connection',
      'Facilities requiring energy independence and predictable costs',
    ],
    highlights: [
      'Load-profile based array and battery sizing',
      'LFP battery architecture for safety and cycle life',
      'Generator-ready integration where required',
      'Full island-mode protection and earthing design',
    ],
    accent: 'amber',
  },
  {
    id: 'hybrid',
    title: 'Hybrid',
    tagline: 'Solar, grid, and storage working together',
    summary:
      'Combine grid connection with intelligent battery storage so you save on bills, stay protected during outages, and control when energy is used or exported.',
    description: [
      'Hybrid systems use a multi-mode inverter that manages solar, battery, and grid sources simultaneously. Solar energy meets on-site demand first; surplus can charge batteries or export to the grid depending on your tariff structure and programmed priorities.',
      'During load shedding or grid failure, the inverter islands critical circuits onto battery and solar—often within milliseconds—so operations continue without manual changeover. When the grid returns, the system re-synchronizes automatically.',
      'A2Z configures time-of-use strategies, export limits, and backup depth of discharge to balance savings, battery longevity, and comfort. This is our most flexible architecture for Sri Lankan homes and SMEs facing intermittent supply.',
    ],
    idealFor: [
      'Homes affected by scheduled or unscheduled power cuts',
      'Small businesses needing continuity for refrigeration, IT, or production',
      'Users wanting both bill savings and backup without two separate systems',
    ],
    highlights: [
      'Seamless grid-tie and backup in one inverter platform',
      'Programmable peak-shaving and self-consumption modes',
      'Compatible with CEB net-accounting where approved',
      'Expandable battery capacity as loads grow',
    ],
    accent: 'blue',
  },
  {
    id: 'battery-backup',
    title: 'Battery Backup',
    tagline: 'Targeted resilience for essential circuits',
    summary:
      'Add battery storage and automatic transfer to keep priority loads running when the grid fails—without replacing your entire electrical installation.',
    description: [
      'Battery backup solutions focus on continuity rather than full energy independence. A hybrid or backup inverter supports selected circuits—lighting, refrigeration, pumps, gates, or server rooms—while non-essential loads remain on standard utility supply.',
      'Batteries charge from solar during the day and from the grid when needed, maintaining readiness for the next outage. Sizing emphasizes usable capacity and inverter surge rating so motor starts and inductive loads do not trip the system.',
      'A2Z maps your distribution board, installs dedicated backup sub-panels where appropriate, and documents which outlets remain live during an outage so your family or staff know exactly what to expect.',
    ],
    idealFor: [
      'Urban homes wanting outage protection for key rooms only',
      'Clinics, shops, and offices with critical single-phase loads',
      'Existing solar owners adding storage without full system replacement',
    ],
    highlights: [
      'Critical-load panel design and labelling',
      'Fast transfer to battery during grid loss',
      'Modular LFP stacks from residential to light commercial',
      'Optional solar retrofit to extend backup duration',
    ],
    accent: 'violet',
  },
];

export const solarWarranties = [
  {
    title: 'Panel product warranty',
    detail: '12 years',
    sub: 'Manufacturer product coverage on modules',
  },
  {
    title: 'Panel performance warranty',
    detail: '30 years',
    sub: 'Guaranteed linear power output performance',
  },
  {
    title: 'Inverter warranty',
    detail: '10 years',
    sub: 'Factory-backed inverter protection',
  },
  {
    title: 'Battery warranty',
    detail: '10 years',
    sub: 'LFP storage stack manufacturer warranty',
  },
  {
    title: 'Free insurance',
    detail: '1st year',
    sub: 'Full insurance coverage in year one',
  },
  {
    title: 'After-sales service',
    detail: '2 visits',
    sub: 'Two complimentary services within 2 years',
  },
  {
    title: 'Switchgear warranty',
    detail: '1 year',
    sub: 'Protection gear and distribution workmanship',
  },
] as const;

export const solarMaintenanceServices = [
  {
    title: 'Preventive O&M visits',
    description:
      'Scheduled inspections of arrays, cabling, connectors, and inverter health—including performance benchmarking against expected yield.',
  },
  {
    title: 'Thermographic & electrical testing',
    description:
      'Panel hot-spot scans, insulation resistance tests, and grounding verification to catch faults before they reduce output or create safety risks.',
  },
  {
    title: 'Firmware & monitoring support',
    description:
      'Inverter firmware updates, monitoring portal setup, and alert response so you always know how your system is performing.',
  },
  {
    title: 'Cleaning & structural checks',
    description:
      'Safe module cleaning, mounting torque checks, and drainage review to protect long-term generation and wind compliance.',
  },
] as const;

export const solarFaqs = [
  {
    question: 'Which system type is right for my property?',
    answer:
      'If you have stable grid supply and want the best financial return, on-grid is usually ideal. If outages are frequent or you need continuity, hybrid or battery backup is better. Off-grid suits remote sites without utility access. A2Z conducts a free site assessment to recommend the right architecture.',
  },
  {
    question: 'How long does grid approval take in Sri Lanka?',
    answer:
      'CEB/LECO net-accounting timelines vary by region and capacity. We prepare application drawings, load data, and equipment certificates early in the project so approval runs in parallel with installation planning—typically several weeks for residential systems.',
  },
  {
    question: 'Do I need batteries with an on-grid system?',
    answer:
      'No. On-grid systems export surplus energy and draw from the grid when solar is insufficient. Batteries are optional and only recommended if you also want backup during outages.',
  },
  {
    question: 'What warranties does A2Z provide?',
    answer:
      'Our standard packages include 12-year panel product warranty, 30-year panel performance warranty, 10-year inverter and battery warranties, first-year full insurance, two complimentary after-sales visits within two years, and one-year switchgear warranty. Details are confirmed in your project quotation.',
  },
  {
    question: 'How often should solar be serviced?',
    answer:
      'We recommend at least one professional inspection per year, with additional checks after severe weather. Dusty or coastal sites may benefit from more frequent cleaning. Maintenance contracts are available after your complimentary visits.',
  },
  {
    question: 'Can you upgrade an existing solar system?',
    answer:
      'Yes. We assess your current inverter, array size, and distribution board to add batteries, expand capacity, or convert to hybrid operation without unnecessary replacement of working equipment.',
  },
] as const;
