import assert from 'node:assert/strict';
import { normalizeText } from './src/fashion_taxonomy.ts';
import { cosineSimilarity } from './src/semantic_embeddings.ts';
import { RecommendationService } from './src/recommendation/index.ts';

assert.equal(normalizeText('  BLACK Shirt  '), 'black shirt');
assert.ok(Math.abs(cosineSimilarity([1, 0], [1, 0]) - 1) < 1e-12);
assert.ok(Math.abs(cosineSimilarity([1, 0], [0, 1])) < 1e-12);
assert.equal(typeof new RecommendationService().recommend, 'function');
console.log('Recommender modules, text normalization and similarity checks passed.');
