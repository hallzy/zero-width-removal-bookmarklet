# Zero-Width Character Removal Bookmarklet

This project was inspired by [umpox][]/[zero-width-detection][], except that
this is my attempt to detect and remove zero-width characters from a webpage.

[umpox]: https://github.com/umpox
[zero-width-detection]: https://github.com/umpox/zero-width-detection

## Usage

* Click the bookmarklet
* If zero-width characters exist on the page it will ask you if you want to
  remove them
  * Click `OK` to remove them
  * Click `Cancel` to **NOT** remove them
* If there are no zero-width characters on the page, then a message will pop up
  telling you so

If you do not see anything pop up, then the bookmarklet is not working properly.

## Install/Bookmarking Instructions

If you are unfamiliar with bookmarklets you add them using the following
instructions:

### Firefox

* Create a new bookmark as normal
* Give it any name you would like
* In the location field of the bookmark, paste the code from the `.js` file in
  this repository.
* Save it

I would recommend moving the bookmark to the bookmark bar under the URL bar for
easier access.

### Chrome

* Create a new bookmark as normal
* Give it any name you would like
* In the URL field of the bookmark, paste the code from the `.js` file in
  this repository.
* Save it

I would recommend moving the bookmark to the bookmark bar under the URL bar for
easier access.

## Testing

This line﻿ has several​ zero-width‌ characters in‍ it.

Try copying that above line and pasting it into a text editor to see if it
displays. Then try the bookmarklet and see if the characters are removed.
