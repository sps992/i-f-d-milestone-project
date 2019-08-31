# Surviving Game Of Thrones

After the hurricane of the Game of Thrones series finale, what a better way to wrap it all up than with an interactive dashboard. Illustrating the deaths and surviving characters of the series, in well presented graphs.
### Visit the project live here...
https://sps992.github.io/i-f-d-milestone-project/

## UX

This website is designed for any GOT fan looking to keep the series alive by analysing the mortality of their favourite characters. I plan to do this by providing nicely presented graphs sprinkled with fun GOT facts. I think this will be a great way for fans to relive their favourite scenes in their heads and to better understand who died and who survived, whilst learning more about the series along the way.

 ### User Stories
 
 EXAMPLE FORMAT{ As a user type, I want to perform an action, so that I can achieve a goal.}
 
- As someone who has watched the series, I want to know more about who is still alive, so that I can better understand what actually happened and why certain characters are so important to the plot.

- As a big nerd, I want to find out more about who died and how many of each house is still alive, So I can quence my undying thirst for the series until the prequel comes out next year.

- As someone who has watched a season, I want to view content that is entertaining and interesting, So I can decide whether to continue watching the series.


#### Wireframes

Demonstrating best web practice, I have created wireframes to shape the initial skeleton of the website and where the content could be placed. This is done to understand the space limitations and how to make the website userfriendly and offer the best user experience as possible.
'Wireframes' folder in my git repository:
https://github.com/sps992/i-f-d-milestone-project/tree/master/static/wireframes


## Features

1. Hero image - Builds a good first impression to draw in the users interest quickly. I personally think this is a great starting point on any website as a images speaks a thousand words. But make sure you have the css right otherwise it can easily have a negative effect. On this particular website dashboard, I have used one from Dubrovnik, Croatia. Which is where they shot 'Kings Landing' from Game of thrones.

2. Custom Fav Icon - Using a favicon generator online (https://realfavicongenerator.net/) I have created a small crown icon, which is iconic from the series of books and television series. I feel favicons add a nice professional touch, whilst many people don't take much time thinking about them, I think its important to not overcomplicate the icon as most detail will be lost at its small size. 

3. Interactive Graphs - The main focal point of this dashboard is the interactive graphs and the way they interact with the user as well as each other using filtered data. This was a big learning curve for me as I've not used this data driven technique before. I hope to experiment further with D3.js in the future as it has a large arsenal of uses and functionality. On the other hand, I do not feel I will take my new found knowledge of Dc.js any further as its dated and there are better alternatives out there which make life and coding easier. 

4. Parallax sections - To add depth and break up the content into smaller sections, I have used a parallax effect on the **hero image** and the fact div on the dashboard. I am a bit mad for parallax sections, I feel they are a great way of breaking up large amounts of content and sprucing up the visual effects of a webpage. I love how it gives the background image a almost 3D feel.
 
### Existing Features

1. Bootstrap Grid system - I have used a bootstrap framework for this build. Amongst other advantages of using a framework, I have greatly taken advantage of the built-in css grid system. It was great to organise the charts at different widths. I did however find that svg graphs weren't the best pleased with the system and at times try to ignore the css and destroy the responsive nature of the dashboard by not scaling their own widths and heights within the columns. This may be due to the nature of the specific 'width' and 'height' attributes, but maybe a problem for another day.  

### Features Left to Implement

Due to time restraints I have stopped trying to code the scatterplot graph using the csv. file I have made. After careful planning I have realised the data I have is not compatible with what is needed to make a scatterplot graph( or atleast, it is with my current knowledge base). If I was to do this project again from the start I would make csv.file that included a more flexible data set. This way I could have made more graphs and used more variation in the types I have used.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap](https://getbootstrap.com/docs/3.3/)
    - The project uses **Bootstrap**(3.3.7) as a front-end framework and helps in-turn to minimize coding time.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Dc.js](https://dc-js.github.io/dc.js/)
    - The project uses **Dc.js** to create and animate dimensional charting using its own pre-built libraries.

- [Crossfilter.js](https://github.com/crossfilter)
    - The project uses **Crossfilter.js** for fast multidimensional filtering for coordinated views.

- [Queue.js](https://github.com/d3/d3-queue)
    - The project uses **Queue.js**  to run multiple javascript tasks simultaneously by creating a 'queue'.

- [D3.js](https://github.com/d3/d3-queue)
    - The project uses **D3.js**'s pre-built library to manipulate this project using a data set.

## Testing

In this section, to convince the assessor that I have conducted enough testing to legitimately believe that the site works well, I will walk through my user stories from the **UX Section** and ensure they work as they should, leading the user to their appropriate goals.

1. Client queries "How many highborn ladys are dead"
    1. "Click" female from the pie chart
    2. "Click" dead from the "death Tally" bar chart.
    3. "Hover" over orange on "Highborn" stacked bar chart.

2. Client queries "How many male Baratheons are still alive"
    1. "Click" male from the pie chart
    2. "Click" alive from the bar chart
    3. "Click" on the "House Selecter" dropdown menu, scroll to Baratheon
    4. "Click" Baratheon, and look to see how many onthe dropdown are left (answer is 1).
    
 3. Client wants to remove the filters he/she has added by clicking on the graph.
    1. "Scroll" down past the active filters
    2. "Press" reset button.
    3. (On click, it removes all dc.js filters and renders all dc.js graphs).

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

### Nu Html Checker

I checked my code on the html checker to validate my code and make sure it falls inline with the **W3.org**.
https://validator.w3.org/nu/?doc=https%3A%2F%2Fsps992.github.io%2Fi-f-d-milestone-project%2F
If for any reason this link no longer works, please revert back to my screenshot here;
https://github.com/sps992/i-f-d-milestone-project/blob/master/static/Nu_Html_checker/Nu-Html-checker.jpg

## Deployment

In this section I am going to describe the process I went through to deploy the project to a hosting platform.
In this instance I used 'GitHub Pages' as my repository was hosted with GitHub so it feltlike the obvious choice.
When pushing my code from IDE to GitHub, I used to three different methods. This was because, I had some trouble when changing from the old Cloud9 set up to the new AWS Cloud9. At first it went okay, but after the first initial commit I had problems with repository sending errors. To fix this quickly and simply, I started uploading manually direct to GitHub. This is why, you might see some variation on how I left my commit messages.

To run my code locally, you would need to either download the repository to your P.C or alternatively click on the GitHub Pages link, located at the top of this page.


## Credits

I would like to thank my course mentor Jim Richmond for guiding me in the right direction and giving me good solid advice as always. 

I would also like to thank Niel McEwan from Code institute support for helping me get unstuck after a couple of long nights of coding with the feeling of not getting anwhere.

## Content

All content is original unless stated below...

#### Media

Most media I used in this project was royalty free from websites like **Pexels**, but I would like to say that I do not own any of the rights to the Game of Thrones franchise. All rights reserved to HBO and George R.R.Martin.

##### Photos

For the hero image, I used a photo by Vincent Rivaud from Pexels https://www.pexels.com/photo/cityscape-uner-blue-sky-2473470/ 

For the fact parallax image, I used a photo from Wikipedia( as I couldn't find a royalty free high resolution image). Which can be found here: https://en.wikipedia.org/wiki/Dark_Hedges#/media/File:Dark_Hedges_near_Armoy,_Co_Antrim_(cropped).jpg


### Acknowledgements

I received my inspiration from watching the Game of Thrones boxset at the same time as starting this milestone project. I did alot of searching on Google and looking at infographics. This post on a website called 'Dorkly', caught my eye and really sparked my interest in propelling this project forward. You can find the article here: http://www.dorkly.com/post/73909/15-game-of-thrones-infographics-that-will-vastly-improve-your-watching-experience
I also adapted my csv. file from sections of pre-built ones, one GitHub repository stood out as my main source. Which you can find here:
https://github.com/jeffreylancaster/game-of-thrones
