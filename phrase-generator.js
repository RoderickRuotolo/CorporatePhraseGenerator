
var rand = function () {
	return Math.floor(Math.random() * 10);
};

/**
 * Recebe objeto de padr? data.json e retorna uma frase
 */
module.exports = function (data) {

    return data[0].coluna[rand()] + 
           " " + 
           data[1].coluna[rand()] + 
           " " + 
           data[2].coluna[rand()] + 
           " " +  
           data[3].coluna[rand()];

} 