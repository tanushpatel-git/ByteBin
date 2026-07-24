"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLoader } from "./useLoader";
import { Preloader } from "./Preloader";
import { LazyMotion, domAnimation } from "framer-motion";

interface LoaderContextType {
  isLoaderComplete: boolean;
  shouldUnmountLoader: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function useLoaderContext() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoaderContext must be used within a LoaderProvider");
  }
  return context;
}

interface LoaderProviderProps {
  children: ReactNode;
}

export function LoaderProvider({ children }: LoaderProviderProps) {
  const loaderState = useLoader(3500); // 3.5s total duration

  return (
    <LoaderContext.Provider value={loaderState}>
      <LazyMotion features={domAnimation}>
        <Preloader />
        <div 
          className="transition-opacity duration-700 ease-out"
          style={{ opacity: loaderState.isLoaderComplete ? 1 : 0 }}
        >
          {children}
        </div>
      </LazyMotion>
    </LoaderContext.Provider>
  );
}
