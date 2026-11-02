/* =====================================================================
   SITE SETTINGS
   This is the only file you need to edit for links, forms and prices.
   Leave a value as "" and the site uses the fallback described beside it.
   ===================================================================== */
window.SITE = {
  email: "connect.ishtiak@gmail.com",

  // Menu links that open other websites. Empty = the menu item is hidden.
  productUrl: "https://ishtiakalam.gumroad.com/",       // Digital Product
  githubUrl: "https://github.com/IshtiakAlam",
  blogUrl: "https://medium.com/@ishtiak.csedu",
  testimonialsUrl: "https://www.linkedin.com/in/ishtiakalam/details/recommendations/",

  // Cal.com or Calendly link for the free intro call.
  // Empty = the "Request an intro call" buttons go to the contact form.
  bookingUrl: "",

  // How contact form messages reach you:
  // 1. formspreeId set (the part after formspree.io/f/)  -> Formspree
  // 2. otherwise, useFormSubmit true                     -> FormSubmit, straight to your email.
  //    The first message triggers an "Activate form" email from FormSubmit; click it once.
  // 3. both off                                          -> the visitor's own email app opens
  formspreeId: "",
  useFormSubmit: true,

  // Line next to the dot in the hero.
  availability: "Taking on select consulting projects",

  // Set to true once github.com/ishtiakalam/fx-rates-lakehouse is public.
  fxRepoPublic: false,

  // Starting prices shown under each consulting offer, e.g. "From USD 2,500". Empty = hidden.
  prices: {
    healthCheck: "",
    semanticLayer: "",
    migration: "",
    fractional: "",
    session: ""
  },

  // Tableau Public dashboards shown as thumbnails. Empty list = section hidden.
  // image: right-click the dashboard preview on Tableau Public and copy the image address.
  dashboards: [
    // { title: "Telecom churn cohorts", url: "https://public.tableau.com/app/profile/ishtiak.alam/viz/...", image: "https://public.tableau.com/static/images/..." }
  ],

  // Real recommendations only. The on-page section stays hidden while this is empty.
  testimonials: [
    // { quote: "Ishtiak rebuilt our reporting...", name: "Full Name", role: "Head of Finance, Company" }
  ],

  // Visitor analytics with GoatCounter (free, no cookies). Put your code here,
  // e.g. "ishtiakalam" if your dashboard is ishtiakalam.goatcounter.com. Empty = off.
  goatcounter: ""
};
