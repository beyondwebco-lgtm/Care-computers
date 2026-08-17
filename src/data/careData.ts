import type { ServiceItem, ProblemOption, BrandItem, Testimonial, RepairTrackingInfo, WarrantyInfo } from '../types';


export const COMPANY_INFO = {
  name: "CARE COMPUTERS",
  tagline: "Your Laptop. Our Expertise.",
  positioning: "Professional Laptop Repair, Data Recovery & IT Support in Hyderabad & Secunderabad",
  foundedYear: 1998,
  yearsExperience: "20+",
  satisfaction: "100%",
  primaryPhone: "+91 92463 79771",
  formattedPrimaryPhone: "92463 79771",
  landlines: ["+91 40 6638 2253", "+91 40 6690 1116"],
  whatsappNumber: "919246379771",
  email: "carecomputers1998@gmail.com",
  address: {
    building: "CTC Complex / Chenoy Trade Centre",
    street: "Parklane",
    city: "Secunderabad",
    state: "Telangana",
    zip: "500003",
    country: "India",
    fullAddress: "CTC Complex / Chenoy Trade Centre, Parklane, Secunderabad, Telangana 500003, India"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273766627063!2d78.489116!3d17.446585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a3411b4122d%3A0xb249fef7ff9ad34!2sChenoy%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  highlights: [
    "In business since 1998",
    "20+ years of technical experience",
    "Certified engineers for all major laptop brands",
    "100% customer satisfaction commitment",
    "Fast, reliable and affordable repair service",
    "Same-day repair available for critical issues",
    "Free pickup and delivery in Hyderabad & Secunderabad",
    "Dell premium service partner positioning"
  ]
};

export const QUICK_STATS = [
  { value: "1998", label: "Serving Since", detail: "Over 26 years in Secunderabad" },
  { value: "20+", label: "Years Experience", detail: "Certified micro-electronics team" },
  { value: "100%", label: "Customer Satisfaction", detail: "Trusted quality guarantee" },
  { value: "Same Day", label: "Repair Support", detail: "Fast turnaround for common issues" },
  { value: "Free", label: "Pickup & Delivery", detail: "Doorstep service in Twin Cities" }
];

export const PROBLEM_OPTIONS: ProblemOption[] = [
  {
    id: "not-turning-on",
    title: "Laptop Not Turning On",
    iconName: "PowerOff",
    explanation: "Could be caused by a faulty power adapter, dead battery, damaged power jack, or motherboard short-circuit.",
    relevantService: "Motherboard Repair & Power Jack Diagnostics",
    serviceId: "motherboard-repair"
  },
  {
    id: "broken-screen",
    title: "Broken Screen",
    iconName: "MonitorX",
    explanation: "Cracked glass, black lines, flickering display or color bleed requires high-grade original screen replacement.",
    relevantService: "Laptop Screen Replacement",
    serviceId: "laptop-screen-replacement"
  },
  {
    id: "slow-laptop",
    title: "Slow Laptop",
    iconName: "Gauge",
    explanation: "High CPU usage, aging hard drives or insufficient RAM can severely throttle your laptop speed.",
    relevantService: "Performance Tuning & SSD/RAM Upgrade",
    serviceId: "performance-tuning"
  },
  {
    id: "overheating",
    title: "Overheating",
    iconName: "Flame",
    explanation: "Clogged thermal vents, dried thermal paste, or failing cooling fans cause random shutdowns and processor damage.",
    relevantService: "Laptop Overheating Repair & Thermal Cleaning",
    serviceId: "overheating-repair"
  },
  {
    id: "battery-problem",
    title: "Battery Problem",
    iconName: "BatteryWarning",
    explanation: "Laptop not holding charge, swelling battery, or rapid drainage needs certified battery testing and replacement.",
    relevantService: "Battery Replacement",
    serviceId: "battery-replacement"
  },
  {
    id: "keyboard-problem",
    title: "Keyboard Problem",
    iconName: "Keyboard",
    explanation: "Sticky keys, missing keycaps, or completely unresponsive keyboard rows often happen due to wear or spill.",
    relevantService: "Laptop Keyboard Repair & Replacement",
    serviceId: "laptop-keyboard-repair"
  },
  {
    id: "hard-drive-failure",
    title: "Hard Drive Failure",
    iconName: "HardDrive",
    explanation: "Clicking noises, unreadable partitions, or disk boot errors indicate hard disk physical or logical failure.",
    relevantService: "Hard Drive Recovery & Replacement",
    serviceId: "hard-drive-recovery"
  },
  {
    id: "no-display",
    title: "No Display",
    iconName: "Tv",
    explanation: "Laptop turns on with fan noise but screen stays completely black or dim. Usually GPU or RAM connection issue.",
    relevantService: "No Display Repair & Graphics Diagnostics",
    serviceId: "no-display-repair"
  },
  {
    id: "wifi-problem",
    title: "Wi-Fi Problem",
    iconName: "WifiOff",
    explanation: "Frequent disconnections, limited connectivity or missing network adapter drivers in operating system.",
    relevantService: "Internet & Network Services",
    serviceId: "internet-wifi-problems"
  },
  {
    id: "blue-screen",
    title: "Blue Screen (BSOD)",
    iconName: "AlertTriangle",
    explanation: "Windows stop errors, dump files, memory exception faults, or corrupted driver conflicts.",
    relevantService: "Blue Screen Errors Repair",
    serviceId: "blue-screen-errors"
  },
  {
    id: "virus-malware",
    title: "Virus / Malware",
    iconName: "ShieldAlert",
    explanation: "Pop-up ads, browser hijacking, ransomware threats, and high background disk utilization.",
    relevantService: "Virus & Spyware Removal",
    serviceId: "virus-spyware-removal"
  },
  {
    id: "os-problem",
    title: "OS Problem",
    iconName: "Cpu",
    explanation: "Stuck in boot loop, missing system files, automatic repair failed, or corrupted Windows update.",
    relevantService: "OS Installation & Corruption Repair",
    serviceId: "os-installation"
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    iconName: "Database",
    explanation: "Accidentally formatted drive, deleted files, corrupted file system, or non-responding external storage.",
    relevantService: "Professional Data Recovery",
    serviceId: "data-recovery"
  },
  {
    id: "liquid-damage",
    title: "Liquid Damage",
    iconName: "Droplets",
    explanation: "Coffee, water, or tea spill on keyboard or chassis. Requires immediate ultrasonic cleaning and motherboard trace repair.",
    relevantService: "Emergency Liquid Damage Restoration",
    serviceId: "motherboard-repair"
  },
  {
    id: "motherboard-problem",
    title: "Motherboard Problem",
    iconName: "CircuitBoard",
    explanation: "Laptop completely dead, charging IC burnt, short circuit on mainboard, or BIOS chip corruption.",
    relevantService: "Chip-Level Motherboard Repair",
    serviceId: "motherboard-repair"
  },
  {
    id: "other-issue",
    title: "Other Issue",
    iconName: "HelpCircle",
    explanation: "Touchpad failure, webcam non-functional, audio jack issue, hinge broken, or custom upgrade required.",
    relevantService: "Comprehensive Laptop Diagnostics",
    serviceId: "performance-tuning"
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "laptop-screen-replacement",
    title: "Laptop Screen Replacement",
    slug: "laptop-screen-repair",
    iconName: "Monitor",
    category: "hardware",
    shortDesc: "Fast replacement of broken, cracked, dim, or flickering laptop displays with genuine high-grade panels.",
    fullDesc: "We provide high-quality laptop screen replacement for all major brands including Dell, HP, Lenovo, Apple MacBook, Asus, and Acer. Whether your screen has hairline cracks, vertical lines, liquid bleed, or a broken backlight, our engineers replace it with genuine compatible panels.",
    symptoms: ["Cracked or shattered glass", "Vertical/horizontal colored lines", "Dark display with faint background image", "Flickering screen on movement"],
    whatWeRepair: ["LED / LCD Panel Replacement", "MacBook Retina Display Replacement", "Display Cable (EDP) Repair", "Hinge alignment during display change"],
    estimatedTime: "1 - 3 Hours",
    warranty: "90 Days Warranty",
    isFeatured: true
  },
  {
    id: "motherboard-repair",
    title: "Motherboard Repair",
    slug: "motherboard-repair",
    iconName: "CircuitBoard",
    category: "hardware",
    shortDesc: "Advanced chip-level motherboard troubleshooting, BGA IC replacement, and liquid damage recovery.",
    fullDesc: "Rather than replacing expensive complete motherboards, Care Computers specializes in precision chip-level motherboard repair. Our micro-soldering experts fix power IC shorts, MOSFET failures, GPU reballing, and corrupted BIOS chips.",
    symptoms: ["Laptop dead with no light indicators", "Charging light blinks but won't power on", "Random shutdown after few minutes", "Liquid spill damage"],
    whatWeRepair: ["Power IC & Charging IC Replacement", "Short Circuit Detection & Trace Repair", "BIOS Chip Reprogramming", "BGA Reballing"],
    estimatedTime: "24 - 48 Hours",
    warranty: "90 Days Warranty",
    isFeatured: true
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    slug: "data-recovery",
    iconName: "Database",
    category: "data",
    shortDesc: "Secure data extraction from crashed hard drives, damaged SSDs, formatted partitions, and USB drives.",
    fullDesc: "Lost irreplaceable documents, photos, or business files? Care Computers offers professional data recovery services in Secunderabad & Hyderabad for corrupted hard disks, failed SSDs, liquid-damaged laptops, and RAW file systems.",
    symptoms: ["Hard drive making clicking or grinding noises", "Operating system asking to format disk", "Accidentally deleted files or partition loss", "Drive not detected in BIOS"],
    whatWeRepair: ["Mechanical Hard Drive Head/Motor Recovery", "SSD Controller Data Extraction", "RAW & Corrupted Partition Recovery", "Encrypted & Formatted Drive Recovery"],
    estimatedTime: "1 - 3 Days",
    warranty: "Strict Data Confidentiality Guaranteed",
    isFeatured: true
  },
  {
    id: "performance-tuning",
    title: "Performance Tuning & Upgrades",
    slug: "performance-tuning",
    iconName: "Zap",
    category: "laptop",
    shortDesc: "Transform slow laptops with high-speed NVMe SSD upgrades, RAM expansion, and OS optimization.",
    fullDesc: "Upgrade your existing laptop to run 10x faster without buying a new device. We install high-performance Solid State Drives (SSDs), double your system RAM, and clean out background bloatware for lightning-fast boot times.",
    symptoms: ["Takes 5+ minutes to start up", "Programs freezing constantly", "100% Disk Usage in Task Manager", "Lag while opening browser tabs"],
    whatWeRepair: ["HDD to SSD Cloning & Migration", "DDR4 / DDR5 RAM Expansion", "Windows System Optimization", "Startup App Cleanup"],
    estimatedTime: "1 - 2 Hours",
    warranty: "3 Years SSD Manufacturer Warranty",
    isFeatured: true
  },
  {
    id: "os-installation",
    title: "OS Installation & Upgrade",
    slug: "os-installation",
    iconName: "Cpu",
    category: "software",
    shortDesc: "Clean installation of licensed Windows 10/11, macOS, driver configuration, and essential software.",
    fullDesc: "Ensure your computer runs smoothly with genuine operating system installation, official device drivers, security patches, and office software configuration.",
    symptoms: ["Windows automatic repair fail loop", "Operating system missing error", "Corrupted system registry", "Upgrading from Windows 7/8 to 11"],
    whatWeRepair: ["Windows 10 / 11 Clean Installation", "macOS Reinstallation & Downgrade", "Driver Package Configuration", "Antivirus & Utility Installation"],
    estimatedTime: "1 - 2 Hours",
    warranty: "30 Days Software Support",
    isFeatured: true
  },
  {
    id: "battery-replacement",
    title: "Battery Replacement",
    slug: "battery-replacement",
    iconName: "BatteryCharging",
    category: "hardware",
    shortDesc: "Original and high-capacity replacement batteries for Dell, HP, Lenovo, Acer, Asus, and MacBooks.",
    fullDesc: "Revive your laptop's mobility with genuine replacement batteries that deliver original backup hours and safeguard your laptop from battery swelling hazards.",
    symptoms: ["Laptop turns off immediately when unplugged", "Battery percentage stuck at single number", "Physical swelling pushing up touchpad", "'Consider replacing battery' warning"],
    whatWeRepair: ["Internal & External Battery Replacement", "Battery Management Controller Calibration", "Power Management IC Check", "Swollen Battery Safe Disposal"],
    estimatedTime: "30 Minutes",
    warranty: "6 - 12 Months Warranty",
    isFeatured: true
  },
  {
    id: "memory-ram-upgrade",
    title: "Memory / RAM Upgrade",
    slug: "memory-ram-upgrade",
    iconName: "Layers",
    category: "hardware",
    shortDesc: "Expand system memory up to 32GB/64GB for smooth multitasking, gaming, and engineering software.",
    fullDesc: "Double or triple your laptop RAM capacity to run heavy applications like Photoshop, AutoCAD, Premiere Pro, and multiple browser windows without lag.",
    symptoms: ["Low memory warning dialogs", "System slowdown during multitasking", "Software crashing unexpectedly"],
    whatWeRepair: ["DDR3, DDR4, DDR5 RAM Installation", "Dual-Channel Memory Architecture Setup", "RAM Compatibility Diagnostic"],
    estimatedTime: "30 Minutes",
    warranty: "Lifetime / 3 Years RAM Warranty"
  },
  {
    id: "laptop-not-powering-on",
    title: "Laptop Not Powering On",
    slug: "laptop-not-powering-on",
    iconName: "Power",
    category: "hardware",
    shortDesc: "Comprehensive diagnostics for laptops that fail to power up or show zero sign of life.",
    fullDesc: "If your laptop power button produces no response, lights, or fan spin, our engineers test the power supply, DC jack, motherboard rails, and battery circuit.",
    symptoms: ["No LEDs or fan sound when pressing power", "Light flickers once then dies", "Short circuit smell"],
    whatWeRepair: ["DC-In Jack Replacement", "Power Rail Short Circuit Removal", "Power Adapter Voltage Verification"],
    estimatedTime: "2 - 4 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "laptop-body-replacement",
    title: "Laptop Body Replacement",
    slug: "laptop-body-replacement",
    iconName: "Box",
    category: "hardware",
    shortDesc: "Replacement of damaged top covers, bottom bases, palm rests, and screen back covers.",
    fullDesc: "Restore your damaged or dropped laptop's physical housing with brand-new original body panels and palm rests.",
    symptoms: ["Cracked plastic casing", "Broken screw pillars inside chassis", "Gaps between top and bottom covers"],
    whatWeRepair: ["Base Panel Replacement", "Palm Rest with Keyboard Housing", "Screen Back Cover (A/B/C/D panels)"],
    estimatedTime: "1 Day",
    warranty: "6 Months Warranty"
  },
  {
    id: "hinges-repair",
    title: "Hinges Repair & Fabrication",
    slug: "hinges-repair",
    iconName: "Maximize2",
    category: "hardware",
    shortDesc: "Fix tight, broken, or misaligned laptop hinges to prevent screen cracking and body separation.",
    fullDesc: "Broken hinges apply severe pressure on screen cables and display glass. We repair, lubricate, or replace broken steel hinges and internal mounting pillars.",
    symptoms: ["Laptop lid hard to open or close", "Popping noise when opening laptop", "Screen casing separating from base"],
    whatWeRepair: ["Steel Hinge Replacement", "Internal Brass Nut Re-anchoring", "Hinge Tension Calibration"],
    estimatedTime: "3 - 5 Hours",
    warranty: "6 Months Warranty"
  },
  {
    id: "hard-disk-failure",
    title: "Hard Disk Failure Diagnostics",
    slug: "hard-disk-failure",
    iconName: "HardDrive",
    category: "hardware",
    shortDesc: "Testing, sector repairing, and drive replacement for failing magnetic hard drives.",
    fullDesc: "Diagnose S.M.A.R.T errors, bad sectors, and mechanical failures before total data destruction occurs.",
    symptoms: ["SMART drive failure warning at boot", "Extreme file opening delay", "Clicking sound"],
    whatWeRepair: ["Hard Drive Diagnostic & Bad Sector Repair", "Drive Replacement with High Speed SSD"],
    estimatedTime: "2 - 4 Hours",
    warranty: "3 Years Drive Warranty"
  },
  {
    id: "no-display-repair",
    title: "No Display Repair",
    slug: "no-display-repair",
    iconName: "Tv",
    category: "hardware",
    shortDesc: "Troubleshooting laptops that turn on but show no picture on the screen.",
    fullDesc: "When power lights turn on and fans rotate but display remains pitch black, we diagnose RAM contacts, display flex cables, and GPU chips.",
    symptoms: ["Power light ON, caps lock light blinking", "Screen turns on with no image", "Works on external HDMI monitor"],
    whatWeRepair: ["Display Cable Re-seating / Replacement", "RAM Slot Cleaning & Bus Testing", "Graphics Chip Reflow/Reballing"],
    estimatedTime: "2 - 4 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "overheating-repair",
    title: "Overheating & Thermal Thermal Repair",
    slug: "laptop-overheating",
    iconName: "Thermometer",
    category: "hardware",
    shortDesc: "Deep fan cleaning, heatsink de-clogging, and high-conductivity thermal paste replacement.",
    fullDesc: "Prevent thermal throttling and CPU damage with professional cleaning and high-performance thermal grease application.",
    symptoms: ["Laptop gets hot to touch underneath", "Loud fan noise constantly running", "Laptop shuts down during video calls"],
    whatWeRepair: ["CPU/GPU Fan Dust Extraction & Lubrication", "Artic Silver Thermal Paste Re-application", "Heatsink Copper Pipe Inspection"],
    estimatedTime: "1 - 2 Hours",
    warranty: "6 Months Thermal Warranty",
    isFeatured: true
  },
  {
    id: "laptop-keyboard-repair",
    title: "Laptop Keyboard Repair & Replacement",
    slug: "keyboard-repair",
    iconName: "Keyboard",
    category: "hardware",
    shortDesc: "Original backlit and standard keyboard replacement for all laptop brands and MacBooks.",
    fullDesc: "Replace broken, unresponsive, or liquid-damaged laptop keyboards with exact matching original keyboard modules.",
    symptoms: ["Specific keys not typing", "Keys typing wrong characters", "Sticky or liquid affected keys"],
    whatWeRepair: ["Full Keyboard Assembly Replacement", "Backlit Keyboard Cable Repair", "Individual Key Mechanism Repair"],
    estimatedTime: "1 Hour",
    warranty: "90 Days Warranty",
    isFeatured: true
  },
  {
    id: "laptop-hard-drive-services",
    title: "Laptop Hard Drive & Storage Services",
    slug: "laptop-hard-drive-services",
    iconName: "HardDrive",
    category: "hardware",
    shortDesc: "Storage upgrades, partition management, NVMe M.2 installation, and external drive setup.",
    fullDesc: "Expand your laptop storage capacity with ultra-fast PCIe Gen4 NVMe SSDs or dual-drive setups (SSD + HDD).",
    symptoms: ["Out of disk space notifications", "Slow transfer rate when copying files"],
    whatWeRepair: ["M.2 NVMe SSD Upgrade", "HDD to SSD Cloning", "Secondary Hard Drive Caddy Installation"],
    estimatedTime: "1 - 2 Hours",
    warranty: "3 Years SSD Warranty"
  },
  {
    id: "booting-problems",
    title: "Booting Problems Repair",
    slug: "booting-problems",
    iconName: "RotateCcw",
    category: "software",
    shortDesc: "Fixing system boot errors, missing bootloader, and endless restart loops.",
    fullDesc: "Resolve Windows boot sequence errors, EFI partition corruption, and startup repair lockup without losing personal files.",
    symptoms: ["Default boot device missing error", "Stuck on manufacturer logo screen", "Rebooting repeatedly"],
    whatWeRepair: ["Master Boot Record (MBR/BCD) Repair", "UEFI Bootloader Reconstruction", "Startup System File Fix"],
    estimatedTime: "1 - 2 Hours",
    warranty: "30 Days Software Warranty"
  },
  {
    id: "power-jack-repair",
    title: "Power Jack / DC-In Repair",
    slug: "power-jack-repair",
    iconName: "Plug",
    category: "hardware",
    shortDesc: "Repair loose, broken, or sparking charging ports on laptops.",
    fullDesc: "A loose charger plug can spark and damage motherboard power lines. We solder original replacement DC power jacks.",
    symptoms: ["Charger cable must be held at an angle to charge", "Charging port feels wobbly or loose", "Sparking sound inside charging port"],
    whatWeRepair: ["DC Jack Soldering & Harness Replacement", "Motherboard Charging Terminal Repair"],
    estimatedTime: "1 - 3 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "laptop-shutdown-problems",
    title: "Laptop Random Shutdown Repair",
    slug: "laptop-shutdown-problems",
    iconName: "PowerOff",
    category: "hardware",
    shortDesc: "Diagnosing thermal trips, power IC instability, and bad battery voltage drops.",
    fullDesc: "Determine exact hardware failure causing your laptop to abruptly turn off during operation.",
    symptoms: ["Laptop turns off without warning", "Shuts down when running games or heavy software"],
    whatWeRepair: ["Power Consumption Diagnostics", "Voltage Regulator Module Repair", "Thermal Protection Reset"],
    estimatedTime: "3 - 5 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "virus-spyware-removal",
    title: "Virus / Spyware & Ransomware Removal",
    slug: "virus-spyware-removal",
    iconName: "ShieldCheck",
    category: "software",
    shortDesc: "Deep virus scanning, malware purging, spyware removal, and enterprise firewall protection.",
    fullDesc: "Purge malicious software, keyloggers, and browser hijacks while safeguarding your sensitive banking and personal credentials.",
    symptoms: ["Browser redirecting to unknown websites", "Files locked with strange extensions", "Excessive unwanted pop-up windows"],
    whatWeRepair: ["Deep Virus & Rootkit Purge", "Malware & Adware Elimination", "Premium Antivirus Installation & License"],
    estimatedTime: "1 - 2 Hours",
    warranty: "30 Days Protection Support"
  },
  {
    id: "laptop-charger-replacement",
    title: "Laptop Charger Replacement",
    slug: "laptop-charger-replacement",
    iconName: "Zap",
    category: "hardware",
    shortDesc: "Genuine power adapters for Dell, HP, Lenovo, Asus, Acer, and Apple MagSafe / USB-C.",
    fullDesc: "Avoid cheap counterfeit adapters that destroy motherboard charging ICs. We stock genuine original power chargers with correct wattage.",
    symptoms: ["Charger cable frayed or shorting", "Adapter brick getting extremely hot", "Laptop displays 'Unknown adapter wattage' warning"],
    whatWeRepair: ["Original Brand Adapter Supply", "USB-C Power Delivery Charger Supply", "MagSafe Charger Cable Repair"],
    estimatedTime: "Immediate",
    warranty: "6 - 12 Months Warranty"
  },
  {
    id: "blue-screen-errors",
    title: "Blue Screen (BSOD) Error Repair",
    slug: "blue-screen-errors",
    iconName: "AlertTriangle",
    category: "software",
    shortDesc: "Troubleshooting blue screen stop codes, memory dumps, and driver conflicts.",
    fullDesc: "Analyze Windows dump logs to pinpoint exact hardware driver incompatibility, RAM failure, or kernel corruption.",
    symptoms: ["Blue screen error code like MEMORY_MANAGEMENT or WHEA_UNCORRECTABLE_ERROR", "Computer restarts automatically after BSOD"],
    whatWeRepair: ["Memory Diagnostic & Replacement", "Driver Stack Cleanup", "Kernel Dump File Analysis"],
    estimatedTime: "1 - 3 Hours",
    warranty: "30 Days Software Support"
  },
  {
    id: "hanging-freezing-problems",
    title: "Hanging & Freezing Problems",
    slug: "hanging-freezing-problems",
    iconName: "PauseCircle",
    category: "software",
    shortDesc: "Resolving unresponsive mouse cursor, frozen windows, and hard crashes.",
    fullDesc: "Diagnose whether system hangs are caused by background software conflicts, degraded hard drive sectors, or overheating.",
    symptoms: ["Mouse cursor stops moving", "Ctrl+Alt+Del does not respond", "System locks up during daily work"],
    whatWeRepair: ["Operating System Integrity Repair", "Hardware Diagnostic Suite", "Storage Speed Benchmarking"],
    estimatedTime: "1 - 3 Hours",
    warranty: "30 Days Support"
  },
  {
    id: "internet-wifi-problems",
    title: "Internet & Wi-Fi Connection Problems",
    slug: "internet-wifi-problems",
    iconName: "Wifi",
    category: "software",
    shortDesc: "Fixing Wi-Fi adapter missing, weak signal reception, and IP configuration errors.",
    fullDesc: "Repair internal Wi-Fi WLAN cards, antenna cables, and Windows network stack settings for fast uninterrupted browsing.",
    symptoms: ["Wi-Fi icon missing from taskbar", "'No Internet, secured' message", "Wi-Fi disconnects every few minutes"],
    whatWeRepair: ["Wi-Fi WLAN Card Replacement", "Antenna Wire Connection Repair", "TCP/IP Stack & DNS Reset"],
    estimatedTime: "1 Hour",
    warranty: "90 Days Warranty"
  },
  {
    id: "os-corruption-repair",
    title: "OS Corruption Repair",
    slug: "os-corruption-repair",
    iconName: "FileX",
    category: "software",
    shortDesc: "Repairing corrupted Windows system files, BCD files, and registry entries without data loss.",
    fullDesc: "Restore corrupted operating systems to working state while keeping all your files, applications, and settings intact.",
    symptoms: ["System files corrupted error message", "Windows apps fail to open", "Start menu not responding"],
    whatWeRepair: ["SFC & DISM In-Place Repair", "Windows Registry Restoration", "System Restore Point Recovery"],
    estimatedTime: "1 - 2 Hours",
    warranty: "30 Days Support"
  },
  {
    id: "panel-repair",
    title: "Laptop Body Panel & Bezel Repair",
    slug: "panel-repair",
    iconName: "Square",
    category: "hardware",
    shortDesc: "Restoring front bezels, rear LCD lids, and broken plastic clips.",
    fullDesc: "Repair broken plastic clips, loose screen bezels, and cracked frame corners with precision fabrication techniques.",
    symptoms: ["Front bezel popping out", "Gaps around display frame", "Cracked corner housing"],
    whatWeRepair: ["Bezel Re-clipping & Bonding", "LCD Back Cover Repair", "Corner Reinforcement"],
    estimatedTime: "2 - 4 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "touchpad-repair",
    title: "Touchpad Repair & Calibration",
    slug: "touchpad-repair",
    iconName: "MousePointer",
    category: "hardware",
    shortDesc: "Fixing erratic cursor movement, unresponsive touchpad buttons, and multi-touch gesture failure.",
    fullDesc: "Replace faulty trackpads, clickpad switches, and recalibrate precision touchpad drivers for smooth navigation.",
    symptoms: ["Cursor jumping across screen unexpectedly", "Left/Right click buttons not registering", "Touchpad completely non-responsive"],
    whatWeRepair: ["Touchpad Module Replacement", "Trackpad Ribbon Cable Repair", "Precision Driver Configuration"],
    estimatedTime: "1 - 2 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "web-camera-repair",
    title: "Web Camera Repair & Replacement",
    slug: "web-camera-repair",
    iconName: "Video",
    category: "hardware",
    shortDesc: "Fixing black camera screen, 'No camera attached' errors, and blurry video in Zoom/Teams.",
    fullDesc: "Repair internal webcam modules, microphone flex arrays, and Windows privacy permissions for crystal-clear video calls.",
    symptoms: ["Camera app showing error 0xA00F4244", "Grainy or black video output", "Microphone not picking up voice"],
    whatWeRepair: ["Internal HD Web Camera Replacement", "Webcam Flex Cable Inspection", "Privacy Switch Repair"],
    estimatedTime: "1 - 2 Hours",
    warranty: "90 Days Warranty"
  },
  {
    id: "printer-repair",
    title: "Printer Repair & Toner Service",
    slug: "printer-repair",
    iconName: "Printer",
    category: "business",
    shortDesc: "LaserJet and InkJet printer troubleshooting, paper jam fixes, cartridge refilling, and network printer configuration.",
    fullDesc: "Complete printer service for office and home printers including HP, Canon, Epson, and Brother.",
    symptoms: ["Paper jam error", "Faint or streaky printing", "Printer offline on network"],
    whatWeRepair: ["Pickup Roller & Fuser Assembly Replacement", "Printhead Cleaning", "Wireless Printer Setup"],
    estimatedTime: "2 - 5 Hours",
    warranty: "30 Days Warranty"
  },
  {
    id: "network-services",
    title: "Network Services & Cabling",
    slug: "network-services",
    iconName: "Network",
    category: "business",
    shortDesc: "Structured LAN cabling, Wi-Fi router setup, switch installation, and VPN configuration for offices.",
    fullDesc: "Design, deploy, and maintain high-speed office network infrastructure in Secunderabad and Hyderabad.",
    symptoms: ["Slow file transfer across office computers", "Dead Wi-Fi zones in office", "Unorganized cable clutter"],
    whatWeRepair: ["Cat6 LAN Cable Patching", "Gigabit Switch Installation", "Mesh Wi-Fi Deployment"],
    estimatedTime: "Custom Project",
    warranty: "1 Year Installation Warranty"
  },
  {
    id: "it-support",
    title: "Business IT Support & Infrastructure",
    slug: "it-support",
    iconName: "Briefcase",
    category: "business",
    shortDesc: "Complete IT support packages for small and medium businesses, server maintenance, and workstation setups.",
    fullDesc: "Practical, cost-effective IT support for small and medium businesses in Hyderabad and Secunderabad. We handle workstation setup, network security, data backup automation, and hardware maintenance.",
    symptoms: ["Frequent office IT downtime", "No centralized data backup solution", "Need routine workstation maintenance"],
    whatWeRepair: ["Workstation Fleet Maintenance", "Centralized NAS/Server Setup", "Data Backup Automation", "On-Call IT Support"],
    estimatedTime: "Ongoing Retainer / Call-out",
    warranty: "SLA Guaranteed Support"
  }
];

export const FEATURED_SERVICES = SERVICES_CATALOG.filter(s => s.isFeatured);

export const BRANDS_LIST: BrandItem[] = [
  {
    name: "Apple",
    tagline: "MacBook Air, MacBook Pro & iMac",
    description: "Expert chip-level repair for Apple Silicon M1/M2/M3 and Intel MacBooks, Retina display replacement, battery service, and liquid damage recovery.",
    specialties: ["MacBook Screen Replacement", "Logic Board Repair", "MagSafe / Type-C Port Repair", "macOS System Restore"]
  },
  {
    name: "Dell",
    tagline: "Inspiron, XPS, Latitude & Vostro",
    description: "Specialized Dell service partner positioning in Hyderabad & Secunderabad. Motherboard repair, original battery supply, screen replacement, and BIOS unlocking.",
    specialties: ["Dell XPS & Inspiron Screen Fix", "Power Jack Solder Repair", "Original Dell Batteries & Chargers", "Dell Alienware Thermal Tuning"]
  },
  {
    name: "HP",
    tagline: "Pavilion, Envy, Spectre, ProBook & OMEN",
    description: "Comprehensive HP laptop repair services including hinge fabrication, original keyboard replacement, SSD upgrades, and motherboard IC fix.",
    specialties: ["HP Hinge & Body Fabrication", "Spectre / Envy Touchscreen Replace", "HP Bios Recovery", "OMEN Cooling Fan Replacement"]
  },
  {
    name: "Lenovo",
    tagline: "ThinkPad, IdeaPad, Legion & Yoga",
    description: "Trusted ThinkPad and IdeaPad service experts. Keyboard replacements, trackpoint fixes, RAM expansions, and liquid damage restoration.",
    specialties: ["ThinkPad Keyboard & Trackpad Repair", "Legion Gaming Laptop Cleaning", "Yoga 360 Hinge Repair", "Lenovo Motherboard Diagnostics"]
  },
  {
    name: "Asus",
    tagline: "ROG, TUF Gaming, ZenBook & VivoBook",
    description: "High-performance Asus gaming and ultrabook repair. Thermal paste repasting, display panel upgrades, and power circuit repair.",
    specialties: ["ROG Gaming Thermal Repasting", "ZenBook Screen Panel Change", "Asus DC Jack Repair", "TUF Body Base Replacement"]
  },
  {
    name: "Acer",
    tagline: "Predator, Nitro, Aspire & Swift",
    description: "Complete repair solutions for Acer Nitro gaming laptops and Aspire notebooks. Hard drive to SSD migration and power issue fixes.",
    specialties: ["Nitro 5 Cooling Repair", "Aspire Motherboard Short Repair", "Acer Battery Replacement", "Swift Screen Replacement"]
  },
  {
    name: "Sony VAIO",
    tagline: "Classic VAIO Laptops & Ultrabooks",
    description: "Specialized legacy component support for Sony VAIO laptops including display inverter repair, keyboard sourcing, and OS upgrades.",
    specialties: ["VAIO Screen & Inverter Repair", "Hard Drive Data Recovery", "Windows 10 Upgrade"]
  },
  {
    name: "Samsung",
    tagline: "Galaxy Book & Notebook Series",
    description: "Precision repair for Samsung Galaxy Book laptops, AMOLED screen care, USB-C charging repair, and battery replacements.",
    specialties: ["Galaxy Book Display Repair", "Type-C Charging Board Repair", "Samsung SSD Upgrade"]
  },
  {
    name: "Toshiba",
    tagline: "Satellite & Portege Laptops",
    description: "Reliable repair and maintenance for Toshiba Satellite, Tecra, and Portege computers.",
    specialties: ["Toshiba Power Jack Fix", "HDD Data Recovery", "Keyboard Replacement"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mr. Srinivas K",
    location: "Secunderabad",
    serviceCategory: "Damaged LED Screen Replacement",
    rating: 5,
    comment: "Fast service for my broken laptop display. Replaced with original screen within a few hours. Excellent work!",
    date: "Recent Customer"
  },
  {
    id: "2",
    name: "Mr. Rajesh Kumar M",
    location: "Hyderabad",
    serviceCategory: "Dell Laptop Motherboard Repair",
    rating: 5,
    comment: "Care Computers fixed my Dell laptop motherboard problem when other centers said it couldn't be repaired. Extremely reliable certified engineers.",
    date: "Verified Repair"
  },
  {
    id: "3",
    name: "Ms. Srilaxmi M",
    location: "Secunderabad",
    serviceCategory: "Hard Drive Data Recovery",
    rating: 5,
    comment: "Recovered all my lost project data from a crashed hard disk! Highly recommended repair shop in Secunderabad.",
    date: "Verified Customer"
  }
];

export const FAQ_ITEMS = [
  {
    question: "How long does laptop repair take?",
    answer: "Many standard repairs like screen replacement, RAM upgrades, battery changes, and SSD installations are completed on the same day (often within 1 to 3 hours). Complex chip-level motherboard repairs or physical data recovery usually take 24 to 48 hours depending on diagnostic findings."
  },
  {
    question: "Do you provide laptop pickup and delivery?",
    answer: "Yes, Care Computers offers convenient free pickup and delivery service for laptops across Hyderabad and Secunderabad. You can request a pickup online or call us directly."
  },
  {
    question: "Do you repair all laptop brands?",
    answer: "Yes! We service all major laptop brands including Dell, HP, Lenovo, Apple MacBook, Asus, Acer, Sony VAIO, Samsung, and Toshiba."
  },
  {
    question: "Do you repair MacBooks?",
    answer: "Yes, we specialize in Apple MacBook Air, MacBook Pro, and iMac repairs including Retina screen replacement, logic board chip repair, battery service, keyboard changes, and macOS reinstallation."
  },
  {
    question: "Can you recover data from a failed hard drive?",
    answer: "Yes. We have specialized data recovery capabilities for hard drives that are clicking, unreadable, formatted, or affected by water/physical damage, as well as dead SSDs."
  },
  {
    question: "Do you provide OS installation?",
    answer: "Yes, we provide clean installations and upgrades for licensed Windows 10, Windows 11, and macOS, complete with official device drivers and system optimization."
  },
  {
    question: "Do you repair laptop motherboards?",
    answer: "Yes, our certified engineers perform advanced chip-level motherboard repair, including fixing short circuits, power IC issues, BIOS reprogramming, and micro-soldering."
  },
  {
    question: "Do you use genuine parts?",
    answer: "Yes, Care Computers uses genuine and high-grade OEM components for screen replacements, batteries, keyboards, and internal hardware to ensure original performance and longevity."
  },
  {
    question: "Where is Care Computers located?",
    answer: "We are located at CTC Complex / Chenoy Trade Centre, Parklane, Secunderabad, Telangana 500003, India - the primary computer market hub in Twin Cities."
  },
  {
    question: "How can I book a repair?",
    answer: "You can book a repair by clicking the 'Book a Repair' button on our website, calling us directly at +91 92463 79771, or sending a message on WhatsApp."
  }
];

export const SAMPLE_REPAIR_STATUSES: Record<string, RepairTrackingInfo> = {
  "CARE-8821": {
    repairId: "CARE-8821",
    customerName: "Srinivas K.",
    device: "Dell XPS 15 9500",
    issue: "Motherboard Short Circuit & Battery Swap",
    receivedDate: "2026-08-16",
    estimatedCompletion: "2026-08-17 (Today)",
    currentStepIndex: 3, // Quality Check
    statusNotes: "Chip-level power IC replaced successfully. Undergoing 4-hour thermal stability test."
  },
  "CARE-9014": {
    repairId: "CARE-9014",
    customerName: "Ananya R.",
    device: "MacBook Pro M1 13-inch",
    issue: "Retina Display Replacement",
    receivedDate: "2026-08-17",
    estimatedCompletion: "2026-08-17 (Same Day)",
    currentStepIndex: 2, // Repair In Progress
    statusNotes: "Original Apple panel being fitted by senior engineer."
  },
  "9246379771": {
    repairId: "CARE-7710",
    customerName: "Rajesh Kumar",
    device: "HP Pavilion 15",
    issue: "500GB SSD Upgrade & Thermal Paste",
    receivedDate: "2026-08-17",
    estimatedCompletion: "Ready Now",
    currentStepIndex: 4, // Ready for Pickup / Delivery
    statusNotes: "System clone complete. Speed benchmarked at 3,500 MB/s. Ready for pickup."
  }
};

export const SAMPLE_WARRANTIES: Record<string, WarrantyInfo> = {
  "CARE-8821": {
    refId: "CARE-8821",
    customerName: "Srinivas K.",
    device: "Dell XPS 15 9500",
    serviceProvided: "Motherboard Repair & Battery Replacement",
    serviceDate: "2026-08-17",
    warrantyUntil: "2026-11-17 (90 Days Active)",
    isValid: true,
    notes: "Covers motherboard power line stability and battery charge performance."
  },
  "CARE-7710": {
    refId: "CARE-7710",
    customerName: "Rajesh Kumar",
    device: "HP Pavilion 15",
    serviceProvided: "Crucial 500GB NVMe SSD Upgrade",
    serviceDate: "2026-08-17",
    warrantyUntil: "2029-08-17 (3 Years Active)",
    isValid: true,
    notes: "3-Year hardware warranty backed by Care Computers and manufacturer."
  }
};
