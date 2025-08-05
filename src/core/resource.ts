// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OpenAIUnifiedFiltered } from '../client';

export abstract class APIResource {
  protected _client: OpenAIUnifiedFiltered;

  constructor(client: OpenAIUnifiedFiltered) {
    this._client = client;
  }
}
