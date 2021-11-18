// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

const players = require('../src/__tests__/__data__/players.json')
const teamList = {}  // initial object

const calculateTeamPoints = () => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].isActive && !teamList[players[i].team]) {
      teamList[players[i].team] = {  // adding team
        team: players[i].team,
        points: players[i].points
      }
    }
    else if (players[i].isActive && teamList[players[i].team]) {  // adding points
      teamList[players[i].team].points += players[i].points
    }
  }
  const response = Object.values(teamList)  // object to array

  response.sort((a, b) => {  // sorting array
    if (a.points < b.points) return 1;
    if (a.points > b.points) return -1;
  })
  console.log("Respuesta", response)
  return response
}

module.exports = {
  calculateTeamPoints
}