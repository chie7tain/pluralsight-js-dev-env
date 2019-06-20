import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.08');
console.log(`I would pay ${courseValue} for this awesome course yayyy`); // eslint-disable-line no-console