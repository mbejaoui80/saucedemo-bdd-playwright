Feature: Authentification sur SauceDemo

  # Cas passant (Happy Path)
  Scenario: Connexion réussie
    Given Je suis sur la page de connexion
    When Je me connecte avec "standard_user" et "secret_sauce"
    Then Je devrais être redirigé vers la page "inventory"

  # Cas échouant (Negative Path)
  Scenario Outline: Échec de connexion
    Given Je suis sur la page de connexion
    When Je me connecte avec "<username>" et "<password>"
    Then Je devrais voir un message d'erreur contenant "<message>"

    Examples:
      | username        | password     | message                                     |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out.       |
      | toto            | 12345        | Username and password do not match any user |