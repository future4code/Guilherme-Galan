import allTasks from './tasks';
import { setTasks } from '../actions/tasks';

describe('Reducer Task', () => {
    test('Testando o SetTask no Reducer', () => {
        const mockState = {};
        const mockTasks = [{text:"", day:""}];
        const mockedAction = setTasks(mockTasks);
        const newState = allTasks(mockState, mockedAction)

        expect(newState.tasks).toHaveLength(1)
    })
})