# balmybnb
#### [Live Link](http://balmybnb.dkang.me) ☀️ 😎

balmybnb is a single page app inspired by Airbnb. It utilizes a React and Redux frontend with a Ruby on Rails backend and a PostgreSQL database. balmybnb focuses on warm climates around the world.

![](https://media.giphy.com/media/69sRU1Lc6iz9Tx58Zc/giphy.gif)

#### Homepage
![](https://raw.githubusercontent.com/dkvng/balmybnb/master/wiki/home.png)
The homepage is features a search bar that is built using Google Places Autocomplete. The search bar component also utilizes Google's Geocoding API to turn location into coordinates. This page also features handpicked locations that are currently recommended.

#### Search
![](https://raw.githubusercontent.com/dkvng/balmybnb/master/wiki/search.png)

After utilizing the search bar on the home page users are brought to the search results page. Right after the search bar is used the Google Map is centered to the searched location. The backend is then queried for only spots within the current map bounds. Any user movement of the map will query the backend based on the updated map bounds.

On this page users can browse their search results and can filter according to price.

#### Spot Show
![](https://raw.githubusercontent.com/dkvng/balmybnb/master/wiki/show.png)

This page allows users to view a specific spot's images, create a booking and leave a review. The booking calendar utilizes AirBnB engineering's own calendar library, React-Dates. Dates that are booked are greyed out and unselectable.

![](https://raw.githubusercontent.com/dkvng/balmybnb/master/wiki/calendar.png)


##### Technologies used
1. Javascript
1. Ruby on Rails for backend
1. PostgreSQL
1. HTML
1. CSS


##### Libraries used:
* React.js
* Redux
* Moment.js
* React-Dates - AirBnB engineering's own calendar library
* React-Slick - image carousel
* figaro to securely store keys
* Google Map API & Google Places Autocomplete
* Bcrypt for user authorization
* paperclip to store spot and user profile images using AWS S3 buckets

##### Features:
- Sign up/log in with email
- Search and browse living spaces by location utilizing Google Maps
- Filter living spaces by price
- Book living spaces
- Leave reviews for past trips

##### To Do:
- Add User Profiles
- Add Messaging between spot owners and renters
