import React, {useReducer, createContext, useContext, useRef} from 'react';

const initalItems = [];

function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat()
        case 'TOGGLE':
            return state.map()
        case 'REMOVE':
            return state.filter()
        default:
            throw new Error(`Error: ${action.type}`)
    }
}

const stateContext = createContext();
const dispatchContext = createContext();
const idContext = createContext();

export function ListProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initalItems);
    const nextId = useRef(5);
    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                <idContext.Provider value={nextId}>
                    {children}
                </idContext.Provider>
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}

export function useListState(){
    const context = useContext(stateContext);
    if(!context){
        throw new Error('Error');
    }
    return context;
}

export function useListDispatch(){
    const context = useContext(dispatchContext);
    if(!context){
        throw new Error('Error');

    }
    return context;
}

export function useListId(){
    const context = useContext(idContext);
    if(!context){
        throw new Error('Error');
    }

    return context;
}