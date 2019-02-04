void setup() {
 // put your setup code here, to run once:
 Serial.begin(9600);
 Serial.setTimeout(10);
 pinMode(13, OUTPUT); //pin 13 is the onboard LED
}
 
void loop() {
 // put your main code here, to run repeatedly:
 if (Serial.available() > 0) {
 char input = Serial.parseInt();
 digitalWrite(13, input);
 }
}

