const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'FUCK OFF!!'),React.createElement('h1', {}, 'YOU FUCK OFF!!')]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);