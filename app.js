import _ from 'lodash';

function app() {
    let array = [1, 2, 3];
    _.reverse(array);
    console.log(array);
}


module.exports = app;