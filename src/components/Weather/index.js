import React from "react";
import { Switch, Route, withRouter } from "react-router";
// Stateless component
import { Link } from "react-router-dom";
import City from "../Cities"
const API_WEATHER = "http://localhost:8888/weather-service/weathers";

class Weather extends React.Component{
// 1.
// class 형태로 변경 후 fetch 선택 도시의 날씨
// 2.
// react Hook << 검색
// state, setState
  state = {
    weather: [],
    detail: [],
    temperature:[],
  }
  componentDidMount(){
    const {cityName} = this.props.match.params;
    const api = `${API_WEATHER}?cityName=${cityName}`;
    console.log({api});
    const {weather} = this.state;
    const weatherData = fetch(api)
      .then((res) => res.json())
      .then((data)=>{
        this.setState({
          weather: data.weather[0].main,
          detail : data.weather[0].description,
          temperature: data.main.temp,
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    const {cityName} = this.props.match.params;
    const weather = this.state;
    return (
      <div>
      {cityName}
      <p>Weather : {weather.weather}</p>
      <p>Detail : {weather.detail}</p>
      <p>Temperature : {weather.temperature}</p>
      </div>
    )
  }


};

export default Weather;
