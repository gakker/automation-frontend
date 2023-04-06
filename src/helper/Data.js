import {
  FlashOn,
  Equalizer,
  Dashboard,
  Bolt,
  GraphicEq,
  Star,
  Tune,
  Assessment

} from "@mui/icons-material";

const sideMenu = [
  // {
  //   name: "Rules",
  //   navigator: "/",
  //   icon: FlashOn,
  //   submenu: [
  //     //   {
  //     //     name: "Create Rules",
  //     //     navigator: "/",
  //     //     icon: FlashOn,
  //     //   },
  //   ],
  // },
  {
    name: "Dashboard",
    navigator: "/main-dashboard",
    icon: Dashboard,
    submenu: [],
  },
  {
    name: "Automations",
    navigator: "/create-automation",
    icon: Bolt,
    submenu: [
      {
        name: "Create Automation",
        navigator: "/create-automation",
        icon: FlashOn,
      },
      {
        name: "Existing Automation",
        navigator: "/existing-automation",
        icon: FlashOn,
      },
    ],
  },


  {
    name: "Campaign Center",
    navigator: "/new-campaign",
    icon: GraphicEq,
    submenu: [
      {
        name: "New Campaign",
        navigator: "/new-campaign",
      },
      {
        name: "Existing Campaign",
        navigator: "/existing-campaign",
      },
    ],
  },
  {
    name: "Creative Center",
    navigator: "/new-creative",
    icon: Star,
    submenu: [
      {
        name: "New Creative",
        navigator: "/new-creative",
      },
      {
        name: "Existing Creative",
        navigator: "/existing-creative",
      },
    ],
  },
  {
    name: "Reports",
    navigator: "/reports",
    icon: Assessment,
    submenu: [],
  },
  {
    name: "Control Center",
    navigator: "/newProducts",
    icon: Tune,
    submenu: [
      {
        name: "New Product",
        navigator: "/new-product",
      },
      {
        name: "Existing Products",
        navigator: "/existing-products",
      },
    ],
  },
];

const tableData = [
  {
    uid: 1,
    checked: true,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 2,
    checked: false,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 3,
    checked: false,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
  {
    uid: 4,
    checked: true,
    label: "Student 1",
    creative: "VI-IOS-UGC-Red",
    tag: ["UGC", "CTA 1"],
    impression: "19,29,922",
    spend: "3,859.57",
    cpi: "2.56",
    ctr: "2.39",
  },
];

let facebookSchedule = [
  {
    label: "15 minutes",
  },
  {
    label: "30 minutes",
  },
  {
    label: "60 minutes",
  },
  {
    label: "3 hours",
  },
  {
    label: "6 hours",
  },
  {
    label: "12 hours",
  },
  {
    label: "24 hours",
  },
  {
    label: "36 hours",
  },
  {
    label: "48 hours",
  },
];
let facebookCampaigns = [
  {
    label: "Formula 1 Racing",
    id: 1,
  },
  {
    label: "Butler campaign 01",
    id: 1,
  },
  {
    label: "MyoSport USA campaign 01",
    id: 1,
  },
  {
    label: "MyoSport USA campaign 02",
    id: 1,
  },
  {
    label: "Twinny SWISS campaign 01",
    id: 1,
  },
  {
    label: "Twinny SWISS campaign 02",
    id: 1,
  },
];
let adsData = [
  {
    label: "Formula 1 Racing",
    id: 1,
  },
  {
    label: "Butler Ad 01",
    id: 1,
  },
  {
    label: "MyoSport USA Ad 01",
    id: 1,
  },
  {
    label: "MyoSport USA Ad 02",
    id: 1,
  },
  {
    label: "Twinny SWISS Ad 01",
    id: 1,
  },
  {
    label: "Twinny SWISS Ad 02",
    id: 1,
  },
];
let adSetData = [
  {
    label: "Formula 1 Racing Adset",
    id: 1,
  },
  {
    label: "Butler Adset 01",
    id: 1,
  },
  {
    label: "MyoSport USA Adset 01",
    id: 1,
  },
  {
    label: "MyoSport USA Adset 02",
    id: 1,
  },
  {
    label: "Twinny SWISS Adset 01",
    id: 1,
  },
  {
    label: "Twinny SWISS Adset 02",
    id: 1,
  },
];
let facebookTags = [
  {
    label: "Games",
    id: 1,
  },
  {
    label: "Mobile Application",
    id: 1,
  },
  {
    label: "Web Application",
    id: 1,
  },
  {
    label: "iOS Application",
    id: 1,
  },
];

let facebookParameters = [
  { label: 'Time Less Than', group: 'General' },
  { label: 'Time Greater Than', group: 'General' },
  { label: 'Hours Since Creation', group: 'General' },
  { label: 'Daily Budget', group: 'General' },
  { label: 'Lifetime Budget', group: 'General' },
  { label: 'Ad Groups in Campaign', group: 'General' },
  { label: 'Active Ad Groups in Campaign', group: 'General' },
 { label: '2-Second Video Views', group: 'Video Play' },
  { label: '6-Second Video Views', group: 'Video Play' },
  { label: 'Video Average Watch Time Per Person', group: 'Video Play' },
  {
    label: 'Video Average Watch Time Per Video View',
    group: 'Video Play'
  },
  { label: 'Video Views', group: 'Video Play' },
  { label: 'Video Views at 100%', group: 'Video Play' },
  { label: 'Video Views at 25%', group: 'Video Play' },
  { label: 'Video Views at 50%', group: 'Video Play' },
  { label: 'Video Views at 75%', group: 'Video Play' },
  { label: 'Billing Rate (%)', group: 'Page Event' },
  { label: 'Add to Cart', group: 'Page Event' },
  { label: 'Add to Cart Cost', group: 'Page Event' },
  { label: 'Add to Cart Rate (%)', group: 'Page Event' },
  { label: 'Value per Add to Cart', group: 'Page Event' },
  { label: 'Total Add to Cart Value', group: 'Page Event' },
  { label: 'Button Click', group: 'Page Event' },
  { label: 'Button Click Cost', group: 'Page Event' },
  { label: 'Button Click Rate (%)', group: 'Page Event' },
  { label: 'Value per Button Click', group: 'Page Event' },
  { label: 'Total Button Click Value', group: 'Page Event' },
  { label: 'Complete Payment ROAS', group: 'Page Event' },
  { label: 'Complete Payment', group: 'Page Event' },
  { label: 'Complete Payment Cost', group: 'Page Event' },
  { label: 'Complete Payment Rate (%)', group: 'Page Event' },
  { label: 'Value per Complete Payment', group: 'Page Event' },
  { label: 'Total Complete Payment Value', group: 'Page Event' },
  { label: 'Online Consultation Rate (%)', group: 'Page Event' },
  { label: 'Page Browse', group: 'Page Event' },
  { label: 'Page Browse Cost', group: 'Page Event' },
  { label: 'Page Browse Rate (%)', group: 'Page Event' },
  { label: 'Value per Page Browse', group: 'Page Event' },
  { label: 'Total Page Browse Value', group: 'Page Event' },
  { label: 'Search Rate (%)', group: 'Page Event' },
  { label: 'Initiate Checkout', group: 'Page Event' },
  { label: 'Total User Registration Value', group: 'Page Event' },
  { label: 'Add Billing Cost', group: 'Page Event' },
  { label: 'Form Submission Cost', group: 'Page Event' },
  { label: 'Initiate Checkout Cost', group: 'Page Event' },
  { label: 'Search Cost', group: 'Page Event' },
  { label: 'User Registration Cost', group: 'Page Event' },
  { label: 'Form Submission Rate (%)', group: 'Page Event' },
  { label: 'Initiate Checkout Rate (%)', group: 'Page Event' },
  { label: 'Place an Order Rate (%)', group: 'Page Event' },
  { label: 'Add Billing', group: 'Page Event' },
  { label: 'Total Add Billing Value', group: 'Page Event' },
  { label: 'Form Submission', group: 'Page Event' },
  { label: 'Total Form Submission Value', group: 'Page Event' },
  { label: 'Total Initiate Checkout Value', group: 'Page Event' },
  { label: 'Online Consultation', group: 'Page Event' },
  { label: 'Online Consultation Cost', group: 'Page Event' },
  { label: 'Total Online Consultation Value', group: 'Page Event' },
  { label: 'Place an Order', group: 'Page Event' },
  { label: 'Place an Order Cost', group: 'Page Event' },
  { label: 'Total Place an Order Value', group: 'Page Event' },
  { label: 'Product Details Page Browse', group: 'Page Event' },
  { label: 'Product Details Page Browse Cost', group: 'Page Event' },
  {
    label: 'Product Details Page Browse Rate (%)',
    group: 'Page Event'
  },
  {
    label: 'Value per Product Details Page Browse',
    group: 'Page Event'
  },
  {
    label: 'Total Product Details Page Browse Value',
    group: 'Page Event'
  },
  { label: 'Search', group: 'Page Event' },
  { label: 'Total Search Value', group: 'Page Event' },
  { label: 'User Registration', group: 'Page Event' },
  { label: 'User Registration Rate (%)', group: 'Page Event' },
  { label: 'Value per Add Billing', group: 'Page Event' },
  { label: 'Value per Form Submission', group: 'Page Event' },
  { label: 'Value per Initiate Checkout', group: 'Page Event' },
  { label: 'Value per Online Consultation', group: 'Page Event' },
  { label: 'Value per Place an Order', group: 'Page Event' },
  { label: 'Value per Search', group: 'Page Event' },
  { label: 'Value per User Registration', group: 'Page Event' },
  { label: 'Download Button Click', group: 'Page Event' },
  { label: 'Download Button Click Cost', group: 'Page Event' },
  { label: 'Download Button Click Cost', group: 'Page Event' },
  { label: 'Download Button Click Rate (%)', group: 'Page Event' },
  { label: 'Value per Download Button Click', group: 'Page Event' },
  { label: 'Total Download Button Click Value', group: 'Page Event' },
  { label: 'Total Add to Wishlist', group: 'Page Event' },
  { label: 'Add To Wishlist Cost', group: 'Page Event' },
  { label: 'Add To Wishlist Rate', group: 'Page Event' },
  { label: 'Value per Add To Wishlist', group: 'Page Event' },
  { label: 'Total Add To Wishlist Value', group: 'Page Event' },
  { label: 'Total Subscribe', group: 'Page Event' },
  { label: 'Subscribe Cost', group: 'Page Event' },
  { label: 'Subscribe Rate', group: 'Page Event' },
  { label: 'Value per Subscribe', group: 'Page Event' },
  { label: 'Total Subscribe Value', group: 'Page Event' },
 { label: 'Real-time App Install', group: 'In-App Event' },
  { label: 'Cost per Real-time App Install', group: 'In-App Event' },
  { label: 'App Install', group: 'In-App Event' },
  { label: 'Add Payment Info Rate (%)', group: 'In-App Event' },
  { label: 'Add to Wishlist Rate (%)', group: 'In-App Event' },
  { label: 'Cost per Achieve Level', group: 'In-App Event' },
  { label: 'Cost per Add to Cart', group: 'In-App Event' },
  { label: 'Cost per Add to Wishlist', group: 'In-App Event' },
  { label: 'Cost per App Install', group: 'In-App Event' },
  { label: 'Cost per Checkout', group: 'In-App Event' },
  { label: 'Cost per Complete Tutorial', group: 'In-App Event' },
  { label: 'Cost per Create Group', group: 'In-App Event' },
  { label: 'Cost per Create Role', group: 'In-App Event' },
  { label: 'Cost per Generate Lead', group: 'In-App Event' },
  { label: 'Cost per In-App Ad Click', group: 'In-App Event' },
  { label: 'Cost per In-App Ad Impr', group: 'In-App Event' },
  { label: 'Cost per Join Group', group: 'In-App Event' },
  { label: 'Cost per Launch App', group: 'In-App Event' },
  { label: 'Cost per Loan Apply', group: 'In-App Event' },
  { label: 'Cost per Loan Approval', group: 'In-App Event' },
  { label: 'Cost per Loan Disbursement', group: 'In-App Event' },
  { label: 'Cost per Login', group: 'In-App Event' },
  { label: 'Cost per Purchase', group: 'In-App Event' },
  { label: 'Cost per Rate', group: 'In-App Event' },
  { label: 'Cost per Registration', group: 'In-App Event' },
  { label: 'Cost per Search', group: 'In-App Event' },
  { label: 'Cost per Spend Credit', group: 'In-App Event' },
  { label: 'Cost per Start Trial', group: 'In-App Event' },
  { label: 'Cost per Subscribe', group: 'In-App Event' },
  { label: 'Cost per Total Add Payment Info', group: 'In-App Event' },
  { label: 'Cost per Unique Add Payment Info', group: 'In-App Event' },
  { label: 'Cost per Unique Add to Cart', group: 'In-App Event' },
  { label: 'Cost per Unique Add to Wishlist', group: 'In-App Event' },
  { label: 'Cost per Unique Checkout', group: 'In-App Event' },
  { label: 'Cost per Unique Complete Tutorial', group: 'In-App Event' },
  { label: 'Complete Tutorial Rate (%)', group: 'In-App Event' },
  { label: 'Cost per Unique Create Group', group: 'In-App Event' },
  { label: 'Cost per Unique Create Role', group: 'In-App Event' },
  { label: 'Cost per Unique Generate Lead', group: 'In-App Event' },
  { label: 'Cost per Unique In-App Ad Click', group: 'In-App Event' },
  { label: 'Cost per Unique In-App Ad Impr', group: 'In-App Event' },
  { label: 'Cost per Unique Join Group', group: 'In-App Event' },
  { label: 'Cost per Unique Launch App', group: 'In-App Event' },
  { label: 'Cost per Unique Loan Apply', group: 'In-App Event' },
  { label: 'Cost per Unique Loan Approval', group: 'In-App Event' },
  { label: 'Cost per Unique Loan Disbursement', group: 'In-App Event' },
  { label: 'Cost per Unique Login', group: 'In-App Event' },
  { label: 'Cost per Unique Purchase', group: 'In-App Event' },
  { label: 'Cost per Unique Rate', group: 'In-App Event' },
  { label: 'Cost per Unique Registration', group: 'In-App Event' },
  { label: 'Cost per Unique Search', group: 'In-App Event' },
  { label: 'Cost per Unique Spend Credit', group: 'In-App Event' },
  { label: 'Cost per Unique Start Trial', group: 'In-App Event' },
  { label: 'Cost per Unique Subscribe', group: 'In-App Event' },
  { label: 'Cost per Unique Unlock Achievement',group: 'In-App Event'},
  { label: 'Cost per Unique View Content', group: 'In-App Event' },
  { label: 'Cost per Unlock Achievement', group: 'In-App Event' },
  { label: 'Cost per View Content', group: 'In-App Event' },
  { label: 'Total Achieve Level', group: 'In-App Event' },
  { label: 'Value per Achieve Level', group: 'In-App Event' },
  { label: 'Total Achieve Level Value', group: 'In-App Event' },
  { label: 'Total Add Payment Info', group: 'In-App Event' },
  { label: 'Download Button Click Cost', group: 'In-App Event' },
  { label: 'Download Button Click Rate (%)', group: 'In-App Event' },
  { label: 'Value per Download Button Click', group: 'In-App Event' },
  { label: 'Total Download Button Click Value', group: 'In-App Event' },
  { label: 'Total Add to Wishlist', group: 'In-App Event' },
  { label: 'Add To Wishlist Cost', group: 'In-App Event' },
  { label: 'Add To Wishlist Rate', group: 'In-App Event' },
  { label: 'Value per Add To Wishlist', group: 'In-App Event' },
  { label: 'Total Add To Wishlist Value', group: 'In-App Event' },
  { label: 'Total Subscribe', group: 'In-App Event' },
  { label: 'Subscribe Cost', group: 'In-App Event' },
  { label: 'Subscribe Rate', group: 'In-App Event' },
  { label: 'Value per Subscribe', group: 'In-App Event' },
  { label: 'Total Subscribe Value', group: 'In-App Event' },
  { label: 'Total Unlock Achievement', group: 'In-App Event' },
  { label: 'Value per Unlock Achievement', group: 'In-App Event' },
  { label: 'Total View Content', group: 'In-App Event' },
  { label: 'Value per View Content', group: 'In-App Event' },
  { label: 'Total View Content Value', group: 'In-App Event' },
  { label: 'Unique Achieve Level', group: 'In-App Event' },
  { label: 'Cost per Unique Achieve Level', group: 'In-App Event' },
  { label: 'Achieve Level Rate (%)', group: 'In-App Event' },
  { label: 'Unique Add Payment Info', group: 'In-App Event' },
  { label: 'Unique Add to Cart', group: 'In-App Event' },
  { label: 'Unique Add to Cart Rate (%)', group: 'In-App Event' },
  { label: 'Unique Add to Wishlist', group: 'In-App Event' },
  { label: 'Unique Checkout', group: 'In-App Event' },
  { label: 'Unique Checkout Rate (%)', group: 'In-App Event' },
  { label: 'Unique Complete Tutorial', group: 'In-App Event' },
  { label: 'Unique Create Group', group: 'In-App Event' },
  { label: 'Create Group Rate (%)', group: 'In-App Event' },
  { label: 'Unique Create Role', group: 'In-App Event' },
  { label: 'Create Role Rate (%)', group: 'In-App Event' },
  { label: 'Unique Day 2 Retention', group: 'In-App Event' },
  { label: 'Cost per Unique Day 2 Retention', group: 'In-App Event' },
  { label: 'Day 2 Retention Rate (%)', group: 'In-App Event' },
  { label: 'Day 2 Retention (Total No.)', group: 'In-App Event' },
  { label: 'Cost per Day 2 Retention', group: 'In-App Event' },
  { label: 'Unique Generate Lead', group: 'In-App Event' },
  { label: 'Generate Lead Rate (%)', group: 'In-App Event' },
  { label: 'Unique In-App Ad Click', group: 'In-App Event' },
  { label: 'In App Ad Click Rate (%)', group: 'In-App Event' },
  { label: 'Unique In-App Ad Impr', group: 'In-App Event' },
  { label: 'In App Ad Impr Rate (%)', group: 'In-App Event' },
  { label: 'Unique Join Group', group: 'In-App Event' },
  { label: 'Join Group Rate (%)', group: 'In-App Event' },
  { label: 'Unique Launch App', group: 'In-App Event' },
  { label: 'Launch App Rate (%)', group: 'In-App Event' },
  { label: 'Unique Loan Apply', group: 'In-App Event' },
  { label: 'Loan Apply Rate (%)', group: 'In-App Event' },
  { label: 'Unique Loan Approval', group: 'In-App Event' },
  { label: 'Loan Approval Rate (%)', group: 'In-App Event' },
  { label: 'Unique Loan Disbursement', group: 'In-App Event' },
  { label: 'Loan Disbursement Rate (%)', group: 'In-App Event' },
  { label: 'Login Rate (%)', group: 'In-App Event' },
  { label: 'Unique Purchase', group: 'In-App Event' },
  { label: 'Unique Purchase Rate (%)', group: 'In-App Event' },
  { label: 'Unique Rate', group: 'In-App Event' },
  { label: 'Rate Rate (%)', group: 'In-App Event' },
  { label: 'Unique Registration', group: 'In-App Event' },
  { label: 'Unique Registration', group: 'In-App Event' },
  { label: 'Unique Registration Rate (%)', group: 'In-App Event' },
  { label: 'Unique Search', group: 'In-App Event' },
  { label: 'Search Rate (%)', group: 'In-App Event' },
  { label: 'Unique Spend Credit', group: 'In-App Event' },
  { label: 'Spend Credit Rate (%)', group: 'In-App Event' },
  { label: 'Unique Start Trial', group: 'In-App Event' },
  { label: 'Start Trial Rate (%)', group: 'In-App Event' },
  { label: 'Unique Subscribe', group: 'In-App Event' },
  { label: 'Subscribe Rate (%)', group: 'In-App Event' },
  { label: 'Unique Unlock Achievement', group: 'In-App Event' },
  { label: 'Unlock Achievement Rate (%)', group: 'In-App Event' },
  { label: 'Unique View Content', group: 'In-App Event' },
  { label: 'View Content Rate (%)', group: 'In-App Event' },
  { label: 'Clicks', group: 'Basic Data' },
  { label: 'Conversion', group: 'Basic Data' },
  { label: 'Cost per 1,000 People Reached', group: 'Basic Data' },
  { label: 'Cost Per Result', group: 'Basic Data' },
  { label: 'Secondary Goal Result', group: 'Basic Data' },
  { label: 'Cost per Secondary Goal Result', group: 'Basic Data' },
  { label: 'Secondary Goal Result Rate (%)', group: 'Basic Data' },
  { label: 'CVR (%)', group: 'Basic Data' },
  { label: 'Result', group: 'Basic Data' },
  { label: 'Result Rate (%)', group: 'Basic Data' },
  { label: 'CPA', group: 'Basic Data' },
  { label: 'CPC', group: 'Basic Data' },
  { label: 'CPM', group: 'Basic Data' },
  { label: 'CTR (%)', group: 'Basic Data' },
  { label: 'Frequency', group: 'Basic Data' },
  { label: 'Impressions', group: 'Basic Data' },
  { label: 'Reach', group: 'Basic Data' },
  { label: 'Real-time Conversions', group: 'Basic Data' },
  { label: 'Real-time Cost Per Result', group: 'Basic Data' },
  { label: 'Real-time CPA', group: 'Basic Data' },
  { label: 'Real-time CVR (%)', group: 'Basic Data' },
  { label: 'Real-time Result', group: 'Basic Data' },
  { label: 'Real-time Result Rate (%)', group: 'Basic Data' },
  { label: 'Total Cost', group: 'Basic Data' },
  { label: 'Cost Charged by Cash', group: 'Basic Data' },
  { label: 'Cost Charged by Voucher', group: 'Basic Data' },
  { label: 'Cost per CTA Conversion', group: 'Attribution' },
  { label: 'Cost per CTA Purchase', group: 'Attribution' },
  { label: 'Cost per CTA Registration', group: 'Attribution' },
  { label: 'Cost per VTA Conversion', group: 'Attribution' },
  { label: 'Cost per VTA Purchase', group: 'Attribution' },
  { label: 'Cost per VTA Registration', group: 'Attribution' },
  { label: 'CTA App Install', group: 'Attribution' },
  { label: 'CTA Conversions', group: 'Attribution' },
  { label: 'CTA Purchase', group: 'Attribution' },
  { label: 'CTA Registration', group: 'Attribution' },
  { label: 'VTA App Install', group: 'Attribution' },
  { label: 'VTA Conversions', group: 'Attribution' },
  { label: 'VTA Purchase', group: 'Attribution' },
  { label: 'VTA Registration', group: 'Attribution' },
  { label: 'Profile Visit', group: 'Engagement' },
  { label: 'Profile Visit Rate', group: 'Engagement' },
  { label: 'Paid Likes', group: 'Engagement' },
  { label: 'Paid Comments', group: 'Engagement' },
  { label: 'Paid Shares', group: 'Engagement' },
  { label: 'Paid Follows', group: 'Engagement' },
  { label: 'Clicks on music disc', group: 'Engagement' }

]

// let facebookParameters = [
//   {
//     label: "Impressions",
//     id: 1,
//   },
//   {
//     label: "Reach",
//     id: 1,
//   },
//   {
//     label: "Clicks",
//     id: 1,
//   },
//   {
//     label: "Spend",
//     id: 1,
//   },
//   {
//     label: "Cost Per Result",
//     id: 1,
//   },
//   {
//     label: "CTR%",
//     id: 1,
//   },
//   {
//     label: "Frequency",
//     id: 1,
//   },
// ];
let considerDataForm = [
  {
    label: "Today",
  },
  {
    label: "Yesterday",
  },
  {
    label: "Yesterday and Today",
  },
  {
    label: "Last 3 days",
  },
  {
    label: "Last 3 days (Incl. today)",
  },
  {
    label: "Last 7 days",
  },
  {
    label: "Last 7 days (Incl. today)",
  },
  {
    label: "Last 14 days",
  },
  {
    label: "Last 14 days (Incl. today)",
  },
  {
    label: "Custom",
  },
];

let timeSpan = [
  {
    name: "Only Once",
    value: "ONLY_ONCE"
  },
  {
    name: "one time in 24 hour",
    value: "ONCE_IN_24_H"
  },
  {
    name: "one in 48 hour",
    value: "ONCE_IN_48_H"
  },
  {
    name: "one in 1 week",
    value: "ONCE_IN_1_W"
  },
  {
    name: "Custom",
    value: "CUSTOM"
  }
];

let comparisonValues = [
  {
    label: "> GREATER",
  },
  {
    label: "< LESS ",
  },
  {
    label: "<= LESS THAN or EQUAL ",
  },
  {
    label: ">= Greater THAN or EQUAL ",
  },
  {
    label: "= EQUAL",
  },
  {
    label: "!= DOES NOT EQUAL ",
  },
];

let matric = [
  {
    label: "> General",
  },
  {
    label: "> Performance ",
  },
  {
    label: "> Viewability",
  },
  {
    label: "> Conversions ",
  },
  {
    label: "> Atrribution",
  },
  {
    label: "> Competitive",
  },
  {
    label: "> Google Analytics",
  },
  {
    label: "> Call details",
  },
  {
    label: "> Gmail",
  },
];

let excludeDays = [
  {
    label: "Today",
  },
  {
    label: "Yesterday",
  },
  {
    label: "This week",
  },
  {
    label: "Last week",
  },
  {
    label: "This month",
  },
  {
    label: "Last month",
  },
  {
    label: "Custom",
  },
];

let bidStrategy = [
  {
    label: "Maximize conversion value",
  },
  {
    label: "Maximize clicks",
  },
  {
    label: "Maximize conversions",
  },
  {
    label: "Manual CPC",
  },
  {
    label: "Viewable CPM",
  },
  {
    label: "Target impression share",
  },
];
let matrixTime = [
  {
    label: "Today",
  },
  {
    label: "Yesterday",
  },
  {
    label: "Today and yesterday",
  },
  {
    label: "Last 3 days",
  },
  {
    label: "Last 3 days (Incl. today)",
  },
  {
    label: "Last 7 days",
  },
  {
    label: "Last 7 days (Incl. today)",
  },
  {
    label: "Last 14 days",
  },
  {
    label: "Last 14 days (Incl. today)",
  },
  {
    label: "Last 30 days",
  },
  {
    label: "Last 30 days (Incl. today)",
  },
  {
    label: "Last week",
  },
  {
    label: "Last business week",
  },
  {
    label: "Last month",
  },
  {
    label: "All time",
  },
  {
    label: "This week (Sun to Today)",
  },
  {
    label: "This week (Mon to Today)",
  },
  {
    label: "Last week (Sun to Sat)",
  },
  {
    label: "Last week (Mon to Sun)",
  },

];


let tabData = [
  {
    label: "Campaign",
    value: "campaign",
  },
  {
    label: "Ad sets",
    value: "adsets",
  },
  {
    label: "Ads",
    value: "ads",
  },
  {
    label: "Review",
    value: "review",
  },
]

export {
  excludeDays,
  bidStrategy,
  considerDataForm,
  comparisonValues,
  facebookParameters,
  facebookTags,
  sideMenu,
  tableData,
  facebookSchedule,
  facebookCampaigns,
  adSetData,
  adsData,
  timeSpan,
  matric,
  matrixTime,
  tabData
};
