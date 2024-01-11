function showResults(response) {
    alert(response.data.answer);
}

let apiKey = "06a4f404921b3294b64d64f35o0f753t";
let context = "please provide a simple answer";
let prompt = "who is the first female president";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showResults);


new Typewriter("h1", {
  strings: "Hello World eat carrots",
  autoStart: true,
  cursor: "",
  delay: 100,
});


