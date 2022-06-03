const process = require('process');
let funcionesDeTreas = require('./funcionesDeTreas')
switch (process.argv[2]) {
    case "listar":
        funcionesDeTreas.listar
        break;

    default:
        break;
}