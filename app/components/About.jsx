var React = require('react');
// Long
// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// })

//Stateless
// var About = function (props) {
//     return (
//         <h3>About stateless Component</h3>
//     )
// }

//Arrow
var About = (props) => {
    return (
        <h3>About arrow Component</h3>
    )
}

module.exports = About;