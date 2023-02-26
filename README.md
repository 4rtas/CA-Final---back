Baigiamasis projektas

Šio projekto metu reikės sukurti internetinį forumą naudojant React, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti ir žymėti patinkančius arba nepatinkančius atsakymus. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik truputį supaprastintą versiją.

Funkcionalumas: Registruotis Prisijungti Užduoti naują klausimą (tik prisijungus) Ištrinti klausimą (tik prisiijungus) Atsakyti į užduotą klausimą (tik prisijungus) Ištrinti atsakymą (tik prisijungus) Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus) Peržiūrėti klausimų sąrašą. Filtruoti atsakytus arba neatsakytus klausimus Peržiūrėti klausimų atsakymus

Forumo projektas sudeda iš frontend'o ir backend'o dalių: Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą. Būtina susikurti ir susikonfigūruoti eslint, dotenv, o toliau Jūsų laisvė rinktis. Frontend'e naudosime React. Kaip ir backend'e galima naudoti papildomjus npm paketus.

Backend'as
Duomenų bazė
Duomenų bazė saugoti visą informaciją - klausimus, atsakymus ir vartotojus. Jeigu naudojate MySQL duomenų bazę būtina sukurti sąryšius tarp lentelių ir naudoti "Primary Key" bei "Foreign Key" apribojimus.

Routes
Pavyzdiniai maršrutai (angl. routes), kurie galėtų būti aprašyti Express serveryje:

POST /register
POST /login

GET /questions
POST /question
DELETE /question/:id

GET /question/:id/answers
POST /question/:id/answers
DELETE /answer/:id

### Frontend'as

Frontend'as neturi nustatyto dizaino vaizdo (angl. wireframes), kurį reikia atkartoti. Tačiau jum tenka sunkesnė užduotis - patiems sugalvoti ir sukurti puslapio dizainą. Svarbiausia išpildyti visus funkcinius reikalavimus ir validuoti vartotojo įvestį.

Užduoties įkėlimo instrukcijos

Instrukcijas, kaip valdyti GitHub repozitorijas rasite - https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories arba step-by-step žemiau.

1. Sukurti GitHub repozitoriją.

Instrukcijas, kaip susikurti GitHub repozitoriją rasite - https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository

2. Pakeitimus daryti atskiroje šakoje (pvz. dev), kad būtų galima sukurti Pull Request.

Kaip galima sukurti Pull Request galite sužinoti čia - https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

Naują šaką galima susikurti įvykdžius `git checkout -b dev` komandą terminale.

3. Kuriant sistemą pakeitimus nuolatos saugoti su pakeitimus su prasmingomis "commit" žinutėmis.

4. Pabaigus projektą patikrinti ar visi pakeitimai yra nusiųsti į GitHub, sukurti Pull Request per GitHub puslapį į pagrindinę šaką (`main` arba `master`) ir pateikti nuorodą šiame "assignment".

Jeigu to padaryti nepavyks galite tiesiog įkelti archyvuotus failus.

Sėkmės!
