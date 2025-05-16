
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function autoRotateCarousel(api: any, interval: number = 5000): () => void {
  const intervalId = setInterval(() => {
    api?.scrollNext();
  }, interval);
  
  return () => clearInterval(intervalId);
}

// Add a new utility function to handle swipe
export function handleCarouselSwipe(api: any, direction: 'left' | 'right') {
  if (!api) return;
  
  if (direction === 'left') {
    api.scrollNext();
  } else {
    api.scrollPrev();
  }
}
