FROM openknowledge/ckan-base:2.8


# Set timezone
ARG TZ
RUN echo $TZ > /etc/timezone
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime

RUN pip install natsort

# Install any extensions needed by your CKAN instance
# (Make sure to add the plugins to CKAN__PLUGINS in the .env file)
# For instance:
RUN pip install -e git+https://github.com/CodeForAfrica/ckanext-social#egg=ckanext-social && \
    pip install -e git+https://github.com/okfn/ckanext-disqus#egg=disqus && \
    pip install -e git+https://github.com/jqnatividad/ckanext-odata#egg=ckanext-odata && \
    pip install -e git+https://github.com/datopian/ckanext-c3charts#egg=ckanext-c3charts && \
    pip install -e git+https://github.com/ckan/ckanext-viewhelpers#egg=ckanext-viewhelpers && \
    pip install -e git+https://github.com/ckan/ckanext-dashboard#egg=ckanext-dashboard && \
    pip install -e git+https://github.com/ckan/ckanext-basiccharts#egg=ckanext-basiccharts && \
    pip install -e git+https://github.com/ckan/ckanext-geoview#egg=ckanext-geoview && \
    pip install -e git+https://github.com/ckan/ckanext-mapviews#egg=ckanext-mapviews && \
    pip install -e git+https://github.com/AppGeo/ckanext-agsview#egg=ckanext-agsview && \
    pip install -e git+https://github.com/keitaroinc/ckanext-visualize.git@ckan-2.8#egg=ckanext-visualize && \
    pip install -e git+https://github.com/conwetlab/ckanext-privatedatasets.git#egg=ckanext-privatedatasets

# Install the extension(s) you wrote for your own project
# RUN pip install -e git+https://github.com/urbanplatform/ckan-custom-styling.git#egg=ckanext-styleGranada

RUN pip install ckantoolkit

# Apply any patches needed to CKAN core or any of the built extensions (not the
# runtime mounted ones)
# See https://github.com/okfn/docker-ckan#applying-patches
COPY patches ${APP_DIR}/patches

RUN for d in $APP_DIR/patches/*; do \
    if [ -d $d ]; then \
    for f in `ls $d/*.patch | sort -g`; do \
    cd $SRC_DIR/`basename "$d"` && echo "$0: Applying patch $f to $SRC_DIR/`basename $d`"; patch -p1 < "$f" ; \
    done ; \
    fi ; \
    done
