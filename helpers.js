/*


*/

function successfullMessage(msg) {
    return "✅ *X-Troid*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *X-Troid*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *X-Troid*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
