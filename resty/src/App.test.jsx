import {expect , test} from 'vitest';
import {render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('render', () => {
const wrapper = render (<App/>)
expect(wrapper).toBeTruthy()

})