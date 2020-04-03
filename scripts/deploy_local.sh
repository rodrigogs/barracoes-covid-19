#!/bin/bash

## Text Tools
RESET="\e[0m"
BOLD="\e[1m"
YELLOW="\e[33m"
RED="\e[91m"
GREEN="\e[32m"

if [ -z $NODE_ENV ]; then
    echo -e "${BOLD}${RED}Missing environment variable NODE_ENV${RESET}"
    exit 1
fi

(
    echo -e "${BOLD}${YELLOW}Installing frontend dependencies...${RESET}"
    npm run install:frontend
    echo -e "${BOLD}${YELLOW}Building frontend...${RESET}"
    npm run build:frontend
    echo -e "${BOLD}${YELLOW}Deploying frontend...${RESET}"
    npm run deploy:frontend
) & (
    echo -e "${BOLD}${YELLOW}Installing backend dependencies...${RESET}"
    npm run install:backend
    echo -e "${BOLD}${YELLOW}Building backend...${RESET}"
    npm run build:backend
    echo -e "${BOLD}${YELLOW}Deploying backend...${RESET}"
    npm run deploy:backend
)

echo -e "${BOLD}${GREEN}Done!${RESET}"
