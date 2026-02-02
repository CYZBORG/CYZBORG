import React from 'react';

const Origin: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight tracking-wide mb-6">
            CYZBORG — <br className="hidden md:block" />
            The Augmented Athlete
          </h1>
          <div className="w-24 h-1 bg-cyzborg-blue"></div>
        </header>

        <article className="space-y-16 font-sans text-lg md:text-xl text-neutral-400 leading-relaxed">
          
          {/* Intro Section */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-neutral-200 font-medium leading-normal">
              CYZBORG was created from a simple truth: modern athletes already train with technology.
            </p>
            <p>
              Music drives intensity. Phones, watches, and bands track performance. Headphones sharpen focus. Cameras record form, progress, and discipline. Workouts are measured, optimized, shared, and refined.
            </p>
            <p>
              Technology enhances the process.<br />
              <span className="text-white font-bold">The athlete does the work.</span>
            </p>
          </div>

          {/* Already Augmented */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-2">Already Augmented</h2>
            <p>
              Step into any gym, trail, or track.
            </p>
            <p>
              Athletes train with smartwatches measuring heart rate and distance. Phones log sessions and music. Headphones lock in rhythm. Cameras analyze form and broadcast training to the world.
            </p>
            <p>
              Gym goers, runners, outdoor athletes, and fitness creators aren’t becoming cyborgs.<br />
              <span className="text-white font-bold">They already are.</span>
            </p>
          </section>

          {/* The Augmented Athlete */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-2">The Augmented Athlete</h2>
            <p>
              Work hard. Don’t stop. Refine the system.
            </p>
            <p>
              The human body adapts through repetition, stress, and recovery. Technology doesn’t replace that process — it exposes it. Data reveals output. Consistency drives evolution.
            </p>
            <p>
              Progress isn’t motivation.<br />
              <span className="text-white font-bold">Progress is measured.</span>
            </p>
          </section>

          {/* What CYZBORG Builds */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-2">What CYZBORG Builds</h2>
            <p>
              CYZBORG is a performance fitness brand shaped by modern training culture — where discipline, data, and physical effort merge.
            </p>
            <p>
              Apparel and visual systems are designed for athletes who train with intent, track their work, and continuously improve the system.
            </p>
          </section>

          {/* The Origin */}
          <section className="space-y-4 pt-6 border-l-2 border-cyzborg-orange pl-6">
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-2">The Origin</h2>
            <div className="space-y-2">
              <p>People exercise.</p>
              <p>People train with technology.</p>
              <p className="text-white font-bold text-xl md:text-2xl mt-4 block">That combination created CYZBORG.</p>
            </div>
          </section>

        </article>
      </div>
    </section>
  );
};

export default Origin;