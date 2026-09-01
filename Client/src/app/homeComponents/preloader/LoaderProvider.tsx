"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
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
    return { isLoaderComplete: true, shouldUnmountLoader: true };
  }
  return context;
}

interface LoaderProviderProps {
  children: ReactNode;
}

export function LoaderProvider({ children }: LoaderProviderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const loaderState = useLoader(isHomePage ? 3500 : 0);

  if (!isHomePage) {
    return <>{children}</>;
  }

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

