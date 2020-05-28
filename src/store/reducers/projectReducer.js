const initialState = {
    projects: [
        {id: 1, title: "tytul 1", content: 'lorem impsum dolor sit amet'},
        {id: 2, title: "tytul 2", content: 'lorem impsum dolor sit amet'},
        {id: 3, title: "tytul 3", content: 'lorem impsum dolor sit amet'}
    ]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('dodano', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('jakis blad', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;