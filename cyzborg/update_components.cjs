const fs = require('fs');

const paths = {
  Squat: fs.readFileSync('Squat.txt', 'utf8').trim(),
  Running: fs.readFileSync('Running.txt', 'utf8').trim(),
  Deadlift: fs.readFileSync('Deadlift.txt', 'utf8').trim(),
  Sprint: fs.readFileSync('Sprint.txt', 'utf8').trim(),
  Pullup: fs.readFileSync('Pullup.txt', 'utf8').trim(),
  TireFlip: fs.readFileSync('TireFlip.txt', 'utf8').trim(),
  Hiking: fs.readFileSync('Hiking.txt', 'utf8').trim(),
  JumpRope: fs.readFileSync('JumpRope.txt', 'utf8').trim(),
};

let content = `import React from 'react';

// Common styling classes for the SVGs
const svgClass = "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,174,239,0.8)] transition-all duration-300 cursor-default";

// Placeholders for the 8 custom silhouettes
// Order: Squat, Running, Deadlift, Sprint, Pull-up, Tire Flip, Hiking, Jump Rope

export const SquatSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Squat}" />
  </svg>
);

export const RunningSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Running}" />
  </svg>
);

export const DeadliftSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Deadlift}" />
  </svg>
);

export const SprintSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Sprint}" />
  </svg>
);

export const PullupSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Pullup}" />
  </svg>
);

export const TireFlipSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.TireFlip}" />
  </svg>
);

export const HikingSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.Hiking}" />
  </svg>
);

export const JumpRopeSilhouette = () => (
  <svg viewBox="0 0 380 449" className={\`text-white \${svgClass}\`}>
    <path fill="currentColor" d="${paths.JumpRope}" />
  </svg>
);
`;

fs.writeFileSync('components/ui/CyborgWorkouts.tsx', content);
console.log('Updated CyborgWorkouts.tsx');
