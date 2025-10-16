import { animateFeature } from './animation';
const snacks: string[] = ['cookies', 'fruit', 'corndogs']

export function printSnacks() {
    animateFeature('Party! Party! Party! - Snacks Time', 'bold');
    console.log('Here are your snacks:');
    for (const snack of snacks) {
        animateFeature(snack, 'italic');
    }
}
//little comment 

const snacks2: string[] = ['cookies', 'fruit', 'corndogs','chips','soda']
for (const snack of snacks) {
    console.log(snack);
}
