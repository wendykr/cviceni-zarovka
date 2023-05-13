# Cvičení: Interaktivní komponenty

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Žárovky

Vzpomeňte si na příklad se zapínáním a vypínáním žárovky. V tomto cvičení žárovku naprogramujeme pomocí komponent a DOM elementů.

- Vytvořte si repozitář ze šablony [cviceni-zarovka](https://github.com/Czechitas-podklady-WEB/cviceni-zarovka).
- Otevřete si stránku v prohlížeči. Měli byste vidět jednu žárovku.
- Prohlédněte si soubor `index.html` a podívejte se, jak je žárovka vytvořena.
- V oddělené složce vytvořte komponentu `Bulb`, která vyrobí DOM element pro žárovku. Komponenta bude vyžadovat jednu *props* s názvem `isOn` udávající, zda je žárovka zapnutá či nikoliv. Zapnutí žárovky proveďte tak, že na element přidáte třídu `bulb--on`.
- Smažte obsah elementu `#app` v `index.html`. Pomocí `append` do něj vložte tři žárovky, jednu zapnutou a dvě vypnuté.
- Na `div` element uvnitř komponenty připojte posluchač událost `click`. Ten žárovku při kliknutí rozsvítí/zhasne tím, že pomocí `replaceWith` nahradí starou žárovku novou žárovkou.
- Vyzkoušejte, že dokážete na stránce nezávisle rozsvítit a zhasnout všechny tři žárovky.