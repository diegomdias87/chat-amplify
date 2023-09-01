const myHeaders: HeadersInit = new Headers();
myHeaders.append("Content-Type", "text/plain");

const raw = "{\r\n    \"prompt\": \"yes\"\r\n}";

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://926ljsicr2.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
  .then((response: Response) => response.text())
  .then((result: string) => console.log(result))
  .catch((error: Error) => console.log('error', error));
