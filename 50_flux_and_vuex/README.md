# 50_flux_and_vuex

> A Vue.js project

Flux jest to narzędzie do kontroli zasobów w SP

Elementy Fluxa a zarazem Vuex:

Store - miejsce w którym przechowywany jest stan aplikacji, a więc zmienne i stałe ich stan i miejsce w którym obserwujemy zmiany stanu

Actions - to co zdefiniujemy jako actions moze zmieniac stan, sa to jedyne rzeczy ktore moga zmieniac stan

Mutations - Actions zmienia stan własnie poprzez mutations - tylko mutacje maja dostep do danych w store

Geters - metody które opdpowaidaja za dane w store i dostarczane je do aplikacji


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
