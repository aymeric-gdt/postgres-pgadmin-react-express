#!/bin/bash

clean_bdd() {
    echo "Arrêt des conteneurs et nettoyage des volumes de base de données..."
    docker-compose down
    docker volume prune -f
}

clean_all() {
    echo "Arrêt de tous les conteneurs..."
    docker-compose down

    echo "Suppression des conteneurs, réseaux, volumes et images non utilisés..."
    docker-compose down --rmi all --volumes --remove-orphans

    echo "Suppression de tous les volumes..."
    docker volume prune -f

    echo "Suppression des réseaux non utilisés..."
    docker network prune -f

    echo "Suppression des dossiers node_modules..."
    find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
}

case "$1" in
    bdd)
        clean_bdd
        ;;
    all)
        clean_all
        ;;
    *)
        echo "Usage: ./clean.sh [bdd|all]"
        echo "  bdd : Nettoie les volumes de base de données"
        echo "  all : Nettoie tout (conteneurs, images, volumes, réseaux, node_modules)"
        exit 1
        ;;
esac

echo "Nettoyage terminé."
