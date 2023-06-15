function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());

function findPlayerInTeam(team, playerName) {
  if (team.players[playerName]) {
    return team.players[playerName];
  } else {
    return null;
  }
}

function numPointsScored(playerName) {
  let game = gameObject();

  let player = findPlayerInTeam(game.home, playerName);
  if (!player) {
    player = findPlayerInTeam(game.away, playerName);
  }

  if (player) {
    return player.points;
  } else {
    return "Player not found";
  }
}
console.log(numPointsScored("Alan Anderson"));

function getPlayerStat(playerName, stat) {
  let game = gameObject();

  let player = findPlayerInTeam(game.home, playerName);
  if (!player) {
    player = findPlayerInTeam(game.away, playerName);
  }

  if (player) {
    return player[stat];
  } else {
    return "Player not found";
  }
}

function shoeSize(playerName) {
  return getPlayerStat(playerName, "shoe");
}

console.log(shoeSize("Alan Anderson"));

function findTeamByName(teamName) {
  let game = gameObject();

  if (game.home.teamName === teamName) {
    return game.home;
  } else if (game.away.teamName === teamName) {
    return game.away;
  } else {
    return null;
  }
}

// Function to get team colors
function teamColors(teamName) {
  let team = findTeamByName(teamName);

  if (team) {
    return team.colors;
  } else {
    return "Team not found";
  }
}

// Function to get all team names
function teamNames() {
  let game = gameObject();

  return [game.home.teamName, game.away.teamName];
}

// Function to get player numbers for a team
function playerNumbers(teamName) {
  let team = findTeamByName(teamName);

  if (team) {
    return Object.values(team.players).map((player) => player.number);
  } else {
    return "Team not found";
  }
}

function playerStats(name) {
  const playerStats =
    gameObject().home.players[name] || gameObject().away.players[name];

  return {
    number: playerStats.number,
    shoe: playerStats.shoe,
    points: playerStats.points,
    rebounds: playerStats.rebounds,
    assists: playerStats.assists,
    steals: playerStats.steals,
    blocks: playerStats.blocks,
    slamDunks: playerStats.slamDunks,
  };
}

function bigShoeRebounds() {
  const players = gameObject().home.players.concat(gameObject().away.players);

  // Initialize the player with the largest shoe size and the number of rebounds.
  let playerWithLargestShoeSize = players[0];
  let playerWithLargestShoeSizeRebounds = 0;

  // Iterate through all players.
  for (const player of players) {
    if (player.shoe > playerWithLargestShoeSize.shoe) {
      playerWithLargestShoeSize = player;
      playerWithLargestShoeSizeRebounds = player.rebounds;
    } else if (player.shoe === playerWithLargestShoeSize.shoe) {
      playerWithLargestShoeSizeRebounds = Math.max(
        playerWithLargestShoeSizeRebounds,
        player.rebounds
      );
    }
  }

  // Return the number of rebounds.
  return playerWithLargestShoeSizeRebounds;
}

function mostPointsScored() {
  const players = gameObject().home.players.concat(gameObject().away.players);

  let playerWithMostPoints = players[0];

  for (const player of players) {
    if (player.points > playerWithMostPoints.points) {
      playerWithMostPoints = player;
    }
  }

  // Return the player with the most points.
  return playerWithMostPoints;
}

function winningTeam() {
  let homePoints = 0;
  let awayPoints = 0;

  for (const player of gameObject().home.players) {
    homePoints += player.points;
  }

  for (const player of gameObject().away.players) {
    awayPoints += player.points;
  }

  if (homePoints > awayPoints) {
    return gameObject().home;
  } else {
    return gameObject().away;
  }
}

function playerWithLongestName() {
  const players = gameObject().home.players.concat(gameObject().away.players);

  let playerWithLongestName = players[0];

  for (const player of players) {
    if (player.name.length > playerWithLongestName.name.length) {
      playerWithLongestName = player;
    }
  }

  return playerWithLongestName;
}

function doesLongNameStealATon() {
  const players = gameObject().home.players.concat(gameObject().away.players);

  let playerWithLongestName = players[0];
  let playerWithMostSteals = players[0];

  // Iterate through all players.
  for (const player of players) {
    if (player.name.length > playerWithLongestName.name.length) {
      playerWithLongestName = player;
    }

    if (player.steals > playerWithMostSteals.steals) {
      playerWithMostSteals = player;
    }
  }

  // Return true if the player with the longest name also had the most steals.
  return playerWithLongestName === playerWithMostSteals;
}
