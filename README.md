# Ott

# A Poc for online OTT platform using localstorage as backend

## Running the application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Web Documentation
Run `npm run docs` and Navigate to `http://localhost:8080/` a web based documentation with details about the app and components can be viewed

## Usage
There are two modules\
1.Admin  
2.User

Both modules have separate routes  

To log in to admin account visit `http://localhost:4200/admin`  
Admin credentials:  
username: admin  
password: admin1234  

To log in to user account visit `http://localhost:4200/home`  
user credentials:  
username: John  
password: 1234  
Both routes have route guards and will ask for authentication if not done already

Eventhough both modules have different routes , login page is common therefore even if a user is logged in but does not have admin privileges tries to navigate to `admin` routes , a permission error will be thrown.  

If it occurs please verify if you are on the correct route.

## State Management:
uses ngrx store for state management and to make the application reactive

## Usage with server
Ready to use with a REST api with minimal changes as it already uses observable based responses

