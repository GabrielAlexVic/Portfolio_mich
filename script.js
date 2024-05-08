function toggleSidebarClass() {
    let screenWidth = window.innerWidth;
    let offCanvas = document.getElementById("offCanvas");
    let isSmallScreen = screenWidth < 992;

    offCanvas.classList.toggle("offCanvasBackground", isSmallScreen);
  }

  window.addEventListener("resize", toggleSidebarClass);
  window.addEventListener("load", toggleSidebarClass);