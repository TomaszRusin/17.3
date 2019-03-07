
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/env':
                var nodeVer = process.versions.node
                var systemLang = process.env.OS
                process.stdout.write('Node version ' + nodeVer + ' and system is ' + systemLang);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});


// DLACZEGO TAKIE COŚ TEŻ DZIAŁĄ?
// process.stdin.on('readable', function() {
//     var input = process.stdin.read();
//     process.stdout.write(input);
// });