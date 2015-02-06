Juniper
========

An nginx based multi-environment server.

### When and why would I want to use Juniper?
Hosting ain't cheap, and running several sites from ones server takes a ton of work. Juniper makes things less painful.

Let's say you want to serve out flat files for your site, run a node api on a subdomain, and redirect traffic from a subfolder to that subdomain. Well, this is perfect for you.

With Juniper, you can run all of these simultaneously:
  * http://www.yoursite.com
  * http://api.yoursite.com
  * http://www.yoursite.com/api

To add a new site to your server, just add a new key in the configuration file, restart, and voila!

### When and why would I NOT want to use Juniper?
It's generally bad practice to run multiple environments (uat, production, etc.) on a single server, it means if that server goes down all of your sites are down. But sometimes you're on a budget, and don't want to use something like [Heroku](https://www.heroku.com/), which may require you to pay for multiple add-on services.

### Background & Reading
* [Nginx Primer](http://blog.martinfjordvald.com/2010/07/nginx-primer/)


Installation
------------

  1. Install [Node](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
  2. Install [Nginx](http://wiki.nginx.org/Install)
  3. Install Juniper

```bash
  # From anywhere on your system, install the Juniper CLI globally
  $ npm install -g juniper

  # Create a new folder that will house your Juniper configuration
  $ juniper create my-sites

  # Update the `my-sites/config.cson` file that was just created.

  # Start your server
  $ cd my-sites
  $ juniper install
  $ juniper start
```

Usage
-----

```
  $ juniper -h

  Usage: juniper [action [options]]

  Actions:

    create <project>    Create a new folder and init it as a juniper project
    init                Initalize project
    install <siteName>  Install the dependencies of this project or site
    start <siteName>    Start project or site
    stop <siteName>     Stop project or site
    restart <siteName>  Restart project or site
    remove <siteName>   Remove all settings, stop all services for this project or site
    update <siteName>   Stop, update, and restart project or site

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
```


