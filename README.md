# GAD-Cypress

# Wdrażanie lokalne wymagania:

## dotyczące konfiguracji środowiska dla testów Cypress w projekcie. Oto kilka kroków, które powinieneś wykonać:

1. Zainstaluj `Node.js`: Upewnij się, że masz zainstalowany `Node.js` na swoim systemie. Jeśli nie, pobierz go ze strony` Node.js` i zainstaluj.

2. Sprawdź wersję `Node.js`: Upewnij się, że korzystasz z wersji `Node.js` 18 lub 20, ponieważ projekt został przetestowany na tych wersjach.

3. Zainstaluj `Git`: Jeśli jeszcze tego nie zrobiłeś, zainstaluj `Git` na swoim komputerze. Możesz pobrać go ze strony `Git`.

4. Otwórz katalog projektu: Przejdź do katalogu głównego swojego projektu za pomocą wiersza poleceń lub terminala.

5. Sklonuj repozytorium: Sklonuj repozytorium projektu za pomocą komendy` git clone <adres-repozytorium>`.

6. Zainstaluj moduły lokalnie: W katalogu projektu uruchom komendę `npm init -y`, aby zainstalować moduły zdefiniowane w pliku `package.json`.

7. Dodajemy do projektu Cypress lokalnie `npm install cypress --save-dev`.

8. Uruchom testy: Aby uruchomić testy, użyj komendy `npx cypress open` - pierwsze uruchomienie.

9. W oknie startowym Cypress wybierz `E2E Testing`.

10. Zostaną zaproponowane 4 pliki z testami, które automatycznie zostaną pobrane po kliknięciu `continue`.

11. Wybierz domyślną przeglądarkę, sugestia `Google Chrome` i `Start E2E Testing in Chrome`.

12. Po otwarciu interfejsu webowego Cypress wybierz `Create new spec`.

13. ## Ponowne uruchomienia Cypress na komendę w VScode/terminal `npx cypress open`.

# 2. CI/CD Actions

- ## Konfiguracja workflow w GitHub Actions:

  - Przechodzimy do repozytorium na GitHubie.

  - Wybieramy zakładkę “Actions”.

  - Klikamy przycisk “Set up a workflow yourself” (konfiguracja własnego workflow).

  - Tworzymy plik `YAML`, np. `main.yml`, w folderze `.github/workflows`.

- ## Sprawdzanie poprawności pliku YAML:

  - Otwieramy plik `main.yml` i upewniamy się, że zawiera poprawne definicje zadań (jobs) i kroków (steps).

  - Dostosowujemy konfigurację do naszych potrzeb.

- ## Testowanie workflow:

  - Po zapisaniu pliku `YAML`, wrzucamy go na `GitHuba`.

  - Workflow zostanie automatycznie uruchomiony przy kolejnym `push` do gałęzi main.

- ## Sprawdzanie wyników w zakładce Actions:

  - Wchodzimy do zakładki “Actions” i wybieramy nasz workflow.

  - Sprawdzamy, czy wszystko działa poprawnie.

  - Jeśli coś wymaga poprawek, dostosowujemy plik `YAML` lub kod.

---

# Gdzie znajdziesz początkowe testy?:

## Struktura katalogów i plików:

[](https://github.com/EwaRRPoland/GAD-Cypress/blob/32b680ca26bfad77d17925b69239eec8d606d80a/assets/file_structure.jpg)

## Plik z testami:

# Zastosowanie Page object pattern w testach.

1. Testy z wykorzystaniem wzorca `Page object pattern` - `login.cy.js`.

2. Każda strona ma swój własny plik w folderze `pages`:

a. Dla strony logowania istnieje plik `Login.js`.

b. Dla strony głównej istnieje plik `HomePage.js`.
