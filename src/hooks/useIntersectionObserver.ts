import { useEffect, useRef, useState, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

// Simple hook that returns a ref and whether the element is visible
export default function useIntersectionObserver<T extends Element = Element>(options: Options = { threshold: 0.2 }) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.2, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            observer.disconnect();
          }
        } else if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      });
    }, { threshold, root, rootMargin });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return { ref, isVisible } as { ref: RefObject<T>; isVisible: boolean };
}
