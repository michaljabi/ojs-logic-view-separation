# Fruit Shop

> Separacja logiki od widoku. Obliczeń od ich wyświetlenia.
> Danych od ich interpretacji graficznej, itp., itd.  


## Zadanie:

Spraw, aby lista owocowych elementów w sklepie, była sortowana.  
- Alfabetycznie [a-z / z-a] — po nazwie owocu
- Od najwyższej / od najniższej — po cenie owocu
            
---
## Rozwiązania:

### 1.1 Make it (almost) right: 

- [1st-attempt.js](/src/1st-attempt.js)

Pierwsze, co może nam przyjść na myśl, to modyfikacja `DOM`. Jest to dość intuicyjne podejście. Skoro mam 4 elementy, to bezproblemowo mogę selekt'ować wszystkie i zamieniać je miejscami.  

Co więcej, korzystając z `.querySelectorAll(...)` nie muszę się ograniczać do `4` elementów — może ich być dowolna ilość!
              
... hmmm czy coś z tym rozwiązaniem [1st-attempt.js](/src/1st-attempt.js) jest nie tak?  
(pomijając na razie fakt powtórek w kodzie i tego, że ogólnie zabrakło refaktoringu)

> No i tutaj jest pierwsze - MAM CIĘ !  
> Bo ten kod - jest OK. 
> 
> W sensie... rozwiązuje zadanie 😆 - działa !

ZALETY:
- zadziała elastycznie i policzy się dla większej ilości danych
- rozwiązuje zadanie

WADY:
- bazuje na aktualnej strukturze HTML
- dane pozyskujemy z Widoku, w sensie — jeśli nie byłoby żadnych `<li>` z tekstem, to nie wiadomo by było co mamy robić i jak!
- selektory to `'li'` , `'button'` czy `'ul'` - więc jeśli coś zmienimy na widoku albo dodamy... wszystko się posypie
- nie ma jasnej granicy pomiędzy tym: 
  - gdzie są dane? 
  - gdzie nimi manipulujemy? 
  - gdzie jest zarządzanie widokiem?


### 2.1 Start to solve it from other side: 

- [2nd-attempt.js](/src/2nd-attempt.js)

Tutaj chcemy ugryźć temat z innej strony. Zostawmy ten `DOM` - zupełnie nie będziemy go dotykać. Zamiast tego przygotujemy sobie odpowiednią obsługę danych, bazując na modułach.

`fruits` - reprezentować będzie nasze dane

jako `export` damy konkretne metody do zarządzania stanem tych danych

> UWAGA:  
> Tutaj zadanie jest "sprawdzone" w pliku [main.js](/src/main.js) i na razie działa tylko tam.


Teraz, nie rozwiązaliśmy jeszcze zadania — jednak nie szkodzi, mamy przygotowane do tego pełne "zaplecze"
      
### 2.2 Finałowa wersja naszego rozwiązania nr 2 — działa pod _Node.js!_

- [2nd-attempt-final.js](/src/2nd-attempt-final.js)

Finalnie, znów nie dotykamy `DOM` :) i to celowo.

Żeby zobaczyć to rozwiązanie, trzeba mieć zainstalowanego [Node.js](https://nodejs.org/en/).
- puścić komendę:
```shell
npm install
```
- potem komendą:
```shell
npm run node-solution
```
Uruchomimy rozwiązane zadanie.

Celowo, rozwiązujemy to w `Node.js` - żeby zobaczyć, że podejście `fruitService` daje nam niezależność. To nieważne gdzie to finalnie zostanie "wyrenderowne". Czy na `DOM` czy gdzie indziej. Nie ma znaczenia.

Mamy "surową logikę" obsługiwania listy owoców i jej sortowania. Niezależnie od tego — gdzie to finalnie się znajdzie.
