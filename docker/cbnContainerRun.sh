#!/bin/bash

cd /home/ubuntu/dockerRunsRepository/cbn
product="cbn"

echo "+---------------------------------------------------------------+"
echo "| > Avvio preparazione container per '"$product"'"
echo "+---------------------------------------------------------------+"

echo "+---------------------------------------------------------------+"
echo "| > Passo 0/5 --> Inizializzazione cartelle per '"$product"'"
echo "+---------------------------------------------------------------+"

mkdir -p /home/docker/$product/logs

echo "+---------------------------------------------------------------+"
echo "| > Passo 1/5 --> Fermando eventuali container "$product
echo "+---------------------------------------------------------------+"

docker kill $product

echo "+---------------------------------------------------------------+"
echo "| Passo 2/5 --> Rimuovendo eventuali container "$product
echo "+---------------------------------------------------------------+"

docker rm $product

echo "+---------------------------------------------------------------+"
echo "| Passo 3/5 --> Creazione dell'immagine docker "$product
echo "+---------------------------------------------------------------+"

docker build -t $product .

echo "+---------------------------------------------------------------+"
echo "| Passo 5/5 --> Eseguo il container "$product
echo "+---------------------------------------------------------------+"

docker run -itd \
 --restart always \
 --name $product \
 -p 8069:8080 \
 --env "VIRTUAL_HOST=campusbynight.schoolcare.it, campusbynight.it, www.campusbynight.it" \
 --env "LETSENCRYPT_EMAIL=vincenzolombardi99@gmail.com" \
 --env "LETSENCRYPT_HOST=campusbynight.schoolcare.it, campusbynight.it, www.campusbynight.it" \
  $product

echo "+----------------------------------------------------------------------------------+"
echo "| Passo 6/6 --> ELENCO CONTAINER in ESECUZIONE dopo avvio "$product" <--"
docker ps
echo "+----------------------------------------------------------------------------------+"
