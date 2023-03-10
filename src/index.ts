import './index.css';
import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn')!;
const tooltip = document.querySelector<HTMLElement>('#tooltip')!;

createPopper(popcorn, tooltip, {
    placement: 'top'
});