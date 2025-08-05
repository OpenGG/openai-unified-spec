// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OpenAIUnified } from '../client';

export abstract class APIResource {
  protected _client: OpenAIUnified;

  constructor(client: OpenAIUnified) {
    this._client = client;
  }
}
