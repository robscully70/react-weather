var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        }
    },
    handleSearch: function (location) {
        // this.setState({
        //     location,
        //     temp: 23
        // })
        
        //debugger;
        this.setState({isLoading:true});
        var that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location,
                temp,
                isLoading: false
            })
        }, function (err) {
            alert('that broke');
            that.setState({isLoading:false});
        })

    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            } else {

            }
        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;