import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

// import Chield from './Chield';

// describe('<Chield />', ()=>{

// 	it('Comp', () => {
// 	let some = shallow(<Chield title="mockTitle" url="mockUrl" />);
// 	expect(shallowToJson(some)).toMatchSnapshot();
// 	})
// 	it('knows that 2 and 2 make 4', () => {
// 	    expect(2 + 2).toBe(4);
// 	  });
// })

 describe('<App />', ()=>{

		it('Comp1', () => {
		let some1 = mount(<App test='testing' />);
		expect(shallowToJson(some1)).toMatchSnapshot();
		})

})