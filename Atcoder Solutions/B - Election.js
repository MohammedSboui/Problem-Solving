process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    
    // here goes your code
    const N = parseInt(readLine())
    let election = {}
    let mx = 0
    let winner
    for(let i=0;i<N;i++){
        const elected = readLine()
        if (election[elected]){
            election[elected]++
        }
        else{
            election[elected]=1
        }

        if(election[elected]>mx){
            mx = election[elected]
            winner = elected
        }

    }

    console.log(winner);
    
}   