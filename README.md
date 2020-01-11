# PM2 Two Process

Simple Example of how to run two different projects or application in the same docker container or pm2 instance

## Getting Started

This is a simple project that create two crons that runs one on each 10 seconds and other on each 20 seconds. 

### Prerequisites

You must run this project on a Linux Machine.

#### Running on Local Machine with Node JS.
Install node JS using [NVM](https://github.com/nvm-sh/nvm)

#### Installing

Clone the repository and go to project directory and run

Install dependencies with following command

```
npm install
```

#### Running the project

You can use the customs scripts to run each cron separetedly.

```
  npm run start:cron1
  npm run start:cron2
```

### Running on Local Machine with Docker. 
[Install Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)   
[Install docker-compose](https://docs.docker.com/compose/install/)

#### Installing

Run docker-compose to build image and create the container

```
  docker-compose up -d
```

### How to see logs

To see logs run docker exec with pm2 command to run inside docker container

```
  docker exec -it pm2-two-process pm2 logs cron1
  docker exec -it pm2-two-process pm2 logs cron2
```

## Built With

* [PM2](https://pm2.keymetrics.io/) - Process Management
* [node-cron](https://www.npmjs.com/package/node-cron) - Cron Task Scheduler
* [Winston](https://www.npmjs.com/package/winston) - Logger Tool
* [Moment](https://www.npmjs.com/package/moment-timezone) - Used to get and format time and dates
* [Docker](https://www.docker.com/) Container for Project
* [docker-compose](https://docs.docker.com/compose/) 

## Authors

* **Rodrigo Rocha** - *Initial work* - [7odri9o](https://github.com/7odri9o)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Be Happy
