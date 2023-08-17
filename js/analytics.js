<><script>
  // Function to check if the current page is one of the specified pages
  function isTrackedPage() {
    // Replace the following array with the actual URLs of the pages you want to track
  }
    // Replace the following array with the actual URLs of the pages you want to track
  var trackedPages = ['/home-url', '/research-url', '/about-us-url'];
  return trackedPages.includes(window.location.pathname);
  {"}"}

  // Function to load Google Analytics script
  function loadGoogleAnalytics() {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || []};
  function gtag() {window.dataLayer.push(arguments)};
  {"}"}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your GA Measurement ID
  {"}"}

  // Load Google Analytics script only on the specified pages
  if (isTrackedPage()) {loadGoogleAnalytics()};
  {"}"}
</script><script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script></>