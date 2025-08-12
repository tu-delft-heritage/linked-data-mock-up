# Linked Open Data Mock-up

This repository contains tests and examples for publishing our collection metadata through Linked Open Data standards.

_Work in progress!_

Currently our collections are published on the [heritage website](https://heritage.tudelft.nl/) of TU Delft. All object, collection and exhibition pages are generated on the basis of [IIIF](https://iiif.io/) Manifests, which can be openly accessed and reused:

- Page: https://heritage.tudelft.nl/en/objects/f78a108e-f5dc-4165-a1d2-33b49f524597
- Underlying IIIF data: https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/manifest.json

Each manifest contains metadata in a dedicated metadata property, with an array of label/value pairs. For example:

```json
"metadata": [
    {
      "label": {
        "en": [
          "Title"
        ],
        "nl": [
          "Titel"
        ]
      },
      "value": {
        "nl": [
          "TESTUDO computer door W.L. van der Poel"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Object name"
        ],
        "nl": [
          "Objectnaam"
        ]
      },
      "value": {
        "nl": [
          "Digitale computer"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Inventory number"
        ],
        "nl": [
          "Inventarisnummer"
        ]
      },
      "value": {
        "nl": [
          "2002.0575.EWI"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Dating"
        ],
        "nl": [
          "Datering"
        ]
      },
      "value": {
        "nl": [
          "1944 – 1952"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Maker"
        ],
        "nl": [
          "Maker"
        ]
      },
      "value": {
        "nl": [
          "TU Delft faculteit TNW  (maker)",
          "van der Poel, Willem Louis  (ontwerper)"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Dimensions"
        ],
        "nl": [
          "Afmetingen"
        ]
      },
      "value": {
        "nl": [
          "400,0 mm (h) x 5.000,0 mm (b) x 720,0 mm (d)"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Material"
        ],
        "nl": [
          "Materiaal"
        ]
      },
      "value": {
        "nl": [
          "hout",
          "metaal",
          "rubber"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Description"
        ],
        "nl": [
          "Beschrijving"
        ]
      },
      "value": {
        "nl": [
          "De TESTUDO (Latijn: schildpad) is een geavanceerde mechanische rekenmachine. De TESTUDO is gebaseerd op de ARCO, een rekenmachine ontworpen als afstudeeropdracht door W. L. van der Poel (later hoogleraar bij de TU Delft). Tijdens de Tweede Wereldoorlog kwam de interesse voor wiskundige berekeningen in een stroomversnelling terecht, met name in Engeland en Amerika. Dit had te maken met de grote hoeveelheid gecodeerde berichten die ontcijferd moesten worden. De eerste 'echte' digitale computer, de Colossus (1943) was daar het gevolg van. Ook de Eniac (1946), die tot eind jaren '70 als de eerste computer gold, maakte gebruik van elektronenbuizen als voornaamste bestanddelen. \nDe TESTUDO, waar Van der Poel aan begon in 1947, bevat nog geen elektronische componenten en is gebaseerd op de relaistechniek die vanaf de jaren '30 bekend was uit de automatische telefonie. Omdat Van der Poel nauwelijks budget had om mee te werken, gebruikt hij 600 afgedankte relais, die hij via Leen van Kosten verkreeg. Deze moesten allemaal opnieuw worden opgespoeld, wat Van der Poel deed met een draaibank.\nDe TESTUDO is niet voor oorlogsdoeleinden ontworpen, maar als wetenschappelijke rekenmachine voor de vakgroep de Delftse hoogleraar A.C.S. Van Heel voor berekeningen aan optica. De TESTUDO bestaat uit vijf houten kasten. Programmeerpaneel: 1480 * 720 * 330, relaiseeheid: 1280 * 720 * 3300, Relaiseenheid: 720 * 660 * 410, relaiseenheid met lampen: 1280 * 720 * 300"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Provenance"
        ],
        "nl": [
          "Herkomst"
        ]
      },
      "value": {
        "nl": [
          "Van Heel, Abraham Cornelis Sebastiaan"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Documentation"
        ],
        "nl": [
          "Documentatie"
        ]
      },
      "value": {
        "nl": [
          "TH mededelingen, november 1957, jaargang 5 nr. 2, p.35"
        ]
      }
    },
    {
      "label": {
        "en": [
          "Related object"
        ],
        "nl": [
          "Gerelateerd object"
        ]
      },
      "value": {
        "nl": [
          "Serie zwart-witfoto's Testudo  (LIB.2019.0003)"
        ]
      }
    }
  ],
```

According to the [specifications](https://iiif.io/api/presentation/3.0/) of the Presentation API this metadata can only be used for human consumption in a viewer, and should _not_ be used for other means such as search indexing or processing by machines.

> The objective of the IIIF (pronounced “Triple-Eye-Eff”) Presentation API is to provide the information necessary to allow a rich, online viewing environment for compound digital objects to be presented to a human user, often in conjunction with the IIIF Image API. This is the sole purpose of the API and therefore descriptive information is given in a way that is intended for humans to read, but not semantically available to machines. In particular, it explicitly does not aim to provide metadata that would allow a search engine to index digital objects.

(...)

## Fields with vocabularies

- Objectnaam
  - AAT
  - CHT
  - Techniek thesaurus / Geodetische thesaurus
- Creator
- Material
- Related objects

## Specifications

- https://www.w3.org/ns/json-ld.html
- https://json-ld.org/
- https://linked.art/

## Guidelines

https://docs.nde.nl/cm-implementation-guidelines/#data-model

> To support broader visibility on the web outside the cultural heritage domain, data should be published with [Schema.org](https://schema.org/).

> In general [CIDOC-CRM](http://www.cidoc-crm.org/) (and its derivative [Linked Art](https://linked.art/model/)) can be appropriate for museums. For archives, the [RiC-O ontology](https://www.ica.org/standards/RiC/ontology) seems to be promising and for libraries, [RDA Elements](https://www.rdaregistry.info/Elements/) or [BIBFRAME](https://www.loc.gov/bibframe/) could be relevant. The KB, national library of the Netherlands uses Schema.org because this standard contains elaborate classes and properties for publications. How they use Schema.org as a domain model, can be studied [here](https://github.com/user-attachments/files/18750826/LRM2schema.pdf).

## Vocabularies

https://termennetwerk.netwerkdigitaalerfgoed.nl/

## Examples

### Leon van Wissen

FAIR Photos
https://openhumanitiesdata.metajnl.com/articles/10.5334/johd.271
https://doi.org/10.17026/SS/7VD3ME

Amsterdam Diaries
https://github.com/amsterdamtimemachine/amsterdam-diaries-data/tree/dev/rdf

### Rijksmuseum

Duikboot Lipkens:

- https://id.rijksmuseum.nl/200316084
- https://data.rijksmuseum.nl/200316084?_profile=la-framed
- https://sammeltassen-rijks.web.val.run/200316084

### Other

https://www.lazaruscorporation.co.uk/blogs/arts-tech/posts/more-on-linked-open-data-and-schemadotorg

### Notebooks and Vals

University of Amsterdam: https://observablehq.com/d/1fcb94939fd2af51
Het Nieuwe Instituut: https://observablehq.com/d/b97ef4cd4ab8c9c6
Rijksmuseum proxy: https://www.val.town/x/sammeltassen/rijks/

## Packages and code examples

https://github.com/frogcat/ttl2jsonld?tab=readme-ov-file
https://www.npmjs.com/package/n3
https://gist.github.com/RubenVerborgh/8da43c6d27d4ba0ef67f8bb2af38de36
