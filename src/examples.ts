import type { CreativeWork, Thing, Product, WithContext } from "schema-dts";

const schemaExample: WithContext<CreativeWork | Product> = {
  // Shouldn't this resolve to a JSON representation of the schema?
  // curl  -H "Accept: application/json" https://schema.org >> Returns HTML of homepage
  "@context": "https://schema.org",
  // Type here means class, see https://schema.org/docs/full.html
  // More generic: https://schema.org/Thing
  "@type": "Product",
  // iiif-hss already creates a meta.json
  "@id":
    "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/schema.json",
  name: "TESTUDO computer door W.L. van der Poel",
  identifier: "2002.0575.EWI",
  temporalCoverage: "1944/1952",
  // Alternative: about, additionalType?, https://schema.org/DefinedTerm
  exampleOfWork: {
    "@type": "CreativeWork",
    name: "Digitale computer",
    // @spec URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
    sameAs: "http://vocab.getty.edu/aat/300024521",
  },
  // @spec The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
  creator: [
    {
      "@type": "Organization",
      name: "TU Delft faculteit TNW",
      sameAs: "https://www.wikidata.org/wiki/Q61661775",
    },
    {
      id: "https://heritage.tudelft.nl/iiif/manifests/poel.json",
      "@type": "Person",
      name: "Willem Louis van der Poel",
      sameAs: "https://www.wikidata.org/wiki/Q3189981",
    },
  ],
  contributor: {
    "@type": "Role",
    roleName: "Had in bezit",
    contributor: {
      "@type": "Person",
      name: "Van Heel, Abraham Cornelis Sebastiaan",
      sameAs: "http://wikidata.org/wiki/Q82435684",
    },
  },
  description:
    "De TESTUDO (Latijn: schildpad) is een geavanceerde mechanische rekenmachine. De TESTUDO is gebaseerd op de ARCO, een rekenmachine ontworpen als afstudeeropdracht door W. L. van der Poel (later hoogleraar bij de TU Delft). Tijdens de Tweede Wereldoorlog kwam de interesse voor wiskundige berekeningen in een stroomversnelling terecht, met name in Engeland en Amerika. Dit had te maken met de grote hoeveelheid gecodeerde berichten die ontcijferd moesten worden. De eerste 'echte' digitale computer, de Colossus (1943) was daar het gevolg van. Ook de Eniac (1946), die tot eind jaren '70 als de eerste computer gold, maakte gebruik van elektronenbuizen als voornaamste bestanddelen. \nDe TESTUDO, waar Van der Poel aan begon in 1947, bevat nog geen elektronische componenten en is gebaseerd op de relaistechniek die vanaf de jaren '30 bekend was uit de automatische telefonie. Omdat Van der Poel nauwelijks budget had om mee te werken, gebruikt hij 600 afgedankte relais, die hij via Leen van Kosten verkreeg. Deze moesten allemaal opnieuw worden opgespoeld, wat Van der Poel deed met een draaibank.\nDe TESTUDO is niet voor oorlogsdoeleinden ontworpen, maar als wetenschappelijke rekenmachine voor de vakgroep de Delftse hoogleraar A.C.S. Van Heel voor berekeningen aan optica. De TESTUDO bestaat uit vijf houten kasten. Programmeerpaneel: 1480 * 720 * 330, relaiseeheid: 1280 * 720 * 3300, Relaiseenheid: 720 * 660 * 410, relaiseenheid met lampen: 1280 * 720 * 300",
  // How to add URIs?
  // https://stackoverflow.com/questions/57209838/understanding-the-right-data-type-structure-for-schema-org-json-representation
  material: [
    {
      // Publish additional JSONs?
      "@id": "https://heritage.tudelft.nl/iiif/lod/products/hout.json",
      "@type": "Product",
      name: "Hout",
      sameAs: "https://www.wikidata.org/wiki/Q287",
    },
    {
      "@type": "Product",
      name: "Metaal",
      sameAs: "https://www.wikidata.org/wiki/Q11426",
    },
    {
      "@type": "Product",
      name: "Rubber",
      sameAs: "https://www.wikidata.org/wiki/Q18113858",
    },
  ],
  // Simpel voorbeeld
  // material: [
  //   "https://www.wikidata.org/wiki/Q287",
  //   "https://www.wikidata.org/wiki/Q11426",
  //   "https://www.wikidata.org/wiki/Q18113858",
  // ],
  height: {
    "@type": "QuantitativeValue",
    // http://wiki.goodrelations-vocabulary.org/Documentation/UN/CEFACT_Common_Codes
    unitCode: "MMT",
    value: 400,
  },
  width: {
    "@type": "QuantitativeValue",
    unitCode: "MMT",
    value: 5000,
  },
  depth: {
    "@type": "QuantitativeValue",
    unitCode: "MMT",
    value: 720,
  },
  // Kunnen we dit rijker maken?
  citation: [
    {
      "@type": "Book",
      name: "TH mededelingen, november 1957, jaargang 5 nr. 2, p.35",
    },
  ],
  // Eigenlijk alleen in Product
  isRelatedTo: {
    "@id":
      "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/metadata.json",
    "@type": "Product",
    name: "Serie zwart-witfoto's Testudo",
    identifier: "LIB.2019.0003",
  },
  image: {
    "@type": "ImageObject",
    contentUrl: {
      "@context": "http://iiif.io/api/presentation/3/context.json",
      "@id":
        "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/manifest.json",
      type: "Manifest",
    },
    thumbnailUrl:
      "https://dlc.services/thumbs/7/18/2d236e2f-7ead-4b99-a91d-2175e8138750/full/full/0/default.jpg",
    encodingFormat: "https://iiif.io/api/presentation/3.0/",
    width: "1024",
    height: "768",
  },
};

const schemaExampleEmbedded: WithContext<CreativeWork | Product> = {
  // Shouldn't this resolve to a JSON representation of the schema?
  // curl  -H "Accept: application/json" https://schema.org >> Returns HTML of homepage
  "@context": "https://schema.org",
  // Type here means class, see https://schema.org/docs/full.html
  // More generic: https://schema.org/Thing
  "@type": "Product",
  // iiif-hss already creates a meta.json
  "@id":
    "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/metadata.json",
  name: "TESTUDO computer door W.L. van der Poel",
  identifier: "2002.0575.EWI",
  temporalCoverage: "1944/1952",
  // Alternative: about, additionalType?, https://schema.org/DefinedTerm
  exampleOfWork: {
    "@type": "CreativeWork",
    name: "Digitale computer",
    // @spec URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
    sameAs: "http://vocab.getty.edu/aat/300024521",
  },
  // @spec The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
  creator: [
    {
      "@type": "Organization",
      name: "TU Delft faculteit TNW",
      sameAs: "https://www.wikidata.org/wiki/Q61661775",
    },
    {
      id: "https://heritage.tudelft.nl/iiif/manifests/poel.json",
      "@type": "Person",
      name: "Willem Louis van der Poel",
      sameAs: "https://www.wikidata.org/wiki/Q3189981",
    },
  ],
  contributor: {
    "@type": "Role",
    roleName: "Had in bezit",
    contributor: {
      "@type": "Person",
      name: "Van Heel, Abraham Cornelis Sebastiaan",
      sameAs: "http://wikidata.org/wiki/Q82435684",
    },
  },
  description:
    "De TESTUDO (Latijn: schildpad) is een geavanceerde mechanische rekenmachine. De TESTUDO is gebaseerd op de ARCO, een rekenmachine ontworpen als afstudeeropdracht door W. L. van der Poel (later hoogleraar bij de TU Delft). Tijdens de Tweede Wereldoorlog kwam de interesse voor wiskundige berekeningen in een stroomversnelling terecht, met name in Engeland en Amerika. Dit had te maken met de grote hoeveelheid gecodeerde berichten die ontcijferd moesten worden. De eerste 'echte' digitale computer, de Colossus (1943) was daar het gevolg van. Ook de Eniac (1946), die tot eind jaren '70 als de eerste computer gold, maakte gebruik van elektronenbuizen als voornaamste bestanddelen. \nDe TESTUDO, waar Van der Poel aan begon in 1947, bevat nog geen elektronische componenten en is gebaseerd op de relaistechniek die vanaf de jaren '30 bekend was uit de automatische telefonie. Omdat Van der Poel nauwelijks budget had om mee te werken, gebruikt hij 600 afgedankte relais, die hij via Leen van Kosten verkreeg. Deze moesten allemaal opnieuw worden opgespoeld, wat Van der Poel deed met een draaibank.\nDe TESTUDO is niet voor oorlogsdoeleinden ontworpen, maar als wetenschappelijke rekenmachine voor de vakgroep de Delftse hoogleraar A.C.S. Van Heel voor berekeningen aan optica. De TESTUDO bestaat uit vijf houten kasten. Programmeerpaneel: 1480 * 720 * 330, relaiseeheid: 1280 * 720 * 3300, Relaiseenheid: 720 * 660 * 410, relaiseenheid met lampen: 1280 * 720 * 300",
  // How to add URIs?
  // https://stackoverflow.com/questions/57209838/understanding-the-right-data-type-structure-for-schema-org-json-representation
  material: [
    {
      "@id":
        "https://heritage.tudelft.nl/iiif/topics/material/wood/schema.json",
      "@type": "Product",
      name: "Hout",
      // https://vocab.getty.edu/aat/300012777.json
      sameAs: "http://vocab.getty.edu/aat/300012777",
    },
    {
      "@context": "https://linked.art/ns/v1/linked-art.json",
      "@id": "http://vocab.getty.edu/aat/300012777",
      "@type": "Type",
      _label: "primary wood",
    },
    {
      "@type": "Product",
      name: "Metaal",
      sameAs: "https://www.wikidata.org/wiki/Q11426",
    },
    {
      "@type": "Product",
      name: "Rubber",
      sameAs: "https://www.wikidata.org/wiki/Q18113858",
    },
  ],
  // Simpel voorbeeld
  // material: [
  //   "https://www.wikidata.org/wiki/Q287",
  //   "https://www.wikidata.org/wiki/Q11426",
  //   "https://www.wikidata.org/wiki/Q18113858",
  // ],
  height: {
    "@type": "QuantitativeValue",
    // http://wiki.goodrelations-vocabulary.org/Documentation/UN/CEFACT_Common_Codes
    unitCode: "MMT",
    value: 400,
  },
  width: {
    "@type": "QuantitativeValue",
    unitCode: "MMT",
    value: 5000,
  },
  depth: {
    "@type": "QuantitativeValue",
    unitCode: "MMT",
    value: 720,
  },
  // Kunnen we dit rijker maken?
  citation: [
    {
      "@type": "Book",
      name: "TH mededelingen, november 1957, jaargang 5 nr. 2, p.35",
    },
  ],
  // Eigenlijk alleen in Product
  isRelatedTo: {
    "@id":
      "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/metadata.json",
    "@type": "Product",
    name: "Serie zwart-witfoto's Testudo",
    identifier: "LIB.2019.0003",
  },
  image: {
    "@type": "ImageObject",
    contentUrl: {
      "@context": "http://iiif.io/api/presentation/3/context.json",
      "@id":
        "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/manifest.json",
      type: "Manifest",
    },
    thumbnailUrl:
      "https://dlc.services/thumbs/7/18/2d236e2f-7ead-4b99-a91d-2175e8138750/full/full/0/default.jpg",
    encodingFormat: "https://iiif.io/api/presentation/3.0/",
    width: "1024",
    height: "768",
  },
};

const materialExample: WithContext<Product> = {
  "@context": "https://schema.org",
  "@id": "https://heritage.tudelft.nl/iiif/topics/material/wood/schema.json",
  "@type": "Product",
  name: "Hout",
  sameAs: "http://vocab.getty.edu/aat/300012777",
  isRelatedTo: {
    "@id":
      "https://heritage.tudelft.nl/iiif/manifests/f78a108e-f5dc-4165-a1d2-33b49f524597/schema.json",
    "@type": "Product",
    name: "TESTUDO computer door W.L. van der Poel",
  },
};

export default [schemaExample, schemaExampleEmbedded, materialExample];
