# bgg home page redesign implementation
### target

- https://caitlinpannellevans.files.wordpress.com/2015/02/bgg-website-home.jpg

### support

- http://html-color-codes.info/colors-from-image/
- http://getbootstrap.com/css/#buttons


### bugs

1. giving focus to inputs causes the outline to appear which doesn't conform to the border-radius.  Bootstrap handles this by removing the outline and putting a box-shadow around the input field
2. gradients on buttons don't match spec
3. "contests" don't have the correct color for the [Page ...] elements

### todo
1. "featured games" carousel is missing arrow controls
2. need a responsive treatment
3. need to determine what to do about bgg image copyrights
4. need copy of leaves image for hero carousel
5. save a copy of target design into repo in case designer changes the target listed above
6. create explanation document


#### nice to have
1. I mixed `${variable}` and `tag= variable` syntax in jade - refactor as needed
2. enable simple dynamic behavior
  * hero carousel buttons
  * featured game carousel images
