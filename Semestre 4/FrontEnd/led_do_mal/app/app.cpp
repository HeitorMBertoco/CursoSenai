#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>


const char* nomeWifi = "Ronaldo";
const char* senhaWifi = "12345678";


ESP8266WebServer server(80);



const int LED = 5;


bool lampadaLigada = false;





void handleLigar() {

  lampadaLigada = true;


  digitalWrite(LED, HIGH);

  Serial.println("LED LIGADO");

  server.send(
    200,
    "application/json",
    "{\"estado\":\"ligado\"}"
  );
}


void handleDesligar() {

  lampadaLigada = false;

  digitalWrite(LED, LOW);

  Serial.println("LED DESLIGADO");

  server.send(
    200,
    "application/json",
    "{\"estado\":\"desligado\"}"
  );
}

  

void handleEstado() {

  if (lampadaLigada) {

    server.send(
      200,
      "application/json",
      "{\"estado\":\"ligado\"}"
    );

  } else {

    server.send(
      200,
      "application/json",
      "{\"estado\":\"desligado\"}"
    );
  }
}



void setup() {

  Serial.begin(115200);

  delay(1000);



  pinMode(LED, OUTPUT);


  digitalWrite(LED, LOW);



  WiFi.mode(WIFI_AP);

  bool sucesso = WiFi.softAP(
    nomeWifi,
    senhaWifi
  );

  if (sucesso) {

    Serial.println();
    Serial.println("==============================");
    Serial.println("Wi-Fi criado!");
    Serial.println("==============================");

    Serial.print("Nome: ");
    Serial.println(nomeWifi);

    Serial.print("Senha: ");
    Serial.println(senhaWifi);

    Serial.print("IP: ");
    Serial.println(WiFi.softAPIP());

    Serial.println("==============================");
  }




  server.on(
    "/ligar",
    HTTP_GET,
    handleLigar
  );

  server.on(
    "/desligar",
    HTTP_GET,
    handleDesligar
  );

  server.on(
    "/estado",
    HTTP_GET,
    handleEstado
  );


  server.begin();

  Serial.println("Servidor HTTP iniciado!");
}


void loop() {

  server.handleClient();
}