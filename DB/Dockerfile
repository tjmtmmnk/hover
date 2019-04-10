# MySQL
ENV MYSQL_MAJOR 5.6

imported
RUN set -ex; \
    key='A4A9406876FCBD3C456770C88C718D3B5072E1F5'; \
    export GNUPGHOME="$(mktemp -d)"; \
    gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
    gpg --export "$key" > /etc/apt/trusted.gpg.d/mysql.gpg; \
    rm -r "$GNUPGHOME"; \
    apt-key list > /dev/null

RUN echo "deb http://repo.mysql.com/apt/debian/ jessie mysql-${MYSQL_MAJOR}" > /etc/apt/sources.list.d/mysql.list

RUN sed -i.orig -e 's!^deb http://security.debian.org.*$!deb http://cdn-fastly.deb.debian.org/debian-security jessie/updates main!' -e 's!^deb http://deb.debian.org/debian \(.*\)$!deb http://cdn-fastly.deb.debian.org/debian \1!' /etc/apt/sources.list
RUN apt update -y -o Acquire::http::AllowRedirect=false
RUN apt install apt -y -o Acquire::http::AllowRedirect=false

RUN apt-get update -yq && \
    apt-get install -yq --no-install-recommends build-essential curl ca-certificates tar bzip2 patch libssl-dev libxml2-dev git varnish \
    libjpeg62-turbo-dev libpng12-dev libgif-dev imagemagick libmagickcore-dev libmagickcore-6-headers libperl-dev \
    libmysqlclient-dev mysql-client="${MYSQL_MAJOR}*" mysql-server="${MYSQL_MAJOR}*" && \
    apt-get clean && \
    rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*
