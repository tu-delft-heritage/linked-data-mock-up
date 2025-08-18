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

- [FAIR Photos – Transforming a Collection of Two Million Historical Press Photos into Five Star Data](https://openhumanitiesdata.metajnl.com/articles/10.5334/johd.271)
- [FAIR Photos - CLARIAH FAIR Data Call 2023](https://doi.org/10.17026/SS/7VD3ME)
- [Amsterdam Diaries](https://github.com/amsterdamtimemachine/amsterdam-diaries-data/tree/dev/rdf)

### Rijksmuseum

Duikboot Lipkens:

- https://id.rijksmuseum.nl/200316084
- https://data.rijksmuseum.nl/200316084?_profile=la-framed
- https://sammeltassen-rijks.web.val.run/200316084

### Other

- [More on Linked Open Data and Schema.org](https://www.lazaruscorporation.co.uk/blogs/arts-tech/posts/)more-on-linked-open-data-and-schemadotorg
- [Evaluation of Schema.org for Aggregation of Cultural Heritage Metadata](https://link.springer.com/chapter/10.1007/978-3-319-93417-4_15)
- [Open-Data-Acquisition-Framework](https://github.com/nfreire/Open-Data-Acquisition-Framework/tree/master/opaf-casestudies/src/data/schemaorg)

### Notebooks and Vals

- [University of Amsterdam](https://observablehq.com/d/1fcb94939fd2af51)
- [Het Nieuwe Instituut](https://observablehq.com/d/b97ef4cd4ab8c9c6)
- [Rijksmuseum proxy](https://www.val.town/x/sammeltassen/rijks/)

## Packages and code examples

https://github.com/frogcat/ttl2jsonld?tab=readme-ov-file
https://www.npmjs.com/package/n3
https://gist.github.com/RubenVerborgh/8da43c6d27d4ba0ef67f8bb2af38de36
