
For my offline processing, I use data which originated in WikipediaDiscograph's
JimRadioArtistWikipediaNaming1.js file.

I tried to import the data in Node.js using:

	fs.readFileSync()

Got error:

	Unexpected token  in JSON at position 0
	(some unseen character was there)

-----------------------------------------------

THE FIX:

	https://www.drupal.org/node/2712937

It mentions:

	BOM character at beginning of robots.txt file

-----------------------------------------------

Byte Order Mark (BOM) character added as very first character in the beginning.

-----------------------------------------------

Comment:

	Downloaded 1.3 and opened in notepad++ with hex editor. Cannot see a BOM.

-----------------------------------------------

got Notepad++ here: 

	https://notepad-plus-plus.org/download/v7.3.html

-----------------------------------------------

somewhere in my reading I read that Node.js's "fs.readFileSync()" expects
data in ASCII (ANSI??).

later I read about BOM character - you don't "see" it but it's there

when I opened my file in Notepad++

click menu: Encoding

item checked off was UTF-8 BOM !!!!!!!!

I picked menu item: Convert to ANSI and re-saved the file

THIS SOLVED MY PROBLEM - could read and process huge files after that!!!




