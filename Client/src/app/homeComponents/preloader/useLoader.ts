"use client";

import { useState, useEffect } from "react";

export function useLoader(durationMs: number = 3000) {
  const isEnabled = durationMs > 0;
  const [isLoaderComplete, setIsLoaderComplete] = useState(!isEnabled);
  const [shouldUnmountLoader, setShouldUnmountLoader] = useState(!isEnabled);
  
  useEffect(() => {
    if (!isEnabled) return;
    // Lock scroll while loading
    if (!isLoaderComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoaderComplete, isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    // Start transition
    const transitionTimer = setTimeout(() => {
      setIsLoaderComplete(true);
    }, durationMs);
    
    // Fully unmount after transition
    const unmountTimer = setTimeout(() => {
      setShouldUnmountLoader(true);
    }, durationMs + 1000); // 1 second for the fade out

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(unmountTimer);
    };
  }, [durationMs, isEnabled]);

  return { isLoaderComplete, shouldUnmountLoader };
}

