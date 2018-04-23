import React from 'react';
import { shallow } from 'enzyme';
import DisplayZones from '../../components/DisplayZones';
import { emptyInfo, dummyInfo } from '../fixtures/heart_rate_info';


test('should correctly display DisplayZones page ',()=>{
  const wrapper = shallow(<DisplayZones />);
  expect(wrapper).toMatchSnapshot()
})

test('should handle DisplayZones data when nothing is added', ()=>{
    const wrapper = shallow(<DisplayZones message={emptyInfo.message}
      age={emptyInfo.age} mod_lower={emptyInfo.mod_lower}
      vig_higher={emptyInfo.vig_higher} max={emptyInfo.max} />);
        expect(wrapper).toMatchSnapshot();
})

test('should handle DisplayZones data when info is added', ()=>{
    const wrapper = shallow(<DisplayZones message={dummyInfo.message}
      age={dummyInfo.age} mod_lower={dummyInfo.mod_lower}
      vig_higher={dummyInfo.vig_higher} max={dummyInfo.max} />);
      expect(wrapper).toMatchSnapshot();
})
