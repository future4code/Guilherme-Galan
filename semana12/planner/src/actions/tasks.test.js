import { createTask, setTasks } from './tasks'
import axios from 'axios';

describe("Task Actions", ()=> {
    test("Create Task - Criar uma Tarefa", async() => {
        const mockTask = {
            day:"",
            text:""
        }
        
        let mockDispatch
        beforeEach(() => {
            mockDispatch = jest.fn()
        });  

        axios.post = jest.fn()
        
        await createTask(mockTask)(mockDispatch)        
       
        expect(axios.post).toHaveBeenCalled()
    });

    test("Set Tasks", () => {
        const mockTasks = "task"
        const mockedAction = setTasks(mockTasks);

        expect(mockedAction.type).toEqual("SET_TASKS"); 
        expect(mockedAction.payload.tasks).toBeDefined();       
        expect(mockedAction.payload.tasks).toEqual(mockTasks);       
    })
});