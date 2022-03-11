# Northcoders News App

A React app for viewing and interacting with news articles.

Upon visiting the app, you'll assume the identity of `grumpy19`.  Feel free to comment on any of the articles with this username.  You'll also be able to delete any other comment left by `grumpy19`, as well as remove any comments made on articles authored by this user. Articles can be filtered by topic by using the navigation bar at the top of the page, or sorted by using the `Sort by` dropdown.  Filters can also be set by the URL `/topics/[topic]`

### Desired features
- Ability to switch user
- Ability to vote on comments

*Link to hosted app*: https://slurpy-nc-news.netlify.app/

This app uses a backend API for data:
*Link*: https://slurpy-nc-news.herokuapp.com/api/
*GitHub*: https://github.com/RootDevil/BE-News

## Prerequisites
- Node.js `(^v16)`
- npm `(^8)`

## Setup
### Cloning and  installing dependencies
- Click the green `Code` button and copy the HTTPS URL.
- Open a terminal, navigate to your preferred location, then use `git clone [url]`
- `cd FE-News`
- `npm install` to install dependencies

### Building
- `npm start` to host a local development server
- `npm build` to create a production build