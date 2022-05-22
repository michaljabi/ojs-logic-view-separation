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
