# Randomwalk
A random walk through the dictionary, in your browser.

Based on [my entry](https://github.com/dougo/salon256) for Nick Montfort's
[Salon 256](https://nickm.com/post/2017/04/salon-256-on-may-1/).

To run this program, you'll need a wordlist file. The NPL has a number of
[wordlists](http://www.puzzlers.org/dokuwiki/doku.php?id=solving:wordlists:about:start);
I recommend [ENABLE](http://www.puzzlers.org/pub/wordlists/enable1.txt).

Once you've downloaded the wordlist file, you'll need to serve the folder from a web server. If you don't already
have access to a web server, you can run one locally, e.g.:

```
ruby -run -e httpd . -p 8000
```
or:
```
npx http-server -p 8000
```

[(There are many other ways to do this.)](https://gist.github.com/willurd/5720255)

Then visit localhost:8000 in your browser!
