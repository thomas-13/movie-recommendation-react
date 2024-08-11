# Movie Recommendation App

A React Application to recommed movies to users.
5 movies will be shown at a time, and the movies can be sorted according to Rank (as decided by the admin), or by Release year.

The Admin has privilages to Add/Modify the movie list as desired.

## Admin Login
email : admin@gmail.com
password: admin

## Adding Movies
Movies can be added in 2 ways:
> Enter Movie Title and metadata is obtained from the "https://www.omdbapi.com/" database. Rank to be added seperately.
Data is fetched by using an access token along with the mentioned API.

> Admin can enter a movie title along with additional data manually and set the rank.


### Default movie list
Movies displayed on start are displayed from a .json file in the project.

### Storage
localStorage from the Browser is used to store data as backend integration has not been implemented.