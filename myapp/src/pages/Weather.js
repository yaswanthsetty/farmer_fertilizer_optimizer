import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async (latitude, longitude) => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        lat: latitude,
                        lon: longitude,
                        appid: 'd6a5b19332da20d99ea6cbfecfc50d06', // Replace with your OpenWeatherMap API key
                        units: 'metric' // Use 'imperial' for Fahrenheit
                    }
                });
                setWeather(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        fetchWeather(position.coords.latitude, position.coords.longitude);
                    },
                    (err) => {
                        setError(err);
                        setLoading(false);
                    }
                );
            } else {
                setError(new Error('Geolocation is not supported by this browser.'));
                setLoading(false);
            }
        };

        getLocation();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Current Weather</h1>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
};

export default Weather;
