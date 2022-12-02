# Development

### Link to Deployed Website
Link to deployed web application `https://lonelypigeon1711.github.io/project6-development`

### Goal and Value of the Application
The goal of this application is to understand React and the behind the scenes components of interactive interfaces. The goal of this particular application is to provide users with a list of suggested movies. The user can sort the movies from highest to lowest rated. They can filter the movies based on genre and rating. The user can also add a movie to their Watchlist (aggregation) where the total number of watching time will be displayed along with their selected movies. Overall, this application will help users select new movies to watch. 

### Usability Principles Considered

Usability is considered in understanding how the user will go about optimizing the interface. Thus, all the filters/sorting/aggregation is located in one section of the site. The items are also organized in order for the user to see as much information without being overwhelmed.Different sized headings give the user an understanding of the hiearchy.   

### Organization of Components / How Data is Passed Down Through Components

There is one main component called Time. This keeps track of the aggregator. Therefore it manages the removal and addition of items from the Watchlist. It also updates the total time. This component is accessed in App.js. 

There are many states to keep track of the changing parts of the interactive interface. 
The toWatch,setWatch keeps track of the changing Watchlist. 
totalTime, setTime keeps track of the total time in the Watchlist. 
sort, setSort keeps track of whether or not the movies should be sorted. 

props apply the different component and states to the data being provided. 


### How the User Triggers State Changes

Users trigger the changes by clicking various buttons on the dashboard. 

When the user turns sort on and off my clicking the same button. Unfortunately, the button does not indicate whether it is or off. 

The user can see what filters are being applied. To turn off the a filter, the user must click "Reset Filters" which will clear the filters being applied. 

