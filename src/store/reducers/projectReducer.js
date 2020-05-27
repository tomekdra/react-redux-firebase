const initialState = {
    projects: [
        {id: 1, title: "tytul 1", content: 'lorem impsum dolor sit amet'},
        {id: 2, title: "tytul 2", content: 'lorem impsum dolor sit amet'},
        {id: 3, title: "tytul 3", content: 'lorem impsum dolor sit amet'}
    ]
};

const projectReducer = (state = initialState, action) => {
    return state;
}

export default projectReducer;