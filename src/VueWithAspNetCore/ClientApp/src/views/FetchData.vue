<template>
    <div class="fetch-data container">
        
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>

        <div v-if="loading">Loading..</div>
        <table v-else class="table table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecasts" v-bind:key="forecast.dateFormatted">
                    <td>{{ forecast.dateFormatted }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                forecasts: []
            };
        },
        created() {
            this.loading = true;
            this.forecasts = [];

            fetch('api/SampleData/WeatherForecasts')
                .then(response => response.json())
                .then(data => {
                    this.loading = false
                    this.forecasts = data;
                });
        }
    }
</script>