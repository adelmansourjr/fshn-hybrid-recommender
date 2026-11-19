# FSHN Hybrid Recommendation System

Public source release of the recommendation component used in Adel Mansour's BSc dissertation project. The modular TypeScript service combines language-model intent parsing, embedding retrieval, symbolic item scoring, outfit compatibility and diversity-aware assembly.

The public module exposes PromptParser, CatalogRepository, EmbeddingService, CandidateRanker, OutfitAssembler and RecommendationService. The source includes the original base service used by the modular implementation. It accepts catalogue and embedding inputs through its typed request interface. See [service implementation](src/recommendation/RecommendationService.ts) and [request types](src/recommendation/types.ts).

Use Node.js 20 or later.

```sh
npm install
npm run smoke
```

The smoke check imports the actual modules and checks text normalization and embedding similarity with synthetic vectors. Full inference additionally requires a catalogue, suitable embedding inputs and your own Google Cloud Application Default Credentials for the chosen cloud models. Request options control heuristic or model parsing and semantic scoring.

This repository publishes the recommendation source component. Application accounts, operational configuration, image collections, user records, credentials and the full mobile application are outside this source package. The dissertation grade is an academic CV fact. This package makes no new benchmark performance claim.
