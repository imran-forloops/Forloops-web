"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        setIsLoaded(true);
        preloader.style.display = "none";
      }, 500);
    }
  }, []);

  return (
    <div id="preloader">
      {!isLoaded && (
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Preloader;
