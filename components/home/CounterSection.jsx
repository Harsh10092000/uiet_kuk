 "use client";
import { useEffect, useRef, useState } from "react";

const counters = [
  { value: 2000, suffix: "+", label: "Happy Students" },
  { value: 70, suffix: "+", label: "Faculty" },
  { value: 100, suffix: "+", label: "Student Placement" },
  { value: 1000, suffix: "+", label: "Visitors" },
];

const CounterSection = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));
  const hasAnimatedRef = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 1500;
    const startTimestamp = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTimestamp) / duration, 1);
      setCounts(
        counters.map((counter) => Math.floor(counter.value * progress))
      );
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCounts(counters.map((counter) => counter.value));
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="counter-block" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {counters.map(({ label, suffix }, index) => (
            <div key={label} className="col-md-3">
              <div className="counter-box">
                <strong>
                  {counts[index].toLocaleString()}
                  {suffix}
                </strong>
                <h4>{label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

