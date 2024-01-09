
function showAnswer(response){

    console.log(response);
}





let apiKey = "06a4f404921b3294b64d64f35o0f753t";

let context = "be polite and provide a very short answer";

let prompt = "when was the first ai ever created";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(showAnswer);