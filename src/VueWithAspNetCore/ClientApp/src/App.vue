<template>
    <div id="app">
        <header>
            <nav class="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/">VueWithAspNetCore</a>
                    <button type="button" class="mr-2 navbar-toggler">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                        <ul class="navbar-nav flex-grow">
                            <li class="nav-item">
                                <router-link to="/" class="text-dark nav-link">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/counter" class="text-dark nav-link">Counter</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/fetch-data" class="text-dark nav-link">Fetch data</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <router-view />
    </div>
</template>
<style>
    a.navbar-brand {
        white-space: normal;
        text-align: center;
        word-break: break-all;
    }

    html {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
    }

    .box-shadow {
        -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }
</style>
