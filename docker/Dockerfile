FROM ubuntu:18.04
MAINTAINER Campus Nightlife Ninjas

# In fase di Build viene generato il warning "debconf: delaying package configuration, since apt-utils is not installed"
# Info al link https://github.com/phusion/baseimage-docker/issues/319

RUN apt-get clean &&\
	apt-get update &&\
	apt-get -y upgrade &&\
	apt-get install nano &&\
	apt-get install -y wget curl &&\
	apt-get install -y software-properties-common &&\
	apt-get install -y vim

RUN apt-get install -y locales && locale-gen it_IT.UTF-8
ENV LANG it_IT.UTF-8
ENV LC_TYPE it_IT.UTF-8

# Segue comando per impostare data e ora corretti
RUN ln -snf /usr/share/zoneinfo/Europe/Rome /etc/localtime && echo Europe/Rome > /etc/timezone

# |> INSTALLAZIONE DI JAVA ORACLE 17 <|
# Riferimento: https://thishosting.rocks/install-java-ubuntu/
# Accettazione della licenza: https://stackoverflow.com/a/54499612/4244130

RUN add-apt-repository -y ppa:linuxuprising/java
RUN apt-get update
RUN echo oracle-java17-installer shared/accepted-oracle-license-v1-3 select true | /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java17-installer
RUN apt install oracle-java17-set-default
ENV JAVA_HOME /usr/lib/jvm/java-17-oracle

# |> INSTALLAZIONE TOMCAT 9 <|
#
# Sorgente n1: https://github.com/Applatix/docker-images/tree/master/tomcat-postgres
# Sorgente n2: https://github.com/Applatix/docker-images/blob/master/tomcat-postgres/Dockerfile
# Guida comando tar n1: https://guideopensource.it/comando-tar-di-linux/
# Guida comando tar n2: https://unix.stackexchange.com/questions/535772/what-does-strip-components-c-mean-in-tar
# Repository utilizzato: https://archive.apache.org/dist/tomcat/

RUN cd /tmp &&\
	curl -O https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.24/bin/apache-tomcat-9.0.24.tar.gz &&\
	mkdir /opt/tomcat &&\
	tar xzvf apache-tomcat-9.0.24.tar.gz -C /opt/tomcat --strip-components=1
COPY tomcat-users.xml /opt/tomcat/conf/
ENV CATALINA_HOME /opt/tomcat
ENV PATH $PATH:$CATALINA_HOME/bin

# |> INSTALLAZIONE POSTGRESQL 11 <|
#
# Guida Ufficiale WikiPostgress: https://wiki.postgresql.org/wiki/Apt
#
# Note that 'sudo apt-get install postgresql-11' does the following:
# - It installs the PostgreSQL server, utilities and a command-line client called psql.
# - It creates a Linux system user called postgres. All data files are owned by this user, and all processes run as this user.
# - It creates one database, also called postgres.
# - It creates one PostgreSQL user (not the Linux system user), also called postgres.

# RUN apt-get install ca-certificates
# RUN curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
# RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
# RUN apt-get update && apt-get install -y postgresql-11 postgresql-client-11 postgresql-contrib-11

# Creazione super-user psql "vincenzo" con password "LV41464Z"
# Creazione di un database "schoolcaredb" di cui vincenzo e' possessore
# Modificata la password del psql user "postgres"; nuova password: "LV41464Z"

# USER postgres
# RUN /etc/init.d/postgresql start &&\
#   psql --command "CREATE USER vincenzo WITH SUPERUSER PASSWORD 'LV41464Z';" &&\
#   psql --command "GRANT ALL PRIVILEGES ON DATABASE postgres TO vincenzo;" &&\
#   createdb -O vincenzo schoolcaredb -E 'UTF8' &&\
#   psql --command "ALTER USER postgres WITH PASSWORD 'LV41464Z'"
	
# Switch all'utente root.
# Successivo aggiornamento della configurazione di PostgreSql in modo che siano possibili connessioni remote al database (per manutenzione diretta).
# Inserita nel file 'pg_hba.conf' la riga 'local all vincenzo trust' affinché siano eseguibili comandi per l'inizializzazione del database come:
# 'psql schoolcaredb vincenzo -f /tmp/initialize.sql'

# USER root
# RUN echo "listen_addresses='*'" >> /etc/postgresql/11/main/postgresql.conf
# RUN [ ! -f pg_hba.conf ] || mv utils/pg_hba.conf utils/pg_hba.conf.old
# COPY utils/pg_hba.conf /etc/postgresql/11/main/

# Eventuale codice per l'aggiunta e l'avvio nel Container di un file per l'inizializzazione del database PostgreSql 
#
# COPY utils/initializedb.sql /tmp/initializedb.sql 
# RUN chmod 755 /tmp/initializedb.sql
# Avviare il file initialize.sql
# RUN /etc/init.d/postgresql restart && psql schoolcaredb vincenzo -f /tmp/initializedb.sql

# |> PORTE E VOLUMI <|
#
# Le porte ESPOSTE (per mezzo del comando EXPOSE) da un Container creato a partire da questa immagine saranno visibili a tutti gli eventuali altri Container.
# Eventuali porte che si vogliono siano mostrate dal Container all'intera macchina Host devono invece essere PUBBLICATE per mezzo del comando PUBLISH oppure
# della specifica -p / --publish all'avvio del Container stesso.
#
# 8080 -> Porta per Tomcat 9
# 5432 -> Porta per PostgreSql 11
#
# I volumi riguardanti Container creato a partire da questa immagine non sono qui gestiti: se ne lascia la gestione all'avvio del Container stesso.
#
# Note sull'utilizzo dell'istruzione VOLUME in un DockerFile: 
# - https://stackoverflow.com/questions/41935435/understanding-volume-instruction-in-dockerfile
# - https://stackoverflow.com/questions/25311613/docker-mounting-volumes-on-host
#
# Nota: La cartella ove la versione di PostgreSql salva i dati e' /var/lib/postgresql/11/main
#       Questo puo' essere verificato per mezzo della query: 'show data_directory'.
#       Sorggente: https://stackoverflow.com/questions/1137060/where-does-postgresql-store-the-database

# EXPOSE 8080 
# EXPOSE 5432

# |> INSTALLAZIONE DI JPROFILER <|
#
# JProfiler e' un utile strumento per monitorare la JRE e il corretto funzionamento del Server.
# Sorgente: https://geekspearls.blogspot.com/2016/08/configure-jprofiler-92-to-profiling.html
# Dopo l'installazione, per l'avvio entrare nel container, localizzarsi alla directory usr/local/jprofiler e digitare bin/jpenable per avviare JProfiler.
#
# RUN wget https://download-gcdn.ej-technologies.com/jprofiler/jprofiler_linux_11_1_4.tar.gz -P /tmp/ &&\
# tar -xzf /tmp/jprofiler_linux_11_1_4.tar.gz -C /usr/local &&\
# rm /tmp/jprofiler_linux_11_1_4.tar.gz
# EXPOSE 8849

# |> WEBAPPS DEPLOYMENT <|
#
# Eliminare la cartella '/opt/tomcat/webapps/ROOT' affinché Tomcat9 all'avvio la rigeneri deployando così l'applicativo da noi isnerito e non quello di default.
# Sorgente:  https://www.baeldung.com/tomcat-root-application
# Nota: in caso di utilizzo dell'istruzione VOLUME, la modifica / eliminazione della cartella ROOT deve essere effettuata PRIMA dell'istruzione VOLUME stessa.
# Sorgente: https://stackoverflow.com/questions/54108613/docker-executing-cp-or-mv-command-in-dockerfile-but-changes-does-not-show-up-in

RUN rm -R /opt/tomcat/webapps/ROOT
RUN rm -R /opt/tomcat/webapps/docs
RUN rm -R /opt/tomcat/webapps/examples
RUN rm -R /opt/tomcat/webapps/host-manager
RUN rm -R /opt/tomcat/webapps/manager
COPY ROOT.war /opt/tomcat/webapps/ROOT.war
COPY homepage.war /opt/tomcat/webapps/redirect.war

# |> SCRIPT D'AVVIO <|
# Preparazione dello Script d'avvio di un Container creato a partire da questa immagine.
# Usare 'CMD ["bash"]' per avviare una Shell all'interno del Container stesso.

COPY autorun.sh /bin
RUN chmod +x /bin/autorun.sh
RUN chmod 755 /bin/autorun.sh
CMD ["/bin/autorun.sh"]
