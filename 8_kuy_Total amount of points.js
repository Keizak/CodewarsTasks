let games = ['1:2','0:0','3:1','3:3','4:1','4:1','3:1','3:0','3:3','0:1'];
console.log(games);
let points1 = 0
for ( let i in games )

{
    let team1 = Number(games[i].slice(0, 1))
    let team2 = Number(games[i].slice(2, 3))
    if (team1 > team2)
    {
        points1 +=3;
    }
    else if (team1 < team2)
    {
        points1 +=0;
    }
    else if (team1 = team2)
    {
        points1 +=1;
    }

}
console.log( points1 )
