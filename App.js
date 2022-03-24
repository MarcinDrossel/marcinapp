const request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }
  if (request.status === 200) {
    console.log('success'); 
  } else {
    console.warn('error')
  }
};

request.open('GET', 'http://mywebsite.com/endpoint')
request.send();

//WebSocket

const ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  //otwarcie połączenia
  ws.send('something');
};

ws.onmessage = (e) => {
  //odbieranie wiadomości
  console.log(e.data);
};

ws.onerror = (e) => {
  //obsługiwanie błędu 
  console.log(e.message);
};

ws.onclose = (e) => {
  //zamknięcie połączenia
  console.log(e.code, e.reason);
};