var React = require('react');
var {Link} = require('react-router');
var About = (props) => {
  return (
    <div>
    <h1 className="text-center">About</h1>
    <p>Important Links</p>
    <ul>
      <li>
        <Link to='https://github.com/robscully70/react-weather'>Weather App</Link>
      </li>
      <li>
      <Link to='https://facebook.github.io/react-native/docs/getting-started.html'>React Get Started</Link>
      </li>
      <li>
      <Link to='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>Flexbox</Link>
      </li>
      <li>
      <Link to='https://foundation.zurb.com/'>Foundation</Link>
      </li>
      <li>
      <Link to='http://api.openweathermap.org'>Open Weather Map</Link>
      </li>
    </ul>
  </div>
  )
};

module.exports = About;
