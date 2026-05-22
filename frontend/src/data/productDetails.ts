export interface ProductDetails {
  models: string[];
  description: string;
  advantage: string;
  manufacturerName: string;
  country: string;
  officialUrl: string;
}

export interface ProductItem {
  id: string;
  title: string;
  brand: string;
  type: string;
  image: string;
}

export const productDetailsMap: Record<string, ProductDetails> = {
  "jinko-panels": {
    manufacturerName: "Jinko Solar Co., Ltd",
    country: "China",
    officialUrl: "https://www.jinkosolar.com/",
    description: "Jinko Solar N-type and Bifacial modules represent the pinnacle of high-efficiency silicon solar cells. Deployed heavily by A2Z in utility and commercial projects, these modules provide unmatched temperature coefficients and zero light-induced degradation (LID).",
    advantage: "Tier-1 bankability, high bifaciality factors, outstanding performance under high humidity and heat, 25-year linear performance warranty.",
    models: [
      "Tiger Pro: JKM545M-72HL4-V, JKM550M-72HL4-V, JKM555M-72HL4-V, JKM560M-72HL4-V, JKM565M-72HL4-V",
      "Tiger Neo 72-Cell: JKM575N-72HL4-V, JKM580N-72HL4-V, JKM585N-72HL4-V, JKM590N-72HL4-V, JKM595N-72HL4-V",
      "Tiger Neo Monofacial: JKM610N-66HL4M-V, JKM615N-66HL4M-V, JKM620N-66HL4M-V, JKM625N-66HLM-V, JKM630N-66HL4M-V, JKM635N-66HL4M-V",
      "Tiger Neo Bifacial: JKM600N-66HL4M-BDV, JKM605N-65HL4M-BDV, JKM610N-66HL4M-BDV, JKM615N-66HL4M-BDV, JKM620N-66HL4M-BDV, JKM625N-66HL4M-BDV"
    ]
  },
  "ja-solar-panels": {
    manufacturerName: "Shanghai JA Solar Technologies Co., Ltd / JA Solar International Limited",
    country: "China",
    officialUrl: "https://www.jasolar.com/",
    description: "JA Solar multi-busbar (MBB) half-cell modules are engineered to minimize resistance power loss while increasing mechanical loading capabilities. Highly recommended by our engineering division for coastal and industrial environments.",
    advantage: "High power output, excellent low irradiance performance, lower thermal coefficient for Sri Lankan weather.",
    models: [
      "Mono JAM72S20 Series: 440W - 465W / MR / 1000V",
      "Mono JAM72S30 Series: 540W - 565W / GR",
      "Mono JAM72S30 Series: 570W - 585W / LR"
    ]
  },
  "longi-panels": {
    manufacturerName: "Longi Solar Technology Co, Ltd",
    country: "China",
    officialUrl: "https://www.longi.com/",
    description: "Longi Solar's flagship Hi-MO monocrystalline modules utilize advanced smart soldering and gallium-doped silicon wafers to deliver maximum reliability and energy conversion efficiency over long product lifetimes.",
    advantage: "Industry-leading cost-efficiency, superior wind/snow loading capacities, high energy yield under harsh utility conditions.",
    models: [
      "LR5 Series (Hi-MO 5) - LR5-72HBD: 530M, 535M, 540M, 545M, 550M",
      "LR5 Series (Hi-MO 5) - LR5-72HPH: 535M, 540M, 545M, 550M, 555M",
      "LR5 Series (Hi-MO 5) - LR5-72HTH: 565M, 570M, 575M, 580M, 585M, 615M",
      "LR5 Series (Hi-MO 5) - LR5-72HGD: 560M, 565M, 570M, 575M, 580M, 585M, 590M, 615M",
      "LR7 Series (Hi-MO 7) - LR7-72HGD: 585M, 590M, 595M, 600M, 605M, 610M, 615M, 620M",
      "LR7 Series (Hi-MO 7) - LR7-72HTH: 600M, 605M, 610M, 615M, 620M",
      "LR7 Series (Hi-MO 7) - LR7-72HYD: 625M"
    ]
  },
  "solis-inverters": {
    manufacturerName: "Solis - Ningbo Ginlong Technologies Co., Ltd",
    country: "China",
    officialUrl: "https://www.ginlong.com/",
    description: "Solis string grid-tied inverters are highly stable, commercial-grade components designed to feed pure AC power directly to high-capacity industrial, commercial, and residential operations with robust protective architectures.",
    advantage: "High power density, wider MPPT operating voltage ranges, multiple smart protective shields (integrated AFCI/SPDs).",
    models: [
      "S6-GR1P(0.6-0.8)K-UM Series: 0.6K, 0.8K",
      "S6-GR1P(0.7-3.6)K-M Series: 0.7K, 1K, 1.5K, 2K, 2.5K, 3K, 3.6K",
      "S6-GR1P(2.5-6)K-S Series: 2.5K, 3K, 3.6K, 4K, 4.6K, 5K, 6K",
      "S5-GR3P(3-20)K Series: 3K, 4K, 5K, 8K, 9K, 10K, 12K, 13K, 15K, 17K, 20K",
      "S5-GC(25-50)K Series: 25K, 30K, 33K, 36K, 40K, 40K-HV, 50K-HV",
      "S5-GC(50-60)K Series: 50K, 60K",
      "Solis-(80-110)K-5G-PRO Series: 80K, 100K, 110K",
      "Solis-(110-125)K-5G Series: 100K, 110K, 125K-HV",
      "S6-GC Series: S6-GC125K, S6-GC125K-HV"
    ]
  },
  "goodwe-inverters": {
    manufacturerName: "Jiangsu GoodWe Power Supply Technology Co., Ltd",
    country: "China",
    officialUrl: "https://www.goodwe.com/",
    description: "GoodWe's residential and commercial string inverters deliver leading thermodynamic convective cooling and highly precise MPPT tracking algorithms, maximizing solar yield from large multi-angle commercial array layouts.",
    advantage: "Integrated DC reverse polarity protection, low start-up voltage, high-efficiency passive thermal cooling.",
    models: [
      "XS Series: GW700-XS-30, GW1000-XS-30, GW1500-XS-30, GW2000-XS-30, GW2500-XS-30, GW3000-XS-30",
      "DNS G3 Series: GW4200-DNS-30, GW5000 DNS-30, GW6000-DNS-30",
      "SDT G2 PLUS+ Series: GW5000-SDT-20, GW6000-SDT-20, GW8000-SDT-30, GW10K-SDT-30, GW12K-SDT-30, GW15K-SDT-30",
      "SDT Series: GW17K-SDT-30, GW20K-SDT-30, GW25K-SDT-C30, GW30K-SDT-C30",
      "SMT Series: GW25K-MT, GW30K-MT, GW36K-MT, GW50KS-MT, GW60KS-MT, GW75K-SMT, GW80K-SMT",
      "SDT G3 Series: GW33K-SDT-C30, GW36K-SDT-C30, GW40K-SDT-C30",
      "GT Series: GW100K-GT, GW110K-GT, GW125K-GT",
      "HT Series: GW100K-HT, GW110K-HT, GW120K-HT"
    ]
  },
  "huawei-inverters": {
    manufacturerName: "Huawei Technologies Co., Ltd.",
    country: "China",
    officialUrl: "https://solar.huawei.com/",
    description: "Huawei smart grid-tied string inverters incorporate AI-boosted arc protection (AFCI) and integrated optimizer management layouts, yielding up to 30% more energy from shaded roof areas.",
    advantage: "Built-in PID recovery, AI-powered active protection to prevent fire hazards, highly secure digital cloud telemetry.",
    models: [
      "SUN2000-L1 Series: SUN2000-2KTL-L1, SUN2000-3KTL-L1, SUN2000-4KTL-L1, SUN2000-4.6KTL-L1, SUN2000-5KTL-L1, SUN2000-6KTL-L1",
      "SUN2000-M1 Series: SUN2000-3KTL-M1, SUN2000-4KTL-M1, SUN2000-5KTL-M1, SUN2000-6KTL-M1, SUN2000-8KTL-M1, SUN2000-10KTL-M1",
      "SUN2000-M5 Series: SUN2000-12KTL-M5, SUN2000-15KTL-M5, SUN2000-17KTL-M5, SUN2000-20KTL-M5, SUN2000-25KTL-M5",
      "SUN2000-MBO Series: SUN2000-15K-MBO, SUN2000-20K-MBO",
      "SUN2000-M3 Series: SUN2000-30KTL-M3, SUN2000-36KTL-M3, SUN2000-40KTL-M3, SUN2000-50KTL-M3",
      "SUN2000-MO Series: SUN2000-60KTL-MO",
      "SUN2000-M2 Series: SUN2000-100KTL-M2, SUN2000-115KTL-M2"
    ]
  },
  "solax-inverters": {
    manufacturerName: "SolaX Power Network Technology Co., Ltd.",
    country: "China",
    officialUrl: "https://www.solaxpower.com/",
    description: "SolaX Power string inverters offer incredible conversion ratios and lightweight engineering form factors. They represent high-efficiency options for single-phase residential and large commercial utility projects.",
    advantage: "Compact and fanless low-noise designs, high DC input oversized capability, seamless grid-integration certification.",
    models: [
      "X1 MINI Series: X1-MINI-3.0K-G4",
      "X1 BOOST Series: X1-BOOST-4.2K-G4, X1-BOOST-5K-G4, X1-BOOST-6K-G4",
      "X3-PRO G2 Series: X3-PRO G2/20K-TL, X3-PRO G2/25K-TL, X3-PRO-30K G2",
      "X3-TL Series: X3-20K-TL, X3-25K-TL, X3-30K-TL",
      "X3-P-T-N Series: X3-15.0P-T-N",
      "X3 MEGA G2 Series: X3-MEGA-G2 40kW, X3-MEGA-G2 50kW",
      "X3-FTH Series: X3-FTH-100K"
    ]
  },
  "solis-hybrids": {
    manufacturerName: "Solis - Ningbo Ginlong Technologies Co., Ltd",
    country: "China",
    officialUrl: "https://www.ginlong.com/",
    description: "Solis Smart Hybrid energy managers combine solar PV input, energy storage charging circuits, and double-insulated back-up power outputs into one modular chassis, delivering secure power safety through outages.",
    advantage: "Single and Three-Phase options, compatible with multiple LFP battery systems, zero export features, <10ms emergency switchover.",
    models: [
      "S5 Series: S5-EH1P3K-L, S5-EH1P5K-L",
      "RHI-ES Series: RHI-3K-48ES, RHI-3.6K-48ES, RHI-4.6K-48ES, RHI-5K-48ES",
      "RHI-5G Series: RHI-3K-48ES-5G, RHI-3.6K-48ES-5G, RHI-4.6K-48ES-5G, RHI-5K-48ES-5G, RHI-6K-48ES-5G",
      "RHI-HVES Series: RHI-3P5K-HVES-5G, RHI-3P8K-HVES-5G, RHI-3P10K-HVES-5G",
      "S6-PRO Series: S6-EH1P3K-L-PRO, S6-EH1P5K-L-PRO, S6-EH1P6K-L-PRO, S6-EH1P5K-L-EU",
      "S6-EU/H Series: S6-EH3P10K-H-PRO, S6-EH3P5K-H-EU",
      "S6-L Series: S6-EH3P8K02-NV-YD-L, S6-EH3P10K02-NV-YD-L, S6-EH3P12K02-NV-YD-L, S6-EH3P15K02-NV-YD-L"
    ]
  },
  "huawei-batteries": {
    manufacturerName: "Huawei Technologies Co., Ltd.",
    country: "China",
    officialUrl: "https://solar.huawei.com/",
    description: "Huawei LUNA2000 energy storage systems are premium modular smart Lithium Iron Phosphate (LiFePO4) batteries equipped with individual energy optimizers, allowing independent charge and discharge on a modular level.",
    advantage: "100% depth of discharge capability, modular stackable construction from 5kWh to 30kWh, integrated fire safety suppression.",
    models: [
      "Huawei LUNA2000 Energy Storage Systems (5kWh Module): LUNA2000-5-S0",
      "Huawei LUNA2000 Energy Storage Systems (10kWh Module): LUNA2000-10-S0"
    ]
  },
  "goodwe-batteries": {
    manufacturerName: "Jiangsu GoodWe Power Supply Technology Co., Ltd",
    country: "China",
    officialUrl: "https://www.goodwe.com/",
    description: "GoodWe's Lynx Home series offers premium stackable lithium battery systems for residential and commercial scale application. Highly flexible, safe, and certified to integrate seamlessly with GoodWe hybrid inverters.",
    advantage: "Modular plug-and-play stacking, IP65 protection, highly robust cell-level optimization, 10-year battery warranty.",
    models: [
      "Lynx Home U Series (Low Voltage 48V): LX U 5.4L (5.4kWh), LX U 10.8L (10.8kWh), LX U 16.2L (16.2kW / 16.2kWh Low Voltage LFP Storage)",
      "Lynx Home F Series (High Voltage Stack): LX F 6.6-H (6.6kWh), LX F 9.8-H (9.8kWh), LX F 13.1-H (13.1kWh), LX F 16.4-H (16.4kWh)",
      "Lynx Home F Plus+ Series (Utility Stack): High Voltage stackable design modularly scalable up to 112.8kW (112.8kWh High Voltage ESS)",
      "Lynx Home S Series: Smart stackable LFP modular units with intelligent active protection"
    ]
  },
  "solis-batteries": {
    manufacturerName: "Solis - Ningbo Ginlong Technologies Co., Ltd",
    country: "China",
    officialUrl: "https://www.ginlong.com/",
    description: "Solis IntelliHome battery storage systems represent state-of-the-art smart home and light commercial battery modules designed to pair natively with Solis S5 & S6 hybrid inverters for total backup autonomy.",
    advantage: "Pre-configured plug-and-play BMS telemetry, high charging/discharge capacity, lightweight and compact aesthetics.",
    models: [
      "Solis IntelliHome 5kW Series: Solis-5kW-IntelliHome-LFP (5kWh Low-Voltage stackable storage)",
      "Solis IntelliHome 10kW Series: Solis-10kW-IntelliHome-LFP (10kWh high-efficiency residential cabinet)",
      "Solis IntelliHome 16kW Series: Solis-16kW-IntelliHome-LFP (16kW / 16.2kWh high-capacity home back-up)",
      "IntelliHome Advanced BMS Controller: Telemetry and cloud diagnostic gateway"
    ]
  },
  "industrial-stacks": {
    manufacturerName: "Multi-Brand Advanced Industrial ESS (Sunwoda / BYD / SolaX)",
    country: "China",
    officialUrl: "https://www.sunwoda.com/",
    description: "High-capacity containerized and indoor cabinet-level industrial Energy Storage Systems (ESS). Engineered for peak shaving, demand response, and high-load industrial facility backup.",
    advantage: "Liquid-cooled technology for thermal balance, long cycle life (8000+ cycles), integrated gas/fire aerosol suppression, active BMS balancing.",
    models: [
      "Sunwoda Stack 100 Series: Sunwoda Stack 100 (100kWh Industrial Liquid-Cooled LFP Cabinet ESS)",
      "Sunwoda Stack 150 Series: Sunwoda Stack 150 (150kWh High-Voltage Commercial Stacking Enclosure)",
      "BYD Battery-Box Premium HVS/HVM Series: Stackable configurations modularly scalable up to 66.2kWh",
      "BYD Commercial ESS Stack 100/120 Series: High capacity containerized solutions (100kW / 120kWh string configuration)",
      "SolaX Triple Power High-Voltage Cabinet Ranges: Up to 46kWh modular commercial stacking"
    ]
  }
};

export const productsList: ProductItem[] = [
  { id: "jinko-panels", title: "Jinko Solar N-Type & Bifacial Panels", brand: "Jinko Solar Co., Ltd", type: "Panels", image: "/products/Jinko_tiger.png" },
  { id: "ja-solar-panels", title: "JA Solar Monocrystalline Modules", brand: "Shanghai JA Solar Technologies", type: "Panels", image: "/products/JA_Solar_panels.png" },
  { id: "longi-panels", title: "Longi Solar Hi-MO 5 & Hi-MO 7 Series", brand: "Longi Solar Technology Co, Ltd", type: "Panels", image: "/products/Longi_panels.png" },
  { id: "solis-inverters", title: "Solis Smart On-Grid Inverters", brand: "Solis - Ningbo Ginlong Technologies", type: "Inverters", image: "/products/Solis_OnGrid.png" },
  { id: "goodwe-inverters", title: "GoodWe Residential & Commercial String Inverters", brand: "Jiangsu GoodWe Power Supply", type: "Inverters", image: "/products/Goodwe_ResidentialandCommercial.png" },
  { id: "huawei-inverters", title: "Huawei SUN2000 Smart Energy Inverters", brand: "Huawei Technologies Co., Ltd.", type: "Inverters", image: "/products/Huawie_2000.png" },
  { id: "solax-inverters", title: "SolaX Power High-Efficiency Grid Inverters", brand: "SolaX Power Network Technology", type: "Inverters", image: "/products/Solax.png" },
  { id: "solis-hybrids", title: "Solis S5 & S6 Intelligent Hybrid Inverters", brand: "Solis - Ningbo Ginlong Technologies", type: "Hybrids", image: "/products/Solis S5 S6 Hybrid.png" },
  { id: "huawei-batteries", title: "Huawei LUNA2000 Smart Battery Systems", brand: "Huawei Technologies Co., Ltd.", type: "Batteries", image: "/products/huawei-luna.png" },
  { id: "goodwe-batteries", title: "GoodWe Lynx Home Low & High Voltage Storage", brand: "GoodWe Batteries", type: "Batteries", image: "/products/GoodWe_Lynx.png" },
  { id: "solis-batteries", title: "Solis IntelliHome Smart Batteries", brand: "Solis Batteries", type: "Batteries", image: "/products/Solis_InttelliHome.png" },
  { id: "industrial-stacks", title: "Industrial Storage Stack 100 & High Capacity", brand: "Multi-Brand Stack Systems", type: "Batteries", image: "/products/Stack100.png" }
];
