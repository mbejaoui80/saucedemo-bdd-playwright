Feature: Gestion du Panier

  Background:
    Given Je suis sur la page de connexion
    And Je me connecte avec "standard_user" et "secret_sauce"

  Scenario: Ajouter un produit au panier
    When Je clique sur le bouton ajouter au panier du premier produit
    Then Le badge du panier devrait afficher "1"

  Scenario: Parcours complet d'achat (End-to-End)
    When Je clique sur le bouton ajouter au panier du premier produit
    And Je vais dans le panier et je passe au paiement
    And Je remplis les informations de livraison avec "John", "Doe", "75001"
    And Je finalise la commande
    Then Je devrais voir le message de succès "Thank you for your order!"