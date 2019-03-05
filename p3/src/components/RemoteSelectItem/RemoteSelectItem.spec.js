import { shallow } from 'enzyme';
import React from 'react';
import RemoteSelectItem from './RemoteSelectItem';

jest.useFakeTimers();

describe('RemoteSelectItem component tests', () => {
    it('should call getData function', () => {
        const mockFunction = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => {
                resolve([
                    {
                        value: 'is',
                        label: 'Iceland'
                    },
                    {
                        value: 'en',
                        label: 'United Kingdom'
                    }
                ]);
            });
        });

        const component = shallow(<RemoteSelectItem onSelect={() => {}}
        name="select"
        value=""
        getData={ mockFunction } />);

        jest.runAllTimers();

        expect(mockFunction.mock.calls.length).toBe(1);

        return Promise.resolve().then(() => {
            // Does select include more than option
            component.update();
            expect(component.find('select[name="select"]').children().length).toBe(3);
        });
    });
});
