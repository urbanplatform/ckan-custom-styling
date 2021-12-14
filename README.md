style_granada
==============

*style_granada* is a usable CKAN extension to styling and redesign the CKAN's instance for the UPGranada project.
Since CKAN provides the necessary tools and functionalities for the easy and correct management of data (open or not), implementing this extension will provide a new and more appellative view of the CKAN instance.
It can be used for any scenario, although the main focus is the UPGranada project and its requirements.

*Note: Check the wiki for more detailed information*


Installation
--------
- To install ckanext-style_granada in a fork of CKAN instance used for UPGranada:
  
     1. Clone the CKAN repository used in [UPGranada](https://gitlab.ubiwhere.com/up-granada/c5-portal-de-datos-abiertos)
   
     2. Check if in ckan folder ``/ckan/Dockerfile`` there is the following command (below). If not, add it:
          
          `RUN pip install -e git+https://gitlab.ubiwhere.com/lsantos/upgranada-ckan-styling-extension@master#egg=ckanext-style_granada`
     
     3. Check if the plugin ``citiesQuest`` exists in the ``ckan.plugins`` file. If not, add it.
   
     4. Run docker-compose with the necessary modifications on the config files (.env, production.ini, ci/cd):

          `docker-compose up -d`
  
   
- To install ckanext-style_granada in a set of Docker images and configuration files to run a CKAN site:

     1. Clone the [CKAN repository](https://github.com/okfn/docker-ckan)

     2. Go to Dockerfile in ckan folder ``/ckan/Dockerfile`` and add:

          `RUN pip install -e git+https://gitlab.ubiwhere.com/lsantos/upgranada-ckan-styling-extension@master#egg=ckanext-style_granada`

     3. Add the plugin ``citiesQuest`` to the ``ckan.plugins`` setting in your CKAN config file

     4. Rerun or Restart CKAN container:

          `docker-compose up -d`

          `docker container start/restart <name_of_ckan_container>`

- To install ckanext-citiesQuest on local CKAN project:

     1. Activate your CKAN virtual environment, for example::

          . /usr/lib/ckan/default/bin/activate

     2. Install the ckanext-style_granada Python package into your virtual environment:

          pip install ckanext-style_granada

     3. Add ``style_granada`` to the ``ckan.plugins`` setting in your CKAN config file (by default the config file is located at ``/etc/ckan/default/production.ini``).

     4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu:

          sudo service apache2 reload


--------------------
Styling CKAN 
--------------------

There’s nothing special about CSS in CKAN. In this extension, you just use the usual tools and techniques to explore and hack the CSS. Its recommended using your browser’s web development tools to explore and experiment with the CSS, then using any good text editor to edit your extension’s CSS files as needed. 

Extensions can add their own CSS files to modify or extend CKAN’s default CSS. Create an example_theme.css file in your extension’s public directory:
    
    ckanext-style_granada/
       ckanext/
           style_granada/
               public/
                   example_theme.css

Example: Add the following CSS into the example_theme.css file, to change the color of CKAN’s “account masthead” (the bar across the top of the site that shows the logged-in user’s account info):
    
    .account-masthead {
        background-color: rgb(123, 232, 40);
    }

Restart the containers to see the results.


To make CKAN use our custom CSS we need to override the base.html template, this is the base template which the templates for all CKAN pages extend, so if we include a CSS file in this base template then the file will be included in every page of your CKAN site. Create the file:

    ckanext-style_granada/
       ckanext/
           style_granada/
               templates/
                   base.html

and put this Jinja code in it:

    {% ckan_extends %}

    {% block styles %}
    {{ super() }}
    <link rel="stylesheet" href="/example_theme.css" />
    {% endblock %}

For more documentation, go to http://docs.ckan.org/en/2.8/theming/best-practices.html

Since its being used containers to generate CKAN and all the needed services, the html and css already implemented in the CKAN default view needs to be mannually copied and then modified. To have access to the code, we need to install CKAN in our computer. To do that, use the following link: http://docs.ckan.org/en/2.8/maintaining/installing/install-from-source.html

---------------
Requirements
---------------

This extension can only be executed for version 2.8 of CKAN. Any other
version wasn't tested so its not completly safe to use it in others versions.

---------------
Development Installation
---------------

To install ckanext-style_granada for development, activate your CKAN virtualenv and
do:

    git clone https://gitlab.ubiwhere.com/lsantos/upgranada-ckan-styling-extension
    cd ckanext-style_granada
    python setup.py develop
    pip install -r dev-requirements.txt
