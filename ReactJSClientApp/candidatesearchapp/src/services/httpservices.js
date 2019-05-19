import React from 'react';

export const getPositions = function () {
    const url = "https://localhost:44370/api/Postion";
    return fetch(url)
        .then(data => data.json())
      }

export const getCandidatebyPosId = function (id) {
    const url = "https://localhost:44370/api/Candidate" + "/" + id;
     //return fetch(url)
    //   .then(data => data.json())
   return fetch(url)
        .then(data => data.json())
}