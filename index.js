
function showAnswer(response){

    alert(response.data.answer);
}





let apiKey = "06a4f404921b3294b64d64f35o0f753t";

let context = "be polite and provide a very short answer";

let prompt = "do penguins fly";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(showAnswer);


console.log("Processing");