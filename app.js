const express = require('express');
const fs = require("fs");

const axios = require("axios");
const app = express();

const appendToFile = (data) => {
    for(let i = 0 ; i<4 ;i++)
    {
        fs.writeFile(
            './data.txt',
            ` ${data}  \n`,
            (err) => {
              if (err) {
                console.log('ERR');
              }
              console.log('HHHHH');
            }
          );
    }
   
};
appendToFile("jklh")
appendToFile("jklhsdaaba")