import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 100,
    width: '60%',
    margin: '20px auto',
    textAlign: 'center',
    display: 'block',
};

class Home extends React.Component {
    render () {
        return (
            <Paper style={style} zDepth={2}>
                Hello i'm at home page
            </Paper>
        );
    }
}

export default Home;
