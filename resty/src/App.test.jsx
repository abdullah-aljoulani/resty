import {expect , test, describe} from 'vitest';
import {render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


describe('testing', ()=> {

test('render', () => {
const wrapper = render (<App/>)
expect(wrapper).toBeTruthy()

    const h1 = wrapper.container.querySelector('h1')
    expect(h1 ?.textContent).toBe('RESTy')

})
})