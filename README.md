# Surviving Game Of Thrones

After the hurricane of the Game of Thrones series finale, what a better way to wrap it all up than with an interactive dashboard. Illustrating the deaths and surviving characters of the series, in well presented graphs.
# Visit the project live here...
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

Hero image - 
Custom Fav Icon -
Interactive Graphs -
Parallax sections
 
### Existing Features


### Features Left to Implement
Due to time restraints I have stopped trying to code the scatterplot graph using the 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

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

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
