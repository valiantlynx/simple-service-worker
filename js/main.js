
const registerServiceWorker = async () => {
    // make sure sw are supported
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/simple-service-worker/sw.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  
  // …
  
  registerServiceWorker();
  
