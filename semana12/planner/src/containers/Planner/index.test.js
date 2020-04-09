import React from 'react';
import { shallow } from 'enzyme';
import {Planner} from './index'

const mockTask = {
    day:"Quinta",
    text:"MockTask"
}

describe("Planner", ()=> {
    test("Handle Create Task", () => {
        const mockCreateTaskFunction = jest.fn()
        const component = shallow(
            <Planner onClick={mockCreateTaskFunction(mockTask)}></Planner>
        )

        const createButton = component.find(button);

        expect(createButton).toHaveLength(1);

        createButton.simulate("click");

        expect(mockCreateTaskFunction).toHaveBeenCalled();
    });
})