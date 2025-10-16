export function animateFeature(featureName: string, style: 'bold' | 'italic' = 'bold') {
    if (style === 'bold') {
      console.log(`\x1b[1m${featureName}\x1b[0m`);
    } else if (style === 'italic') {
      console.log(`\x1b[3m${featureName}\x1b[0m`);
    }
  }